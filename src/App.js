import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Categoria from "./components/Categoria/Categoria";
import Comanda from "./components/Comanda/Comanda";
import {Provider} from 'react-redux'
import "./style.css";

const App = () => {
  const [produtos, setProdutos] = useState({});
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      });
  }, []);

  const addOrder = (item) => {
    setOrder([...order, item])
  };

  const removeOrder = (e) => {
    let copy = [...order]
    copy.map((o, index) => {
      if(o.id == e.target.dataset.id) {
        copy.splice(index,1)
        setOrder(copy)
      }
    })
  }

  return loading ? (
    "Carregando"
  ) : (
    <main>
      <header>
        <div className="image-container"></div>
      </header>
      <section className="categorias">
        <h1 className="categorias__title">Monte seu pedido</h1>
        <div className="categorias__products">
          {produtos.map((categoria) => (
            <Categoria
              items={categoria.items}
              name={categoria.name}
              order={addOrder}
              key={categoria.name}
            />
          ))}
        </div>
      </section>
      <section className="comanda">
        <h1 className="comanda__title">Seus pedidos</h1>
        {order.length > 0 ? <Comanda order={order} removeOrder={removeOrder} /> : "Nenhum pedido"}
      </section>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
