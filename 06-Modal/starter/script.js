'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);

const btnsOpenModal = document.querySelectorAll(`.show-modal`); //selects all quers with show modal and put them in array

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const openModal = function (i) {
  console.log(`button clicked = ${btnsOpenModal[i].textContent}`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, () => openModal(i));
}

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === 'Escape' && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
