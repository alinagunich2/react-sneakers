import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Home({
  items,
  // cartItems,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  reset,
  isLoading,
}) {
  // const { isItemAdded } = React.useContext(AppContext);

  const renderItems = () => {
    return (
      isLoading
        ? [...Array(12)]
        : items.filter((item) =>
            item.title.toUpperCase().includes(searchValue.toUpperCase())
          )
    ).map((item, i) => (
      <Card
        key={i}
        // id={item.id}
        // title={item.title}
        // price={item.price}
        // img={item.img}

        onFavorire={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        // addedCard={isItemAdded(item && item.id)}
        isLoading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="">
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={reset}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="search"
            />
          )}

          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="sneakers d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
export default Home;
