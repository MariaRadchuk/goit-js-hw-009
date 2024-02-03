document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('[name="email"]');
  const messageTextarea = form.querySelector('[name="message"]');
  
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const { email, message } = JSON.parse(savedFormState);
    emailInput.value = email;
    messageTextarea.value = message;
  }
  
  form.addEventListener('input', () => {
    const currentState = {
      email: emailInput.value,
      message: messageTextarea.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      email: emailInput.value,
      message: messageTextarea.value
    };
    console.log(formData);

    form.reset();
    localStorage.removeItem('feedback-form-state');
  });
});
