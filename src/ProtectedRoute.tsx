import { type JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(): JSX.Element {
  // Создаём компонент ProtectedRoute.
  // Он будет обёрткой для защищённых маршрутов.

  const token = localStorage.getItem("token");

  // Берём токен из localStorage.
  // Если пользователь залогинен - токен есть.
  // Если нет - будет null.
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  // Перенаправляем пользователя на страницу логина.
  // replace означает:
  // не добавлять новую запись в историю браузера
  // кнопка "Назад" не вернёт на защищённую страницу

  return (
    <Outlet />
    // Если токен есть - показываем вложенные маршруты.
    // То есть рендерится Layout + страница.
  );
}
