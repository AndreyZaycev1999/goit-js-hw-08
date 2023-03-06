import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

updateOutput();

var throttled = throttle(saveMessage, 500);

form.addEventListener("input", throttled);

function saveMessage(e) {
  e.preventDefault();

  localStorage.setItem(
    "feedback-form-state", 
    JSON.stringify(
      {
        email: email.value,
        message: message.value,
      },
    ),
  );

  updateOutput();
}

function updateOutput() {
  const output = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (output) {
    email.value = output.email;
    message.textContent = output.message;
  }
  return  
};