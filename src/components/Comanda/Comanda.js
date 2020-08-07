import React from "react";
import "./comanda.css";

const Comanda = ({ order, removeOrder }) => {
  const getTotalPrice = () =>
    order.reduce((cum, item) => {
      return item.price + cum;
    }, 0);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Remover unidade</th>
        </tr>
      </thead>
      <tbody>
        {order.map((o) => {
          return (
            <tr key={o.id+Math.random()}>
              <td>{o.name}</td>
              <td>{o.price}</td>
              <td
                className="remove-btn"
                data-id={o.id}
                onClick={() => removeOrder(event)}
              >
                Remover
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr className="preco-total">
          <td colSpan="2">Total:</td>
          <td><strong>R$ {getTotalPrice()}</strong></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Comanda;
