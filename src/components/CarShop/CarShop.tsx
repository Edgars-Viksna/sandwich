import { type JSX } from "react";
import Car from "../Car/Car";

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car shop</h1>
      <h2>Cars</h2>
      {}
      <Car brand={"Mercedes"} color={"green"} />
      <Car brand={"Tesla"} color={"black"} />
      <Car brand={"Citroen"} color={"yellow"} />
      <Car brand={"Honda"} color={"red"} />
      <Car brand={"Kia"} color={"white"} />
      <Car brand={"Audi"} color={"blue"} />
      <Car brand={"VW"} color={"green"} />
      <Car brand={"BYD"} color={"yellowgreen"} />
    </div>
  );
}
