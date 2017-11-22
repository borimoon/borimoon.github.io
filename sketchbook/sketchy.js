var canvas = document.getElementById('canvas');
var draw = canvas.getContext('2d');

var container = document.getElementById('container');
var container_style = getComputedStyle(container);
canvas.width = 700;
canvas.height = 450;

var mouse = {
  x: 0,
  y: 0
};

canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

draw.lineJoin = 'round';
draw.lineCap = 'round';

draw.strokeStyle = '#8A8C8E';

document.getElementById('pencil').onclick = function() {
  var getPencil = '#8A8C8E';
    draw.strokeStyle = getPencil;
    draw.lineWidth = '1';
};

document.getElementById('color').onclick = function() {
  var getColor = '#FFD232';
    draw.strokeStyle = getColor;
    draw.lineWidth = '22';
};

document.getElementById('eraser').onclick = function() {
  var getEraser = '#fff';
    draw.strokeStyle = getEraser;
    draw.lineWidth = '42';
};

canvas.addEventListener('mousedown', function(e) {
    draw.beginPath();
    draw.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

var onPaint = function() {
    draw.lineTo(mouse.x, mouse.y);
    draw.stroke();
};
