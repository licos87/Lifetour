const form = document.querySelector('.feedback__form');
const input = document.querySelectorAll('.feedback__form-input');
const phoneInput = document.querySelector('.feedback__form-input[name="phone"]');
const emailInput = document.querySelector('.feedback__form-input[name="email"]');

const PHONE_REGEXP = /^(\+7|8)[\s(-]?\d{3}[)\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
const MAIL_REGEXP = /^[а-яёЁa-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[а-яёЁa-zA-Z0-9-]+(?:\.[а-яёЁa-zA-Z0-9-]+)*\.[а-яёЁa-zA-Z]{2,}$/;
let isValid = true;

function validatePhone(phone) {
  const phoneValue = phone.value.trim();
  return phoneValue !== '' && PHONE_REGEXP.test(phoneValue);
}

function validateMail(email) {
  const emailValue = email.value.trim();
  return emailValue !== '' && MAIL_REGEXP.test(emailValue);
}

function validateForm() {
  isValid = true;

  input.forEach((item) => {
    item.addEventListener('input', () => resetInputErrors(item));
  });

  if (!validatePhone(phoneInput)) {
    phoneInput.style.borderColor = '#ff121f';
    phoneInput.setCustomValidity('Введите корректный номер телефона. (8 900-000-00-00 / 8 900 000 00 00 / 89000000000)');
    isValid = false;
  }

  if (!validateMail(emailInput)) {
    emailInput.style.borderColor = '#ff121f';
    emailInput.setCustomValidity('Введите корректный email. (exemple@mail.com / петров@почта.рф)');
    isValid = false;
  }
}

function resetInputErrors(item) {
  item.style.borderColor = 'rgba(2, 102, 193, 0.1)';
  item.setCustomValidity('');
}

form.addEventListener('submit', (e) => {
  validateForm(e);
  e.preventDefault();
  form.noValidate = true;


  if (!isValid) {
    e.preventDefault();
    form.reportValidity();
    input.forEach((item) => {
      item.addEventListener('input', () => resetInputErrors(item));
    });
  } else {
    form.submit();
  }
});


