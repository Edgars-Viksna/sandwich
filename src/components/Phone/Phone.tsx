import type { JSX } from "react";

interface Props {
  brand: string;
  model: string;
  color: string;
  price: number;
}

export default function Phone(props: Props): JSX.Element {
  const { brand, model, color, price } = props;

  return (
    <div className="phone">
      Brand: {brand} Model: {model}
      Color: {color} Price: {price}
    </div>
  );
}
