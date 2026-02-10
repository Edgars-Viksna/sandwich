import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CarShop from "./components/CarShop/CarShop.tsx";
import PhoneStore from "./components/PhoneStore/PhoneStore.tsx";
import Counter from "./components/Counter/Counter.tsx";
import Playground from "./components/Playground/Playground.tsx";
import Alcohol from "./components/Alcohols/Alcohol.tsx";
import Dogs from "./components/Dogs/Dogs.tsx";
import ThemeSwitcer from "./components/ThemeSwitcher/ThemeSwitcer.tsx";
import Sandwich from "./components/Sandwich/sandwich.tsx";




createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Sandwich />
    <ThemeSwitcer />
    <Dogs />
    <Alcohol/>
    <Playground/>
    <App />
    <CarShop />
    <PhoneStore />
    <Counter />
  </StrictMode>,
);
