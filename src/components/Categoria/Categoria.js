import React from "react";
import "./categoria.css";

const Categoria = ({ name, items, order }) => {
  return (
    <div className="categoria">
      <p className="categoria__name">{name}</p>
      {items.map((item) => (
        <div key={item.id} className="categoria__item">
          <p>
            <strong>{item.name}</strong> - R$ {item.unit_price}
          </p>
          <p>{item.description}</p>
          <p
          className="add-btn"
            onClick={() =>
              order({ id: item.id, name: item.name, price: item.unit_price })
            }
          >
            Adicionar
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categoria;
