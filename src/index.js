import './index.css';

var h1 = document.querySelector('h1')
var colors = ['red', 'orange', 'yellow', 'blue', 'purple', 'pink']
var random = Math.floor(Math.random() * 6);

h1.style.color = colors[random];
