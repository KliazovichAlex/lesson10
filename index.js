// alert("Я JavaScript!");  Задание 2.1

// let admin;
// let name;
// name = "Джон";
// admin = name;
// alert(admin);

// let userName = prompt("Введите ваше имя.");
// alert("Добро пожаловать " + userName + "!");

let userName = prompt("Введите ваше имя");
let userMidlename = prompt("Введите ваше отчество");
let userLastname = prompt("Введите вашу фамилию");
let userAge = prompt("Введите ваш возрост (в годах)");
let userSex = confirm("Ваш пол мужской?");
let userAgeAfter = Number(+userAge + 5);
let isUserOld = null;
if (userSex === true) {
  userSex = "Мужской";
} else {
  userSex = "Женский";
}
if (userSex === true && userAge >= 65) {
  isUserOld = "Да";
} else {
  isUserOld = " Нет";
}

// if (userSex === false && userAge >= 55) {
//   isUserOld = "Да";
// } else {
//   isUserOld = " Нет";
// }

alert(
  "Ваше ФИО :" +
    userName +
    userMidlename +
    userLastname +
    "\n" +
    "Ваш возрост в годах : " +
    userAge +
    "\n" +
    "ваш возрост в днях : " +
    userAge * 365 +
    "\n" +
    "Через 5 лет вам будет : " +
    userAgeAfter +
    "\n" +
    "Ваш пол:  " +
    userSex +
    "\n" +
    " Вы на пенсии : " +
    isUserOld
);
