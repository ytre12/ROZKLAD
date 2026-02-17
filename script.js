const btnMonday = document.getElementById("btn-mon");
const btnThusday = document.getElementById("btn-thu");

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
  [],
  [],
  [],
];

const addNewContent = (dayNum) => {
  for (let i = 0; i < domElemArr.length; i++) {
    domElemArr[i][0].textContent = textArr[dayNum][i][0];
    domElemArr[i][1].textContent = textArr[dayNum][i][1];
  }
};

btnMonday.addEventListener("click", () => addNewContent(0));
btnThusday.addEventListener("click", () => addNewContent(1));
