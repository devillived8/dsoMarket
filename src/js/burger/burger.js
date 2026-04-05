const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay--mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const page = document.querySelector('.page');

function changeBurgerState() {
  const state = burger?.classList.toggle('burger--active');

  if (state === true) {
    overlay.style.display = 'block';
    mobileMenu.style.right = '0';
    page.style.overflowY = 'hidden';
  } else {
    overlay.style.display = 'none';
    mobileMenu.style.right = '-100%';
    page.style.overflowY = 'auto';
  }

  return state;
}

function closeByOverlay() {
  burger?.classList.toggle('burger--active', false);
  overlay.style.display = 'none';
  mobileMenu.style.right = '-100%';
  page.style.overflowY = 'auto';
}

export function initBurger() {
  burger.addEventListener('click', () => changeBurgerState());
  overlay.addEventListener('click', () => closeByOverlay());
}
