function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center mb-30">
          Корзина
          <img className="removeBtn" src="/img/btn-remove.svg" alt="search" />
        </h2>

        <div className="items">
          <div className="mb-20 cartItem d-flex  align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/01.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="search" />
          </div>
          <div className="mb-20 cartItem d-flex  align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/01.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="search" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>

          <button className="greenBtn">
            Оформить заказ <img src="/img/arrow.svg" alt="arrows" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
