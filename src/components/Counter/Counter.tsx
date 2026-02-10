import { useState, type JSX } from "react";
import style from "./Counter.module.css";

export default function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  /*
// создали переменную состояния counter
    // и функцию setCounter для изменения состояния
    // useState -  это хук
    // в круглых скобках начальное состояние переменной состояния
    // хук useState  принимает начальное значение переменной состояния
    // возвращает массив в котором на первом месте переменная состояния
    // а на втором месте функция  сетер
    // Хук - это функция которая используется только внутри компонента
    // В жизненном цикле компонента React есть 3 фазы:
    // Сборка (mounting)
    // Обновление (updating)
    // Разборка (unmounting)
  */

  function handlePlus(): void {
    setCounter(counter + 1);
  }

  function handleMinus(): void {
    setCounter(counter - 1);
  }

  function handlePlus10(): void {
    setCounter(counter + 10);
  }

  function handleSetTo0(): void {
    setCounter(counter * 0);
  }

  return (
    <div>
      <h1>Add Geld</h1>
      <img
        src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg"
        alt=""
      />
      <div className={style.btnContainer}>
        <button type="button" onClick={handlePlus} className={style.btn}>
          +
        </button>

        <button type="button" onClick={handlePlus10} className={style.btn}>
          +10
        </button>

        <span className={style.counterSpan}>{counter}</span>
        <button type="button" onClick={handleMinus} className={style.btn}>
          -
        </button>

        <button type="button" onClick={handleSetTo0} className={style.btn}>
          reset
        </button>
      </div>
    </div>
  );
}
