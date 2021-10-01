let modal = document.querySelector(".modal");
let selectButtons = document.querySelectorAll(".plan button");
let closeModal = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let ctaButton = document.querySelector(".main-nav__item--cta");
/* console.log(modal); */

/* console.log(selectButtons); */

for (let i = 0; i < selectButtons.length; i++) {
  selectButtons[i].addEventListener("click", function () {
    /* modal.style.display = "block"; */
    /* modal.className=' open'; */
    modal.classList.add("open");
  });
}

if (closeModal) {
  closeModal.addEventListener("click", function () {
    modal.classList.remove("open");
  });
}

if (closeModal) {
  closeModal.addEventListener("click", closeeModel);
}

function closeeModel() {
  modal.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
});

/* ctaButton.addEventListener("animationstart", function (e) {});

ctaButton.addEventListener("animationend", function (e) {});

ctaButton.addEventListener("animationiteration", function (e) {}); */
