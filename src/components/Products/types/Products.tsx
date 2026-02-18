import { useEffect, useState, type JSX } from "react";
import type Product from "./Product";
import { Link } from "react-router-dom";

export default function Products(): JSX.Element {
  const [product, setProduct] = useState<Product[]>([]);

  async function loadProducts(): Promise<void> {
    const response = await fetch("https://fakestoreapi.com/products");
    const arr = await response.json();
    setProduct(arr);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadProducts();
  }, []);

  return (
    <div>
      <ul>
        {product.map((product) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={product.id}
          >
            <div>Title: {product.title}</div>
            <div>Price: {product.price}</div>
            <div>Description: {product.description} </div>
            <div>Catecory: {product.category} </div>

            <img src={product.image} alt={product.title} />
            <Link to={String(product.id)}> To Product view </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
