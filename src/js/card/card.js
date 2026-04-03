const cards = document.querySelector('.cards');

let dataCards = [];

// Создание данных для карточек
export function generateCardData(
  img,
  title,
  accountClass,
  server,
  description,
  price
) {
  const formatedPrice = Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(price);

  const mokeDate = {
    img: './src/assets/img/' + img,
    title,
    class: accountClass,
    server,
    description,
    price: formatedPrice,
  };

  dataCards.push(mokeDate);

  return dataCards;
}

// Создание и добавление карточек в dom
export function createCard() {
  cards.innerHTML = '';
  dataCards.forEach(
    ({ img, title, class: accountClass, server, description, price }) => {
      let li = document.createElement('li');
      li.classList.add('cards__item');
      li.innerHTML = `          
            <article class="card">
              <a href="" class="link"><img class="card__img" src=${img} alt=""></a>
              <h2 class="title card__title">${title}</h2>
              <p class="card__class">Класс: ${accountClass}</p>
              <p class="card__server">Сервер: ${server}</p>
              <p class="card__description">Описание: ${description}</p>
              <div class="card__info">
                <p class="text card__price">Цена: <span class="card__price-value">${price}</span></p>
                <button class="button card__button">Подробнее</button>
              </div>
            </article>`;
      cards.appendChild(li);
    }
  );
}
