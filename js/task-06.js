const inputRef = document.querySelector('#validation-input');
const dataLengthRef = +inputRef.dataset.length;

const focusInput = () => {
  if (inputRef.value.length === dataLengthRef) {
    changeClass('valid', 'invalid');
  } else {
    changeClass('invalid', 'valid');
  }
};

const changeClass = (newClass, oldClass) => {
  inputRef.classList.add(newClass);
  inputRef.classList.remove(oldClass);
};

inputRef.addEventListener('blur', focusInput);
