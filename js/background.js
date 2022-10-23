const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"]

const chosenImage1 = images[Math.floor(Math.random()*images.length)];
const bgImage1 = document.createElement("img");

bgImage1.src=`img/${chosenImage1}`;
bgImage1.classList.add("placeImage1");

document.body.appendChild(bgImage1);

const chosenImage2 = images[Math.floor(Math.random()*images.length)];
const bgImage2 = document.createElement("img");

bgImage2.src=`img/${chosenImage2}`;
bgImage2.classList.add("placeImage2");

document.body.appendChild(bgImage2);



const stockImages = ["stock_0.jpg","stock_1.jpg","stock_2.jpg","stock_3.jpg","stock_4.jpg","stock_5.jpg","stock_6.jpg","stock_7.jpg"]

const chosenStockImage = stockImages[Math.floor(Math.random()*stockImages.length)];
const stockImage = document.createElement("img");

stockImage.src=`stockImg/${chosenStockImage}`;
stockImage.classList.add("stockImage");

document.body.appendChild(stockImage);

