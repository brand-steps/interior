import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Customer/Homepage/Home";
import Stocks from "./Pages/Customer/CurrentStocks/Stocks";
import Finance from "./Pages/Customer/Finance/Finance";
import Contactus from "./Pages/Customer/Contact/Contactus";
import Stockdetail from "./Pages/Customer/Stockdetails/Stockdetail";
import SoldStock from "./Pages/Customer/Sold/SoldStock";
import AddStock from "./Pages/Admin/Addstock/AddStock";
import DisplayStock from "./Pages/Admin/Displaystock/DisplayStock";
import DetailStock from "./Pages/Admin/Detailstock/DetailStock";
import EditStock from "./Pages/Admin/Editstock/EditStock";
function App() {
  let url = "https://drab-tan-sheep-fez.cyclic.ap p";
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
              <Route path={"/Addstocks"} element={<AddStock />} />
              <Route path={"/displaystock"} element={<DisplayStock />} />
              <Route path={"/detailstock/:id"} element={<DetailStock />} />
              <Route path={"/editstock/:id"} element={<EditStock />} />


            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
