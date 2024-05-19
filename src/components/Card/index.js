import React from "react";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  img,
  onFavorire,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ img, title, price });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorire({ id, img, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className="favorite" onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="search"
        />
      </div>
      <img
        width={133}
        height={112}
        src={"/img/sneakers/0" + img + ".jpg"}
        alt="sneakers"
      />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>

        <img
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-chesked.svg" : "/img/btn-plus.svg"}
          alt="sneakers"
        />
      </div>
    </div>
  );
}

export default Card;
