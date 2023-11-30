import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Customer/Homepage/Home";
import Stocks from "./Pages/Customer/CurrentStocks/Stocks";
import Finance from "./Pages/Customer/Finance/Finance";
import Contactus from "./Pages/Customer/Contact/Contactus";
import Stockdetail from "./Pages/Customer/Stockdetails/Stockdetail";
import SoldStock from "./Pages/Customer/Sold/SoldStock";
function App() {
  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/stock"} element={<Stocks />} />
              <Route path={"/finance"} element={<Finance />} />
              <Route path={"/contact"} element={<Contactus />} />
              <Route path={"/stockdetails"} element={<Stockdetail />} />
              <Route path={"/sold"} element={<SoldStock />} />


            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
