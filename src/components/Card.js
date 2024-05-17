function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="search" />
      </div>
      <img width={133} height={112} src="/img/sneakers/01.jpg" alt="sneakers" />
      <h5>Мужские Кроссовки Under Armour Curry 8</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>15 199 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="sneakers" />
        </button>
      </div>
    </div>
  );
}

export default Card;
