"use strict";
gsap.from(".main_heading", {
  delay: 1.5,
  duration: 1,
  y: 200,
  opacity: 0,
  ease: "back(2)",
});

gsap.from(".main-h2", {
  delay: 1,
  duration: 1,
  x: -100,
  opacity: 0,
  y: -200,
  ease: "slow",
});

gsap.from(".side_bar_box", {
  delay: 2,
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "back",
});
gsap.from(".pet_image", {
  duration: 1,
  y: -200,
  opacity: 0,
  ease: "back",
  scrollTrigger: {
    trigger: ".pet_image",
    start: "top",
  },
});

gsap.from(".main_img", {
  delay: 0.2,
  duration: 1,
  y: "50%",
  ease: "bounce",
  opacity: 0,
});
gsap.from(".para-container-heading", {
  duration: 1,
  x: "200%",
  ease: "back",
  opacity: 0,
  scrollTrigger: {
    trigger: ".pet_image",
    start: "-100",
  },
});
gsap.from(".introduc-heading", {
  delay: 0.4,
  duration: 1,
  rotation: "100%",
  ease: "slow",
  opacity: 0,
  scrollTrigger: {
    trigger: ".introduc-heading",
    start: "-500",
  },
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".faq-cat_img", {
  delay: 0.4,
  duration: 1,
  scale: 1.5,
  y: "50%",
  ease: "slow",
  opacity: 0,
  scrollTrigger: {
    trigger: ".faq-cat_img",
    start: "top center",
  },
});

// cat form
gsap.from(".cat_img", {
  delay: 0.4,
  duration: 1,
  x: "-100%",
  scale: 2,
  ease: "back",
  opacity: 0,
  scrollTrigger: {
    trigger: ".cat_img",
    start: "top center",
  },
});

//  number decrement button
function increment() {
  const stayingDays = document.getElementById("staying-days");
  stayingDays.value = parseInt(stayingDays.value) + 1;
}
//  number decrement button
function decrement() {
  const stayingDays = document.getElementById("staying-days");
  if (parseInt(stayingDays.value) > 1) {
    stayingDays.value = parseInt(stayingDays.value) - 1;
  }
}

// Sticky Navigation
window.onscroll = function () {
  var headerElement = document.querySelector(".header");
  if (document.documentElement.scrollTop > 400) {
    headerElement.classList.add("ps-fix");
  } else {
    headerElement.classList.remove("ps-fix");
  }
};

// stop button of scrolling to top position
let stopTopBtn = document.querySelectorAll(".button-stop-effect");
stopTopBtn.forEach((obj) => {
  obj.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

// Smooth scroll function
// Vanilla JavaScript
document.addEventListener("DOMContentLoaded", function () {
  var scrollLinks = document.querySelectorAll("a.scrollLink");

  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      var offsetTop = target.offsetTop;
      var scrollOptions = {
        top: offsetTop,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    });
  });
});

// FAQ Section
let faqQuestions = document.querySelectorAll(".question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    let answer = this.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// increment counter
function incrementCounters() {
  var counters = document.querySelectorAll("span[data-target]");
  var duration = 1000; // Duration in milliseconds for the counter animation

  counters.forEach(function (counter) {
    var targetValue = parseInt(counter.getAttribute("data-target"));
    var currentValue = parseInt(counter.innerText);
    var increment = Math.ceil((targetValue / duration) * 10);

    var interval = setInterval(function () {
      currentValue += increment;
      counter.innerText = currentValue;

      if (currentValue >= targetValue) {
        counter.innerText = targetValue;
        clearInterval(interval);
      }
    }, 15);
  });
}

function handleScroll() {
  var scrollY = window.scrollY;
  var targetScrollPosition = 6000;

  if (scrollY >= targetScrollPosition) {
    incrementCounters();
    window.removeEventListener("scroll", handleScroll);
  }
}
window.addEventListener("scroll", handleScroll);
//  end

//side bar
const sideBarbox = document.querySelector(".side_bar");
const sideBarButton = document.querySelector(".side_bar_button");

sideBarButton.addEventListener("click", () => {
  sideBarbox.classList.toggle("side_bar-animation");

  // Replace the class name of the child element within the button
  const childElement = sideBarButton.querySelector(".fa-bars");
  childElement.classList.toggle("fa-xmark");
});
