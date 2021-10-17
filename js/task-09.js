function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColor = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body')

randomColor.addEventListener('click', onClickBtn);
function onClickBtn(){
 const color = getRandomHexColor()
  bodyEl.style.backgroundColor = color;
  spanEl.textContent =color;
  
}
