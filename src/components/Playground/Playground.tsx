import { useEffect, useState, type JSX } from "react";

export default function Playground(): JSX.Element {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
  const [numberOfBirds, setNumberOfBirds] = useState<number>(10);

  function handleAddDog(): void {
    setNumberOfDogs(numberOfDogs + 1);
  }

  function handleAddBird(): void {
    setNumberOfBirds(numberOfBirds + 10);
  }

  // Example 1, пустой массив зависимостей
  useEffect(() => {
    console.log("UseEffect 1 - только при первой отрисовке === mount");
  }, []);
  // Example 1, пустой массив зависимостей
  useEffect(() => {
    console.log("UseEffect 2 - при первой оирисовке, при любых изменениях");
  });

  useEffect(() => {
    console.log(
      "UseEffect 3 - при первой отрисовке , при изменении переменной numberOfBirds",
    );
  }, [numberOfBirds]);

  return (
    <div>
      <p>Playground</p>
      <p>Number of Birds: {numberOfBirds}</p>
      <p>Number of Dogs: {numberOfDogs}</p>
      <button type="button" onClick={handleAddBird}>
        New bird
      </button>
      <button type="button" onClick={handleAddDog}>
        Let the dog in
      </button>
    </div>
  );
}
