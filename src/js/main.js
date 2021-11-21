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

const ListArr = document.querySelectorAll(`.circle-anim-li`);

const optionsSectionFade = {
  root: null,
  threshold: 0.8,
};

const callbackSectionFade = function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;

    const type = entry.target.classList[1];
    entry.target.classList.add("active");
    const percentage = +entry.target.getAttribute("circle-perc");
    let duration;
    if (type === `wave`) {
      duration = (percentage / 50) * 1000;
    } else if (type === "progress") {
      duration = percentage * 1.5 * 10;
    }
    animateValue(entry.target.children[0], 0, percentage, duration);

    observerSectionFade.unobserve(entry.target);
  });
};

const observerSectionFade = new IntersectionObserver(
  callbackSectionFade,
  optionsSectionFade
);

ListArr.forEach(function (elem) {
  observerSectionFade.observe(elem);
});

// Chart
const chartBlock = document.querySelector(`#myChart`);

const optionsChart = {
  root: null,
  threshold: 0.8,
};

const callbackChart = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "amount of days",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  observerChart.unobserve(entry.target);
};

const observerChart = new IntersectionObserver(callbackChart, optionsChart);

observerChart.observe(chartBlock);
