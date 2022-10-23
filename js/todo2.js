const holdForm = document.getElementById("todo-form2");
const holdInput = document.querySelector("#todo-form2 input");
const holdList = document.getElementById("todo-list2");

const HOLDS_KEY = "holds";

let holds = [];

function saveHolds() {
  localStorage.setItem(HOLDS_KEY, JSON.stringify(holds));
}

function deleteHold(event) {
  const li = event.target.parentElement;
  li.remove();
  holds = holds.filter((hold) => hold.id !== parseInt(li.id));
  saveHolds();
}

function paintHold(newHold) {
  const li = document.createElement("li");
  li.id = newHold.id;
  const button = document.createElement("button");
  button.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = newHold.text;
  button.addEventListener("click", deleteHold);
  li.appendChild(button);
  li.appendChild(span);
  holdList.appendChild(li);
}

function handleHoldSubmit(event) {
  event.preventDefault();
  const newHold = holdInput.value;
  holdInput.value = "";
  const newHoldObj = {
    text: newHold,
    id: Date.now(),
  };
  holds.push(newHoldObj);
  paintHold(newHoldObj);
  saveHolds();
}

holdForm.addEventListener("submit", handleHoldSubmit);

const savedHolds = localStorage.getItem(HOLDS_KEY);

if (savedHolds) {
  const parsedholds = JSON.parse(savedHolds);
  holds = parsedholds;
  parsedholds.forEach(paintHold);
}
