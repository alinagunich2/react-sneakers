import React from "react";
import AppContext from "../context";

function Inform({ title, image, descript }) {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} src={image} alt="search" />
      <h2>{title}</h2>
      <p className="opacity-6">{descript}</p>
      <button onClick={() => setCartOpened(false)} className="greenBtn">
        <img src="/img/arrow.svg" alt="arrows" />
        Вернуться назад
      </button>
    </div>
  );
}

export default Inform;
