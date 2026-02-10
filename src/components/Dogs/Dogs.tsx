import { useEffect, useState, type JSX } from "react";

export default function Dog(): JSX.Element {
  const [image, setImage] = useState<string>("");

  async function loadDog(): Promise<void> {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const object = await response.json();
    const { message } = object;
    setImage(message);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadDog();
  }, []);

  return (
    <div>
      <h1>Dog</h1>
      <div>
        <button type="button" onClick={() => loadDog()}>
          NEXT IMAGE
        </button>
      </div>

      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
