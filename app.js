const backgroundAnimation = document.getElementById('background-animation');
let figureCount = 50;
let i = 0;

while (i < figureCount) {
  const figure = document.createElement('div');
  figure.style.width = Math.random() * 20 + 10 + 'px';
  figure.style.height = figure.style.width;
  figure.style.position = 'absolute';
  figure.style.left = Math.random() * 100 + '%';
  figure.style.top = Math.random() * 100 + '%';
  figure.style.background = 'rgba(255, 255, 255, ' + Math.random() + ')';
  figure.style.borderRadius = '50%';
  figure.style.animation = 'floating ' + (Math.random() * 5 + 5) + 's ease-in-out infinite';
  backgroundAnimation.appendChild(figure);
  i++;
}