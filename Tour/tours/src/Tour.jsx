import React, { useState } from "react";

const Tour = ({ tour, deleteItem }) => {
  const [read, setRead] = useState(false);
  const { id, image, info, price, name } = tour;
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {read ? info : `${info.substring(0, 200)}`}{" "}
          <button onClick={() => setRead(!read)} className="btn">
            {read ? "showless" : "readmore"}
          </button>
        </p>

        <button onClick={() => deleteItem(id)} className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
