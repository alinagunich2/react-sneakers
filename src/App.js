import React from "react";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);
  const [order, setOrder] = React.useState([]);
  // const [totalPrice, setTotalPrice] = React.useState(
  //   cartItems.reduce((sum, obj) => obj.price + sum, 0)
  // );

  //В mockApi огран кол-во resourse макс 2 поэтому кто будет смотреть мой проект:

  let arr = [
    {
      id: 1,
      img: 1,
      title: "VVVVVVVМужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
    {
      id: 2,
      img: 2,
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
    },
    {
      id: 3,
      img: 3,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
    },
    {
      id: 4,
      img: 4,
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
    },
    {
      id: 5,
      img: 5,
      title: "Мужские Кроссовки Under Armour Curry 8",
      price: 15199,
    },
    {
      id: 6,
      img: 6,
      title: "Мужские Кроссовки Nike Kyrie 7",
      price: 11299,
    },
    {
      id: 7,
      img: 7,
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 10799,
    },
    {
      id: 8,
      img: 8,
      title: "Мужские Кроссовки Nike LeBron XVIII",
      price: 16499,
    },
    {
      id: 9,
      img: 9,
      title: "Мужские Кроссовки Nike Lebron XVIII Low",
      price: 13999,
    },
    {
      id: 10,
      img: 10,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
    },
    {
      id: 11,
      img: 11,
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
    },
    {
      id: 12,
      img: 12,
      title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
      price: 11299,
    },
  ];

  React.useEffect(() => {
    // axios
    //   .get("https://6648ad064032b1331bec1385.mockapi.io/items")
    //   .then((res) => {
    //     setItems(res.data);
    //   });

    async function fetchData() {
      setisLoading(true);

      const [cartResponce, favoritesResponce] = await Promise.all([
        axios.get("https://6648ad064032b1331bec1385.mockapi.io/cart"),
        axios.get("https://6648ad064032b1331bec1385.mockapi.io/favorites"),
      ]);

      setCartItems(cartResponce.data);
      setFavorite(favoritesResponce.data);

      setTimeout(() => {
        setisLoading(false);
        setItems(arr);
      }, 2000);
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    let findItem = cartItems.find(
      (item) => Number(item.parentId) === Number(obj.id)
    );
    try {
      if (findItem) {
        await axios.delete(
          `https://6648ad064032b1331bec1385.mockapi.io/cart/${findItem.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://6648ad064032b1331bec1385.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch {
      alert("не удалось длобавить ");
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorite.find((fav) => fav.id === obj.id)) {
        axios.delete(
          `https://6648ad064032b1331bec1385.mockapi.io/favorites/${obj.id}`
        );
        setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://6648ad064032b1331bec1385.mockapi.io/favorites",
          obj
        );
        setFavorite((prev) => [...prev, data]);
      }
    } catch {
      alert("не удалось длобавить ");
    }
  };

  const onRemoveCart = (id) => {
    try {
      axios.delete(`https://6648ad064032b1331bec1385.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const reset = () => {
    setSearchValue("");
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  // const isFavorite = (id) => {
  //   return favorite.some((obj) => Number(obj.id) === Number(id));
  // };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorite,
        isItemAdded,
        setCartOpened,
        setCartItems,
        order,
        setOrder,
        onAddToFavorite,
        onAddToCart,

        // isFavorite,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveCart}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                reset={reset}
                isLoading={isLoading}
              ></Home>
            }
          />
          <Route
            path="/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
          />
          <Route
            path="/orders"
            element={<Orders onAddToFavorite={onAddToFavorite} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
