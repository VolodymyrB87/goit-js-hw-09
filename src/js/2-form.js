const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', e => {
  const formData = new FormData(form);
  const obj = {
    email: formData.get('email'),
    message: formData.get('message'),
  };
  const json = JSON.stringify(obj);
  localStorage.setItem(STORAGE_KEY, json);
});
document.addEventListener('DOMContentLoaded', e => {
  const json = localStorage.getItem(STORAGE_KEY);
  try {
    const data = JSON.parse(json) || {};
    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = (formData.get('email') || '').trim();
  const message = (formData.get('message') || '').trim();
  if (!email || !message) {
    alert('Fill please all fields');
    return;
  } else {
    console.log(`email:${email},message: ${message}`);
  }
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
