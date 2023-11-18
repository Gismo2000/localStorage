document.addEventListener("DOMContentLoaded", function () {
  var changeThemeButton = document.getElementById("change-theme");
  var tableSection = document.querySelector(".table");
  var aboutinfoSection = document.querySelector(".aboutinfo");
  var header = document.querySelector("header");

  var fullNameInput = document.querySelector(".aboutinfo input[placeholder='Genadii Golovkin']");
  var emailInput = document.querySelector(".aboutinfo input[placeholder='hello@hey.com']");
  var passwordInput = document.querySelector(".aboutinfo input[placeholder='••••••••••••']");
  var confirmPasswordInput = document.querySelector(".aboutinfo input[placeholder='••••••••••••']");

  // Загружаем сохраненные данные темы и введенные данные формы при загрузке страницы
  loadTheme();
  loadFormData();

  // Обработчик события для кнопки "Change Theme"
  changeThemeButton.addEventListener("click", function () {
    // Добавляем или удаляем класс в зависимости от текущего состояния
    tableSection.classList.toggle("red-background");
    aboutinfoSection.classList.toggle("grey-background");
    header.classList.toggle("blue-background");

    // Сохраняем текущую тему в localStorage
    saveTheme();
  });

  // Обработчик события для ввода данных в форму
  fullNameInput.addEventListener("input", saveFormData);
  emailInput.addEventListener("input", saveFormData);
  passwordInput.addEventListener("input", saveFormData);
  confirmPasswordInput.addEventListener("input", saveFormData);

  // Функция для сохранения текущей темы в localStorage
  function saveTheme() {
    var currentTheme = {
      table: tableSection.classList.contains("red-background"),
      aboutinfo: aboutinfoSection.classList.contains("grey-background"),
      header: header.classList.contains("blue-background"),
    };

    localStorage.setItem("currentTheme", JSON.stringify(currentTheme));
  }

  // Функция для загрузки темы из localStorage при загрузке страницы
  function loadTheme() {
    var savedTheme = localStorage.getItem("currentTheme");
    if (savedTheme) {
      var parsedTheme = JSON.parse(savedTheme);

      tableSection.classList.toggle("red-background", parsedTheme.table);
      aboutinfoSection.classList.toggle("grey-background", parsedTheme.aboutinfo);
      header.classList.toggle("blue-background", parsedTheme.header);
    }
  }

  // Функция для сохранения введенных данных формы в localStorage
  function saveFormData() {
    var formData = {
      fullName: fullNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      confirmPassword: confirmPasswordInput.value,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
  }

  // Функция для загрузки введенных данных формы из localStorage при загрузке страницы
  function loadFormData() {
    var savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      var parsedFormData = JSON.parse(savedFormData);

      fullNameInput.value = parsedFormData.fullName || "";
      emailInput.value = parsedFormData.email || "";
      passwordInput.value = parsedFormData.password || "";
      confirmPasswordInput.value = parsedFormData.confirmPassword || "";
    }
  }
});






const root = document.querySelector('#root');
const form = document.createElement('form');
form.classList.add('register-form');
root.append(form);

const heading = document.createElement('h1');
heading.innerText = 'Create account';
form.append(heading);

const iconContainer = document.createElement('div');
iconContainer.classList.add('icon-container');

const facebookIcon = document.createElement('img');
facebookIcon.src = './images/facebook-fill 1.svg';
facebookIcon.alt = 'facebook icon';

const twitterIcon = document.createElement('img');
twitterIcon.src = './images/twitter-fill 1.svg';
twitterIcon.alt = 'twitter icon';

const googleIcon = document.createElement('img');
googleIcon.src = './images/google-fill 1.svg';
googleIcon.alt = 'google icon';

iconContainer.append(facebookIcon);
iconContainer.append(document.createTextNode('\u00A0\u00A0')); // Добавляем пробел между иконками
iconContainer.append(twitterIcon);
iconContainer.append(document.createTextNode('\u00A0\u00A0'));
iconContainer.append(googleIcon);

form.append(iconContainer);



