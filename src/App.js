import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Customer/Homepage/Home";
import Stocks from "./Pages/Customer/CurrentStocks/Stocks";

function App() {
  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/stock"} element={<Stocks />} />


            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
