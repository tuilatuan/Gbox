function backTotop() {
  let btntotop = document.querySelector(".footer__copy .arrow");
  btntotop.addEventListener("click", function () {
    backtoTop();
  });
  function backtoTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
backTotop();
function nav__mobile() {
  let nav__mobile = document.querySelector(".nav__mobile");
  let btnmobile = document.querySelector(".btnhiden");

  btnmobile.addEventListener("click", function () {
    nav__mobile.classList.toggle("active");
    btnmobile.classList.toggle("active");
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 766) {
      btnmobile.classList.remove("active");
      nav__mobile.classList.remove("active");
    }
  });
}
nav__mobile();
function selectstudio() {
  let dot = document.querySelectorAll(".dotted-item a");
  let number = document.querySelector(".number p");
  let current = 0;
  function removenavactive(item) {
    item.forEach(function (aitem) {
      aitem.classList.remove("active");
    });
  }
  dot.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      removenavactive(dot);
      item.classList.add("active");
      current = index + 1;
      number.innerHTML = current.toString().padStart(2, "0");
    });
  });
}
selectstudio();
function sliderdetail() {
  var elem = document.querySelector(".slider__items-img");
  var flkty = new Flickity(".slider__items-img", {
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    fullscreen: true,
  });
  var previousButton = document.querySelector(".btnprevnext .prev");
  previousButton.addEventListener("click", function (e) {
    e.preventDefault();

    flkty.previous();
  });
  var nextButton = document.querySelector(".btnprevnext .next");
  nextButton.addEventListener("click", function (e) {
    e.preventDefault();
    flkty.next();
  });
  var btnfullscreen = document.querySelector(".fulls");
  btnfullscreen.addEventListener("click", function () {
    console.log(1);
    flkty.viewFullscreen();
  });
}
sliderdetail();
