import { useEffect, useState } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("portfolio_theme", "light");
    }
  }, [dark]);

  return [dark, setDark];
}
