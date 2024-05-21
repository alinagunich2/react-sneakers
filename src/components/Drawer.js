import React from "react";
import Inform from "./Inform";
import AppContext from "../context";
import axios from "axios";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Drawer({ onClose, items = [], onRemove }) {
  const { setCartItems, order, cartItems } = React.useContext(AppContext);

  const [isOr, setIsOr] = React.useState(false);

  const onClickOrder = async () => {
    //axios.post('https://6648ad064032b1331bec1385.mockapi.io/orders/',obj)

    order.push(cartItems);
    setIsOr(true);
    setCartItems([]);

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await axios.delete(
        "https://6648ad064032b1331bec1385.mockapi.io/cart" + item.id
      );
      await delay();
    }
  };

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
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj, i) => (
                <div
                  key={obj.id}
                  className="mb-20 cartItem d-flex  align-center"
                >
                  <div
                    style={{
                      backgroundImage:
                        "url(/img/sneakers/0" + obj.img + ".jpg)",
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

              <button onClick={onClickOrder} className="greenBtn">
                Оформить заказ <img src="/img/arrow.svg" alt="arrows" />
              </button>
            </div>
          </div>
        ) : (
          <div className="drawer">
            <Inform
              title={isOr ? "Заказ оформлен!" : "Корзина пустая"}
              image={isOr ? "/img/complite-order.png" : "/img/empty-cart.png"}
              descript={
                isOr
                  ? "Ваш заказ скоро будет передан курьерской доставке"
                  : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              }
            ></Inform>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
