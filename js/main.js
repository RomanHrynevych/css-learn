// "use strict";

// const circleArr = document.querySelector(`.circle-anim-ul`);

// let styles = `
//   .circle-anim-ul li {width: 170px; border: solid 2px #ff0000; box-shadow: 0 0 5px #ff0000;}
//   .circle-anim-ul li span {height: 170px; color: #ff0000;} .circle-anim-ul li span::after {background: #ff0000; box-shadow: 0 0 5px #ff0000; top: 103%;}
//   `;
// new Array(...circleArr.children).forEach((li, i) => {
//   const percentage = +li.getAttribute("circle-perc");

//   if (percentage > 0 && percentage < 100) {
//     const color = mainColor(percentage);
//     const liHTML = `.circle-anim-ul li:nth-child(${i + 1})`;
//     const span = `${liHTML} span`;
//     styles += `${liHTML} {transition: all 1s; border: solid 2px ${color}; box-shadow: 0 0 5px ${color};}
//     ${span} {transition: all 1s; color: ${mainColor(percentage, true)};}
//     ${span}::after {transition: all 1s;background: ${color}; box-shadow: 0 0 5px ${color}; top: ${
//       100 - percentage
//     }%;}`;

//     animateValue(li.children[0], 0, percentage, 1000);
//   }
// });

// function animateValue(obj, start, end, duration) {
//   let startTimestamp = null;
//   const step = (timestamp) => {
//     if (!startTimestamp) startTimestamp = timestamp;
//     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//     obj.innerHTML = `${Math.floor(progress * (end - start) + start)}%`;
//     if (progress < 1) {
//       window.requestAnimationFrame(step);
//     }
//   };
//   window.requestAnimationFrame(step);
// }
// // Your CSS as text

// let styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.setAttribute("name", "Circle-Animation");
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);

// function colorCounter(perc) {
//   let red = 255;
//   let green = 255;
//   if (perc < 50) {
//     green = Math.round(((255 * perc) / 100) * 2);
//   } else if (perc > 50) {
//     red = Math.round(255 - (255 * perc) / 300);
//   }
//   return [red, green];
// }

// function mainColor(perc, forText = false) {
//   const arr = colorCounter(perc);
//   if (perc > 40 && forText) {
//     return `rgb(${arr[0] - 70}, ${arr[1] - 70}, 0)`;
//   } else {
//     return `rgb(${arr[0]}, ${arr[1]}, 50)`;
//   }
// }
