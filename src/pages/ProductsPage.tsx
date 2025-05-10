import { products } from "../data/products";
import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


const ProductsPage = () => {
  const { addItem } = useCart();

  return (
    <div>
      <h1>Lista Produktów</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>
              Cena: {product.price.main},{product.price.fractional} zł
            </p>
            <button onClick={() => addItem(product)}>Dodaj do koszyka</button>
          </li>
        ))}
      </ul>
      <Link to="/cart">
      <button>Przejdź do koszyka</button>
      </Link>
    </div>
  );
};

export default ProductsPage;
