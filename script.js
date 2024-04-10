let cv, ctx;
let expression = '';
let input;

window.onload = function() {
  setup();
}

const setup = function() {
  cv = document.querySelector('canvas');
  ctx = cv.getContext('2d');
  input = document.createElement('input');
  input.value = 'f(x) = x * x';
  input.addEventListener('change', function() {
    expression = getFunction(input.value);
    drawGraph();
  });
  document.body.appendChild(input);
  expression = getFunction(input.value);
  drawGraph();
}

function f(x) {
  return eval(expression.replace(/\x/g, x));
}

function df(x) {
  return Math.lim(f, x);
};

const drawGraph = function() {
  background(cv, 'grey');
  let settings = {
    minX: -10,
    maxX: 10,
    minY: -10,
    maxY: 10,
    xC1: 0,
    xC2: cv.width - 0,
    yC1: cv.height - 0,
    yC2: 0,
    unitX: 1,
    unitY: 1,
    deltaX: 0.01
  };
  graph(cv, x => f(x), settings);
}

const getFunction = string => string.replace(/\ /g, '').split('=')[1];