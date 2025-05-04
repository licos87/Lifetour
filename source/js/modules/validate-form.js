const form = document.querySelector('.feedback__form');
const input = form.querySelectorAll('.feedback__form-input');
const phoneInput = form.querySelector('.feedback__form-input[name="phone"]');
const emailInput = form.querySelector('.feedback__form-input[name="email"]');

const PHONE_REGEXP = /^(\+7|8)[\s(-]?\d{3}[)\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
const MAIL_REGEXP = /^[a-zA-Zа-яА-ЯёЁ0-9._%+-]+@[a-zA-Zа-яА-ЯёЁ0-9.-]+\.[a-zа-яё]{2,}$/i;
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
  item.setCustomValidity(' ');
}

form.addEventListener('submit', (e) => {
  validateForm(e);

  if (!isValid) {
    e.preventDefault();
    form.reportValidity();
    input.forEach((item) => {
      item.addEventListener('input', () => resetInputErrors(item));
    });
  }

  form.noValidate = true;
});
