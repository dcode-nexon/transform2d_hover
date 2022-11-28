const frame = document.querySelector('section');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let enableClick = true;
const delay = convertSpeed(frame.children[0]);

frame.prepend(frame.lastElementChild);

next.addEventListener('click', () => {
  if (!enableClick) return;
  frame.append(frame.firstElementChild);
  enableClick = false;
  setTimeout(() => enableClick = true, delay)

});
prev.addEventListener('click', () => {
  if (!enableClick) return;
  frame.prepend(frame.lastElementChild);
  enableClick = false;
  setTimeout(() => enableClick = true, delay)
});

function convertSpeed(el) {
  return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
}



