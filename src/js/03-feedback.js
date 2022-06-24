import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');

const FORM_STATE = 'feedback-form-state';
const savedOptions = {};

document.addEventListener('load', onReload());
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmit);
// console.dir(form);

function onFormInput(e) {
  savedOptions[e.target.name] = e.target.value;
  localStorage.setItem(FORM_STATE, JSON.stringify(savedOptions));
}

function onReload() {
  if (localStorage.getItem(FORM_STATE)) {
    try {
      const loadedOptions = JSON.parse(localStorage.getItem(FORM_STATE));

      savedOptions.email = email.value = loadedOptions.email;
      savedOptions.message = message.value = loadedOptions.message;
    } catch (err) {
      console.log(err.name);
    }
  }
}

function onSubmit(e) {
  e.preventDefault();
  form.reset();
  localStorage.removeItem(FORM_STATE);
}
