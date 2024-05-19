import Card from "../components/Card";

function Favorites({ favorite, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="">Мои закладки</h1>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {favorite.map((item, i) => (
          <Card
            key={i}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            onFavorire={onAddToFavorite}
            onPlus={(obj) => "xd"}
            favorited={true}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
