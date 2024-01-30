import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InteriorDetails from "./pages/Customer/Details/Interiordetails/InteriorDetails";
import HomePg from "./pages/Homepg/Homepg";
import HomePage from "./pages/Customer/Home/HomePage";
import Gallery from "./pages/Gallery/Gallery";
import ExteriorDetails from "./pages/Customer/Details/Exteriordetails/ExteriorDetails";
import ArchitectureDetails from "./pages/Customer/Details/Architecturedetails/ArchitectureDetails";
import FurnitureDetails from "./pages/Customer/Details/Furnituredetails/FurnitureDetails";
import LandscapeDetails from "./pages/Customer/Details/LandscapeDetails";
import StudioDetails from "./pages/Customer/Details/Studio3d/Studio";

function App() {
  let backendurl = "https://easy-erin-clownfish-ring.cyclic.ap p/"
  let newurl = "https://quaint-pocketbook-bat.cyclic.a pp"
  let vercelurl = "https://list-back-gn1y.vercel.ap p"
  let locals = "http://localhost:800 0"

  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<HomePg />} />
              <Route path={"/interiordesign"} element={<InteriorDetails />} />
              <Route path={"/Album"} element={<Gallery />} />
              <Route path={"/exteriordetails"} element={<ExteriorDetails />} />
              <Route path={"/Architecturedetails"} element={<ArchitectureDetails />} />
              <Route path={"/Furnituredetails"} element={<FurnitureDetails />} />
              <Route path={"/Landscapingdetails"} element={<LandscapeDetails />} />
              <Route path={"/Studiodetails"} element={<StudioDetails />} />

            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
