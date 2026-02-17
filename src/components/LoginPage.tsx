import React, { useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";

// https://dummyjson.com/docs/auth#lauth-login
// https://dummyjson.com/

export default function LoginPage(): JSX.Element {
  const [username, setUsername] = useState<string>("emilys");
  const [password, setPassword] = useState<string>("emilyspass");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Функция будет вызываться при отправке формы (onSubmit).
    //async нужен, потому что внутри будет await fetch(...).
    // e: React. FormEvent - тип события "отправка формы"
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Говорим серверу: "Я отправляю JSON".
        // Без этого многие АРІ не поймут тело запроса.
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        setError("Wrong Login or password");
        return;
      }
      const data = await res.json();
      // Превращаем тело ответа в объект.
      // В data будут поля пользователя и токены (accessToken, refreshToken).
      console.log("token", data.accessToken);

      // сохраняем токен в локал сторадж
      localStorage.setItem("token", data.accessToken);

      navigate("/", { replace: true });
      //Перенаправляем пользователя на / (Home).
      //{ replace: true } означает:
      // "замени текущую страницу в истории"
      //чтобы при кнопке "назад" браузер не возвращал на страницу логина.
    } catch {
      setError("network error");
    }
  }

  return (
    <div style={{ maxWidth: 320, margin: "60px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin} style={{ display: "grid", gap: 10 }}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        {/* Это контролируемый инпут:
        value={username} - значение берётся из state.
        onChange - при вводе текста обновляем state.
        e. target. value - то, что ввёл пользователь. */}

        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />

        <button type="submit">SIGN IN</button>
        {error && <div style={{ color: "crimson" }}>{error}</div>}
        {/* Если error не пустой - показываем div.
            Если error == "" - ничего не рендерится. */}

        <div style={{ fontSize: 12, opacity: 0.8 }}>
          Тест: <b>emilys / emilyspass</b>
        </div>
      </form>
    </div>
  );
}
