"use strict";

import { motivationalQuotes } from "./quotes.js";
import { you } from "./you.js";
import { memory } from "./memory.js";

// Pokeball
const toggle = document.getElementById("toggle");
const body = document.querySelector("body");

const youBtn = document.getElementById("you-btn");
const memoryBtn = document.getElementById("memory-btn");
const memoryAndYouBtnContent = document.getElementById(
  "memory-and-you-btn-content"
);

const time = Date.now();
const today = new Date(time);
const greetingTime = new Date(time).getHours();
const greetingTitle = document.querySelector("h2");
const todaysDate = document.getElementById("date");
const quoteGenerator = document.getElementById("quote-generator");
let randomNum = 133337;
let greeting;

// Pokeball
toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  youBtn.classList.toggle("active");
  memoryBtn.classList.toggle("active");
  quoteGenerator.classList.toggle("active");
  memoryAndYouBtnContent.classList.toggle("active");
};

// Quoteeee
if (greetingTime < 12)
  greeting =
    "Good Morning Jorge! The sunshine has nothing on your smile! HAPPY BIRTHDAY!";
else if (greetingTime >= 12 && greetingTime <= 17)
  greeting =
    "Good Afternoon Jorggeee! Today looks so good on you! HAPPY BIRTHDAY!";
else if (greetingTime >= 17 && greetingTime <= 24)
  greeting = `Good Evening Jorgggeee! Your reminder to take a break, breath, relax!! HAPPY BIRTHDAY!`;

greetingTitle.textContent = greeting;
todaysDate.textContent = today.toDateString();

quoteGenerator.textContent = `"${
  motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
}"`;

youBtn.addEventListener("click", function () {
  memoryAndYouBtnContent.textContent =
    you[Math.floor(Math.random() * you.length)];
  console.log(memoryAndYouBtnContent);
});

memoryBtn.addEventListener("click", function () {
  memoryAndYouBtnContent.textContent =
    memory[Math.floor(Math.random() * memory.length)];
  console.log(memoryAndYouBtnContent);
});

console.log(
  `Checking to see if there's any errors!? 😏 We both know I make errors like ${Math.floor(
    Math.random() * randomNum
  )} a day but I mean I had to cover all my bases here no!?`
);
