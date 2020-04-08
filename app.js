const textarea = document.querySelector('textarea');
textarea.focus();
const h2 = document.querySelector('h2');
const history = document.querySelector('#history');

let count = 0;
let current;
let previouslyEmpty = true;
textarea.addEventListener('input', (e) => {

  if (previouslyEmpty) {
    h2.style.display = 'none';
  }
  
  if (e.data !== null) {
    current = textarea.value;
    count = 0;
    previouslyEmpty = false;
  } else if (e.data === null && count === 0) {
    capture();
  }
  
  if (textarea.value === '') {
    h2.textContent = 'Form history is not secure.'
    history.textContent = '';
    previouslyEmpty = true;
  }
});

textarea.addEventListener('select', (e) => {
  current = textarea.value;
  capture();
});

function capture() {
  h2.style.display = 'block';
  h2.textContent = 'Gotcha!'
  const para = document.createElement('p');
  para.textContent = current;
  history.prepend(para);
  count++;
}