import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites() {
  const { favorite, onAddToCart, onAddToFavorite } =
    React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="">Мои закладки</h1>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {favorite.map((item, i) => (
          <Card
            key={i}
            img={item.img}
            onFavorire={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            favorited={true}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
