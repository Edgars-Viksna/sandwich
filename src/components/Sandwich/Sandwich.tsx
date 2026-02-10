import { useState, type JSX } from "react";
import style from "./Sandwich.module.css";

export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("");

  function addBread(): void {
    setSandwich((prev) => prev + "Bread 🍞  ");
  }
  function addAvocado(): void {
    setSandwich((prev) => prev + "Avocado 🥑  ");
  }
  function addMeat(): void {
    setSandwich((prev) => prev + "Meat 🥩");
  }
  function addSalad(): void {
    setSandwich((prev) => prev + "Salad 🥬");
  }
  function eatSandwich(): void {
    setSandwich("");
  }

  return (
    <div>
      <h1>Sandwich: </h1>
      <img
        src="https://www.watermelon.org/wp-content/uploads/2023/02/Sandwich_2023-1000x1000.jpg"
        alt=""
      />

      <span className={style.span}>Make a sandwich: {sandwich}</span>

      <div>
        <button type="button" onClick={addBread} className={style.btn}>
          add Bread
        </button>
        <button type="button" onClick={addAvocado} className={style.btn}>
          add Avocado
        </button>
        <button type="button" onClick={addMeat} className={style.btn}>
          add Meat
        </button>
        <button type="button" onClick={addSalad} className={style.btn}>
          add Salad
        </button>
        <button type="button" onClick={eatSandwich} className={style.btn}>
          eat Sandwich
        </button>
      </div>
    </div>
  );
}
