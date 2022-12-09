//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//hamburhger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const scriptURL = "https://script.google.com/macros/s/AKfycbyTdtBPQEZQVnEevCXCZLIeMQYLgbpKFb9_zpbHfU7lWQh6dtJhZrrDaDhxXCdMa5Kz/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector("#kirim");
const btnLoading = document.querySelector("#loading");
const alert = document.querySelector("#alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ketika submit
  //hilangkan kirim
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      alert.classList.toggle("hidden");

      //reset

      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
