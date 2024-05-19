function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center mb-30">
          Корзина
          <img
            onClick={() => onClose()}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="search"
          />
        </h2>

        {items.length > 0 ? (
          <div className="items">
            {items.map((obj, i) => (
              <div className="mb-20 cartItem d-flex  align-center">
                <div
                  style={{
                    backgroundImage: "url(/img/sneakers/0" + obj.img + ".jpg)",
                  }}
                  className="cartItemImg"
                ></div>

                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)} //onRemove(obj.id)
                  className="removeBtn"
                  src="/img/btn-remove.svg"
                  alt="search"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.png"
              alt="search"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={() => onClose()} className="greenBtn">
              <img src="/img/arrow.svg" alt="arrows" />
              Вернуться назад
            </button>
          </div>
        )}

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
