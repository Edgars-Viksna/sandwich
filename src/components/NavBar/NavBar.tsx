import React, { type JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(): JSX.Element {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // Пользователь логинится
  // Сервер DummyJSON возвращает accessToken
  // Мы сохраняем его в localStorage
  // ProtectedRoute проверяет:
  // если token есть → пускаем
  // если нет - редирект

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.listElement}>
          <NavLink to="/alcohol" className={style.link}>
            Alcohol
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/contactform" className={style.link}>
            Contact Form
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/carshop" className={style.link}>
            Car shop
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/dogs" className={style.link}>
            Dogs
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/sandwich" className={style.link}>
            Sandwich
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/userspage" className={style.link}>
            Users Page
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/" className={style.link}>
            Home
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/products" className={style.link}>
            Products
          </NavLink>
        </li>

         <li className={style.listElement}>
          <NavLink to="/weatherapp" className={style.link}>
            Weather
          </NavLink>
        </li>

        <li className={style.listElement}>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
