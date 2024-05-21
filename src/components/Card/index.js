import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

function Card({
  id,
  title,
  price,
  img,
  onFavorire,
  onPlus,
  favorited = false,
  addedCard = false,
  isLoading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  // const { isFavorite } = React.useContext(AppContext);
  // const [isAdded, setIsAdded] = React.useState(addedCard);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  // console.log(title, isFavorite(id));

  const onClickPlus = () => {
    onPlus({ id, img, title, price });
    // setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorire({ id, img, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={268}
          viewBox="0 0 155 268"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="14" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="14" />
          <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className="favorite" onClick={onClickFavorite}>
            <img
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
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
              src={
                isItemAdded(id) ? "/img/btn-chesked.svg" : "/img/btn-plus.svg"
              }
              alt="sneakers"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
