import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites({ onAddToFavorite }) {
  const { favorite } = React.useContext(AppContext);
  console.log(favorite);
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="">Мои закладки</h1>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {favorite.map((item, i) => (
          <Card
            key={i}
            // id={item.id}
            // title={item.title}
            // price={item.price}
            img={item.img}
            onFavorire={onAddToFavorite}
            onPlus={(obj) => "xd"}
            favorited={true}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
