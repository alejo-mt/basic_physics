import './style.css';

function $(selector) {
  return document.querySelector(selector);
}

const context = $('#canvas-demo').getContext('2d');
console.log('context', context);

window.onload = function () {
  context.beginPath();
  context.strokeStyle = 'red';
  context.moveTo(10, 10);
  context.lineTo(50, 80);
  context.moveTo(50, 10);
  context.lineTo(10, 80);

  context.stroke();
  context.closePath();
};
