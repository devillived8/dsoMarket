const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav__mobile');
const mobileCover = document.querySelector('.cover-mobile');

function setMenuState(isOpen) {
  mobileCover.classList.toggle('cover-mobile--active', isOpen);
  burger.classList.toggle('burger--active', isOpen);
  navMobile.classList.toggle('nav__mobile--active', isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
  document.documentElement.classList.toggle('no-scroll', isOpen);
}

function toggleBurger() {
  const isOpen = !navMobile.classList.contains('nav__mobile--active');
  setMenuState(isOpen);
}

function closeByOverlay() {
  setMenuState(false);
}

export function burgerInit() {
  if (!burger || !navMobile || !mobileCover) return;
  burger.addEventListener('click', toggleBurger);
  mobileCover.addEventListener('click', closeByOverlay);
}
