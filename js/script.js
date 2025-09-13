const mailTwo = document.getElementById("email").value;
const mail = document.getElementById("footer-email").value;

let fail = "";

function checkForm(el) {
  if ((mailTwo = "")) {
    fail = "Заполните поле ввода!";
  } else if (mailTwo.length <= 1) {
    fail = "Електронная почта должна быть больше 1-го символа!";
  }

  if (fail != "") {
    return false;
  } else {
    alert("Електронная почта заполнена корректно!");
  }

  return false;
}

function footerForm(el) {
  if ((mail = "")) {
    fail = "Заполните поле ввода!";
  } else if (mail.length <= 1) {
    fail = "Електронная почта должна быть больше 1-го символа!";
  }

  if (fail != "") {
    return false;
  } else {
    alert("Електронная почта заполнена корректно!");
  }

  return false;
}
