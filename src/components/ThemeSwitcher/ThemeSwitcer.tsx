import { useState, type JSX } from "react";

export default function ThemeSwitcer(): JSX.Element {
  type Theme = "light" | "dark";
  const [theme, setTheme] = useState<Theme>("dark");
  function toggleTheme(): void {
    setTheme((prev: Theme) => (prev === "dark" ? "light" : "dark"));
  }

  const pageStyle: React.CSSProperties =
    theme === "light"
      ? {
          backgroundColor: "#ffffff",
          color: "#000000",
          height: "100vh",
          padding: "20px",
        }
      : {
          backgroundColor: "#000000",
          color: "#ffffff",
          height: "100vh",
          padding: "20px",
        };

  return (
    <div style={pageStyle}>
      <h2>Current Theme: {theme}</h2>
      <button type="button" onClick={toggleTheme}>
        change theme
      </button>
    </div>
  );
}
