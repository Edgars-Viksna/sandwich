import type { JSX } from "react";
import Phone from "../Phone/Phone";

export default function CarShop(): JSX.Element {
  return (
    <div>
  
      <h1>Phone store</h1>
      <h2>Phones</h2>
      <Phone brand={"iPhone"} model={"17Pro"} color={"Orange"} price={1299} />
      <Phone brand={"iPhone"} model={"Air"} color={"White"} price={1300} />
      <Phone brand={"Samsung"} model={"S"} color={"Black"} price={1100} />
      <Phone brand={"Nokia"} model={"6600"} color={"Silver"} price={2000} />
    </div>
  );
}
