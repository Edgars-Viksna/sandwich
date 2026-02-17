import React, { useState, type JSX } from "react";
import useTheme from "../themeContext/useTheme";

import style from "./Sandwich.module.css";

export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>(
    "Бутербродный конфигуратор: ",
  );
  const { theme, toggleTheme } = useTheme();

  function handleAddBread(): void {
    setSandwich(`${sandwich} bread 🍞`);
  }
  function handleAddCheese(): void {
    setSandwich(`${sandwich} cheese 🧀`);
  }
  function handleAddSalami(): void {
    setSandwich(`${sandwich} salami 🍖`);
  }
  function handleAddSalat(): void {
    setSandwich(`${sandwich} salat 🥗`);
  }
  function handlAddClear(): void {
    setSandwich("Бутерброд: ");
  }
  // Состояние - может быть чем угодно: строкой, числом, массивом и т.д.
  // и с ним можно работать как с любой другой переменной,
  // но изменять только с помощью функции изменения состояния.
  // Если делать через обычную переменную без юзстэйт то нужен будет слушатель событий
  // и значение на странице не будет обновляться а юзстэйт отлавливает изменение
  // и отрисовывает на странице

  return (
    <div
      className={`${style.container} ${theme === "dark" ? style.dark : style.light}`}
    >
      <h2>Sandwich</h2>
      <img
        src="https://100foto.club/uploads/posts/2022-11/1668343862_18-100foto-club-p-sendvichi-dlya-kofeen-29.jpg"
        alt=""
      />
      <p>{sandwich}</p>
      <div className={style.btnContainer}>
        <button type="button" className={style.btn} onClick={handleAddBread}>
          Add bread
        </button>
        <button type="button" className={style.btn} onClick={handleAddCheese}>
          Add cheese
        </button>
        <button type="button" className={style.btn} onClick={handleAddSalami}>
          Add salami
        </button>
        <button type="button" className={style.btn} onClick={handleAddSalat}>
          Add salat
        </button>
        <button type="button" className={style.btn} onClick={handlAddClear}>
          Reset
        </button>
      </div>
      <button type="button" className={style.themeToggle} onClick={toggleTheme}>
        Переключить тему на (текущая: {theme})
      </button>
    </div>
  );
}
