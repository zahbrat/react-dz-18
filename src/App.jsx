import { useContext, useRef } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const inputRef = useRef(null); 
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "2rem",
        minHeight: "100vh",
      }}
    >
      <h1>React useContext & useRef Demo</h1>
      <button onClick={toggleTheme}>Переключити тему</button>
      <div style={{ marginTop: "1rem" }}>
        <input ref={inputRef} placeholder="Введи текст..." />
        <button onClick={focusInput} style={{ marginLeft: "0.5rem" }}>
          Фокус на інпут
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
