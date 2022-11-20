import { useEffect, useState } from "react";
export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  /* eslint-disable */
  const [mountedComponent, setMountedComponent] = useState(false);
  /* eslint-enable */
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler];
};
