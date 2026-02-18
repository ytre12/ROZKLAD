const btnMonday = document.getElementById("btn-mon");
const btnTuesday = document.getElementById("btn-tue");
const btnWednesday = document.getElementById("btn-wed");
const btnThursday = document.getElementById("btn-thu");
const btnFridey = document.getElementById("btn-fri");

const lesonName1 = document.querySelector("#leson-1");
const lesonName2 = document.querySelector("#leson-2");
const lesonName3 = document.querySelector("#leson-3");
const lesonName4 = document.querySelector("#leson-4");
const lesonName5 = document.querySelector("#leson-5");

const audNum1 = document.querySelector("#leson-aud-1");
const audNum2 = document.querySelector("#leson-aud-2");
const audNum3 = document.querySelector("#leson-aud-3");
const audNum4 = document.querySelector("#leson-aud-4");
const audNum5 = document.querySelector("#leson-aud-5");

const timeElement = document.querySelector("#time");

const domElemArr = [
  [lesonName1, audNum1],
  [lesonName2, audNum2],
  [lesonName3, audNum3],
  [lesonName4, audNum4],
  [lesonName5, audNum5],
];

const textArr = [
  [
    ["Вільно", "..."],
    ["Виробничі процеси та обладнання об'єктів автоматизації", "124 аудиторія"],
    ["Основи інтелектуальної власносі", "243 аудиторія"],
    ["Теоритична та прикладна механіка", "279 аудиторія"],
    ["Вільно", "..."],
  ],
  [
    ["Вільно", "..."],
    ["Вільно", "..."],
    ["Вільно", "..."],
    ["Вільно", "..."],
    ["Вільно", "..."],
  ],
  [
    ["Вільно", "..."],
    ["Вільно", "..."],
    ["Вільно", "..."],
    ["Вільно", "..."],
    ["Вільно", "..."],
  ],
  [
    ["Вільно", "..."],
    ["Основи веб-технологій", "124 аудиторія"],
    ["Тезнологія проектної роботи", "131 аудиторія"],
    ["Виробничі процеси та обладнання об'єктів автоматизації", "241 аудиторія"],
    ["Теоритична та прикладна механіка", "306 аудиторія"],
  ],
  [
    ["Вільно", "..."],
    ["Числові методи та комп'ютерне моделювання", "131 аудиторія"],
    ["Числові методи та комп'ютерне моделювання", "131 аудиторія"],
    ["Архітектура комп'ютерних систем та мереж", "243 аудиторія"],
    ["Архітектура комп'ютерних систем та мереж", "243 аудиторія"],
  ],
];

const timeNowSeconds = () => {
  const now = new Date();

  const secondsOfStart =
    now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
  console.log(`Seconds now: ${secondsOfStart}`);
};

const timeNow = () => {
  const now = new Date();
  timeElement.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

const addNewContent = (dayNum) => {
  for (let i = 0; i < domElemArr.length; i++) {
    domElemArr[i][0].textContent = textArr[dayNum][i][0];
    domElemArr[i][1].textContent = textArr[dayNum][i][1];
  }
};

btnMonday.addEventListener("click", () => addNewContent(0));
btnTuesday.addEventListener("click", () => addNewContent(1));
btnWednesday.addEventListener("click", () => addNewContent(2));
btnThursday.addEventListener("click", () => addNewContent(3));
btnFridey.addEventListener("click", () => addNewContent(4));

setInterval(() => timeNowSeconds(), 1000);
setInterval(() => timeNow(), 1000);
