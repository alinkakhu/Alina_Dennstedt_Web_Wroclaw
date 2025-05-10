import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const SummaryPage = () => {
  const { items, clearCart } = useCart();

  const total = items.reduce((sum, item) => {
    const price = item.product.price.main + item.product.price.fractional / 100;
    return sum + price * item.quantity;
  }, 0);

  const handleOrder = () => {
  const summaryData = {
    items,
    total,
  };

  localStorage.setItem("orderSummary", JSON.stringify(summaryData));

  clearCart();

  window.location.href = "/confirmation.html";
};


  return (
    <div>
      <h1>Podsumowanie zamówienia</h1>

      {items.length === 0 ? (
        <p>Brak produktów w podsumowaniu.</p>
      ) : (
        <ul>
          {items.map((item) => {
            const price =
              item.product.price.main + item.product.price.fractional / 100;
            const totalItem = (price * item.quantity).toFixed(2);

            return (
              <li key={item.product.id}>
                <h3>{item.product.name}</h3>
                <p>Ilość: {item.quantity}</p>
                <p>Cena jednostkowa: {price.toFixed(2)} zł</p>
                <p>Suma: {totalItem} zł</p>
              </li>
            );
          })}
        </ul>
      )}

      <hr />
      <h2>Łączna kwota: {total.toFixed(2)} zł</h2>

      <Link to="/cart">
        <button>Wróć do koszyka</button>
      </Link>

      <button onClick={handleOrder}>Złóż zamówienie</button>
    </div>
  );
};

export default SummaryPage;
