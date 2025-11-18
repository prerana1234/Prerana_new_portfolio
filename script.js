// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
// Dynamic date for expirence
// Function to get the current month and year
function getCurrentMonthYear() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`; // YYYY-MM format
}

// Function to update the stored experience
function updateExperience() {
  const storedData = JSON.parse(localStorage.getItem('experienceData')) || { experience: 3.8, lastUpdated: '' };
  const currentMonthYear = getCurrentMonthYear();

  if (storedData.lastUpdated !== currentMonthYear) {
      storedData.experience = parseFloat((storedData.experience + 0.1).toFixed(1)); // Increment by 0.1 for each month
      storedData.lastUpdated = currentMonthYear;
      localStorage.setItem('experienceData', JSON.stringify(storedData));
  }

  return storedData.experience;
}

// Update the experience in the DOM
document.addEventListener("DOMContentLoaded", function () {
  const experienceValue = updateExperience();
  document.querySelector('.experience .num').textContent = experienceValue;
});


