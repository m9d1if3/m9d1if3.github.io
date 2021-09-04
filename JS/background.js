const imgPlacement = document.querySelector("#quotes");
const parentDiv = document.querySelector("#div_container");
const CLASSNAME_BODY = "body";

const imgs = ["bg_1.jpg", "bg_2.jpg", "bg_3.jpg", "bg_4.jpg", "bg_5.jpg", "bg_6.jpg", "bg_7.jpg"];
const NUM_IMGARR_LENGTH = imgs.length;
//console.log(imgs[0]);

console.log(imgPlacement);
let numRand2 = Math.floor(Math.random() * NUM_IMGARR_LENGTH);
const chosenImg = imgs[numRand2];
const sourceImg = document.createElement("img");
sourceImg.src = `img/${chosenImg}`;

parentDiv.insertBefore(sourceImg, imgPlacement);

