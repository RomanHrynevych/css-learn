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

const animationBlock = document.querySelectorAll(`.circle-anim-ul`);

const optionsSectionFade = {
  root: null,
  threshold: 0.01,
};

const callbackSectionFade = function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    const type = entry.target.classList[1];

    let head = document.getElementsByTagName("HEAD")[0];
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = `src/css/circle-${type}.css`;
    head.appendChild(link);

    const circleArr = document.querySelector(`.circle-anim-ul.${type}`);
    new Array(...circleArr.children).forEach((li, i) => {
      const percentage = +li.getAttribute("circle-perc");
      let duration;
      if (type === `wave`) {
        duration = (percentage / 50) * 1000;
      } else if (type === "progress") {
        duration = percentage * 1.5 * 10;
      }
      animateValue(li.children[0], 0, percentage, duration);
    });

    observerSectionFade.unobserve(entry.target);
  });
};

const observerSectionFade = new IntersectionObserver(
  callbackSectionFade,
  optionsSectionFade
);

animationBlock.forEach(function (elem) {
  observerSectionFade.observe(elem);
});
