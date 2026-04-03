import './style.css';
import { generateCardData, createCard } from './js/card/card.js';

document.addEventListener('DOMContentLoaded', () => {
  const spinner = document.querySelector('.spinner');
  


  generateCardData(
    'test1.jpg',
    'Маг круга 100 уровня',
    'Spellweaver',
    'Grimmag',
    'Топовый маг круга 100 уровня с фулл ареной и давно забытым костянным драконом',
    10000
  );


  createCard();

  spinner.style.display = 'none';
});
