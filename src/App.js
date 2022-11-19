import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./components/main/main";
import Master from "./pages/master/Master";
import Order from "./pages/order/Order";
import About from "./pages/about/About";

// Theme settings
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";

function App() {
  // Theme

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/master" element={<Master />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
