const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const textInput = () => {
  if (input.value === '') {
    output.textContent = 'незнакомец';
  } else {
    output.textContent = input.value;
  }
};

input.addEventListener('input', textInput);
