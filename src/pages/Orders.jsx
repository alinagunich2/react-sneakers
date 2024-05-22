import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
  const { order, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="">Мои заказы</h1>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {order.map((ordersArr, i) =>
          ordersArr.map((order, i) => <Card key={i} {...order} />)
        )}
      </div>
    </div>
  );
}
export default Orders;
