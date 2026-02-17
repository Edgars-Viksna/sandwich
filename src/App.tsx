import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Alcohol from "./components/Alcohols/Alcohol";
import ContactForm from "./components/ContactForm/ContactForm";
import CarShop from "./components/CarShop/CarShop";
import type { JSX } from "react";
import Dog from "./components/Dogs/Dogs";
import Sandwich from "./components/Sandwich/Sandwich";
import UsersPage from "./components/UsersPage/types/UsersPage";
import Home from "./components/Home/Home";
import UserPage from "./components/UserPage/UserPage";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Products from "./components/Products/types/Products";
import Product from "./components/Product/Product";

export default function App(): JSX.Element {
  return (
    <Routes>
      {/* публичный роут */}
      <Route path="/login" element={<LoginPage />} />
      {/* Это обычный маршрут:
      /Login доступен всегда
      не проверяется токен
      не обёрнут в ProtectedRoute */}

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/alcohol" element={<Alcohol />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/carshop" element={<CarShop />} />
          <Route path="/dogs" element={<Dog />} />
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/userspage" element={<UsersPage />} />
          <Route path="/userspage/:userId" element={<UserPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
        </Route>
      </Route>
    </Routes>
  );
}
