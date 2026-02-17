// Создание кастомного хука

import { useContext } from "react";
import type { ThemeContextType } from "./ThemeContext";
import ThemeContext from "./ThemeContext";

// Создание кастомного хука

export default function useTheme(): ThemeContextType {
  // Функция useTheme() — это кастомный хук, который возвращает данные из ThemeContext.
  // Он гарантирует, что внутри компонента будет
  //  доступ к контексту и автоматически выбрасывает ошибку,
  // если хук используется вне ThemeProvider.

  //Получение данных из контекста
  const context = useContext(ThemeContext);

  //Проверка на наличие контекста
  if (!context) {
    throw new Error("useTheme must be used whithin a ThemeProvider");
  }
  return context;
}
// https://react.dev/reference/react/useContext

//✅ ThemeContext.ts – только контекст.
//✅ ThemeProvider.tsx – провайдер.
//✅ useTheme.ts – хук для удобного использования контекста.