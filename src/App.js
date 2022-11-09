import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./components/main/main";
import Master from "./pages/master/Master";
import Order from "./pages/order/Order";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/master" element={<Master />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
