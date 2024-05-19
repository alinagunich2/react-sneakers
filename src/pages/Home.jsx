import Card from "../components/Card";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  reset,
}) {
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

      <div className="sneakers d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toUpperCase().includes(searchValue.toUpperCase())
          )
          .map((item, i) => (
            <Card
              key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              onFavorire={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;
