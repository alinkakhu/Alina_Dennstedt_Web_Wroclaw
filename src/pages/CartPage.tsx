import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


const CartPage = () => {
  const { items, removeItem, changeQuantity } = useCart();

  const total = items.reduce((sum, item) => {
    const price = item.product.price.main + item.product.price.fractional / 100;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div>
      <h1>Koszyk</h1>
      {items.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <ul>
          {items.map((item) => {
            const price =
              item.product.price.main + item.product.price.fractional / 100;
            const totalItemPrice = (price * item.quantity).toFixed(2);

            return (
              <li key={item.product.id}>
                <h3>{item.product.name}</h3>
                <p>Cena: {price.toFixed(2)} zł</p>
                <p>Ilość: 
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      changeQuantity(item.product.id, parseInt(e.target.value))
                    }
                  />
                </p>
                <p>Suma: {totalItemPrice} zł</p>
                <button onClick={() => removeItem(item.product.id)}>Usuń</button>
              </li>
            );
          })}
        </ul>
      )}

      <hr />
      <h2>Łącznie: {total.toFixed(2)} zł</h2>

      <Link to="/">
        <button>Wróć do produktów</button>
      </Link>

    <Link to="/summary">
        <button>Przejdź do podsumowania</button>
    </Link>

    </div>
  );
};

export default CartPage;
