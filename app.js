"use static";

// const { createRef, createElement } = require("react");

const addBtn = document.getElementById("add__btn");
const myList = document.getElementById("todoList");
const title = document.getElementById("todo__work");
const text = document.querySelector(".empty");
const prioritie = document.getElementById("select__option");
const btnAll = document.querySelector(".filter__all");
const btnDone = document.querySelector(".filter__done");
const btnNot = document.querySelector(".filter__not");

const select = prioritie.value;

let working = true;
let number = 0;

addBtn.addEventListener("click", function () {
  if (working) {
    text.style.display = "none";
    // number list

    number++;
    const numberList = document.createElement("p");
    numberList.textContent = number;
    numberList.classList.add("number__list");
    // li and content li
    const listItem = document.createElement("li");
    myList.appendChild(listItem);

    listItem.classList.add("list__item");
    // title working day
    const titleWork = document.createElement("p");
    titleWork.classList.add("title__work");
    titleWork.textContent = title.value;
    title.value = "";
    listItem.appendChild(numberList);
    listItem.appendChild(titleWork);

    // Priorities

    const priorities = document.createElement("p");
    priorities.classList.add("priority");
    const selectText = prioritie.options[prioritie.selectedIndex].text;
    priorities.textContent = selectText;
    listItem.appendChild(priorities);

    // checkbox input

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check__box");

    listItem.appendChild(checkbox);
  }
});

btnAll.addEventListener("click", () => {
  btnAll.classList.add("active");
  btnDone.classList.remove("active");
  btnNot.classList.remove("active");
  document.querySelectorAll(".list__item").forEach((item) => {
    item.style.display = "flex";
  });
});

btnDone.addEventListener("click", () => {
  btnAll.classList.remove("active");
  btnDone.classList.add("active");
  btnNot.classList.remove("active");
  document.querySelectorAll(".list__item").forEach((item) => {
    const checkbox = item.querySelector(".check__box");
    item.style.display = checkbox.checked ? "flex" : "none";
  });
});

btnNot.addEventListener("click", () => {
  btnAll.classList.remove("active");
  btnDone.classList.remove("active");
  btnNot.classList.add("active");
  document.querySelectorAll(".list__item").forEach((item) => {
    const checkbox = item.querySelector(".check__box");
    item.style.display = checkbox.checked ? "none" : "flex";
  });
});
