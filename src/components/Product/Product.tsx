import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type ProductType from "../Products/types/Product";

export default function Product(): JSX.Element {
  const { productId } = useParams();
  const initialValue: ProductType = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };

  const [product, setProduct] = useState<ProductType>(initialValue);
  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
      );
      const obj = await response.json();
      setProduct(obj);
    }
    loadProduct();
  }, [productId]);

  return (
    <div style={{ border: "solid black 2px", margin: "10px" }}>
      <div>Title: {product.title}</div>

      <div>Price: {product.price}</div>
      <div>Description: {product.description}</div>
      <div>Category: {product.category}</div>
      <img src={product.image} alt={product.title} />

      <Link to="../products">To all Product view</Link>
    </div>
  );
}
