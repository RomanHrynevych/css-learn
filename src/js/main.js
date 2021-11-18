"use strict";
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = `${Math.floor(progress * (end - start) + start)}%`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
const animationBlock = document.querySelector(`.circle-anim-ul`);

const optionsSectionFade = {
  root: null,
  threshold: 0.5,
};

const callbackSectionFade = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  let head = document.getElementsByTagName("HEAD")[0];

  let link = document.createElement("link");

  link.rel = "stylesheet";

  link.type = "text/css";

  link.href = "src/css/circle-wave.css";

  head.appendChild(link);

  const circleArr = document.querySelector(`.circle-anim-ul`);

  new Array(...circleArr.children).forEach((li, i) => {
    const percentage = +li.getAttribute("circle-perc");
    animateValue(li.children[0], 0, percentage, (percentage / 50) * 1000);
  });

  observerSectionFade.unobserve(animationBlock);
};

const observerSectionFade = new IntersectionObserver(
  callbackSectionFade,
  optionsSectionFade
);

observerSectionFade.observe(animationBlock);
