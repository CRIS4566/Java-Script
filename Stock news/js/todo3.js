const weekForm = document.getElementById("todo-form3");
const weekInput = document.querySelector("#todo-form3 input");
const weekList = document.getElementById("todo-list3");

const WEEKS_KEY = "weeks";

let weeks = [];

function saveWeeks() {
  localStorage.setItem(WEEKS_KEY, JSON.stringify(weeks));
}

function deleteWeek(event) {
  const li = event.target.parentElement;
  li.remove();
  weeks = weeks.filter((week) => week.id !== parseInt(li.id));
  saveWeeks();
}

function paintWeek(newWeek) {
  const li = document.createElement("li");
  li.id = newWeek.id;
  const button = document.createElement("button");
  button.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = newWeek.text;
  button.addEventListener("click", deleteWeek);
  li.appendChild(button);
  li.appendChild(span);
  weekList.appendChild(li);
}

function handleWeekSubmit(event) {
  event.preventDefault();
  const newWeek = weekInput.value;
  weekInput.value = "";
  const newWeekObj = {
    text: newWeek,
    id: Date.now(),
  };
  weeks.push(newWeekObj);
  paintWeek(newWeekObj);
  saveWeeks();
}

weekForm.addEventListener("submit", handleWeekSubmit);

const savedWeeks = localStorage.getItem(WEEKS_KEY);

if (savedWeeks) {
  const parsedweeks = JSON.parse(savedWeeks);
  weeks = parsedweeks;
  parsedweeks.forEach(paintWeek);
}
