const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnValue = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  btnValue.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  btnValue.textContent = counterValue;
};
console.log(btnValue.textContent);

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
