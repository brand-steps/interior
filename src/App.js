import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Customer/Home/HomePage";
import PropertyPage from "./Pages/Customer/Home/CategoryPages/Propertypage/PropertyPage";
import FashionPage from "./Pages/Customer/Home/CategoryPages/Fashionpage/FashionPage";
import ServicePage from "./Pages/Customer/Home/CategoryPages/Servicepage/ServicePage";
import FurniturePage from "./Pages/Customer/Home/CategoryPages/Furniturepage/FurniturePage";
import HealthPage from "./Pages/Customer/Home/CategoryPages/Healthpage/HealthPage";
import EventPage from "./Pages/Customer/Home/CategoryPages/Eventpage/EventPage";
import BeautyPage from "./Pages/Customer/Home/CategoryPages/Beautypage/BeautyPage";
import JobPage from "./Pages/Customer/Home/CategoryPages/Jobpage/JobPage";
import ListingPage from "./Pages/Customer/Listings/ListingPage";
import RegisterUser from "./Pages/Lister/Register/RegisterUser";
import UserListDisplay from "./Pages/Lister/UserlistDisplay/UserListDisplay";
import Pricing from "./Pages/Customer/Pricing/Pricing";
import Contact from "./Pages/Customer/Contact/Contact";
import AddList from "./Pages/Lister/Addlistuser/AddList";
import ListDetails from "./Pages/Customer/Listdetails/ListDetails";

function App() {
  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<HomePage />} />
              <Route path={"/property"} element={<PropertyPage />} />
              <Route path={"/fashion"} element={<FashionPage />} />
              <Route path={"/Services"} element={<ServicePage />} />
              <Route path={"/furnitures"} element={<FurniturePage />} />
              <Route path={"/health"} element={<HealthPage />} />
              <Route path={"/event"} element={<EventPage />} />
              <Route path={"/beauty"} element={<BeautyPage />} />
              <Route path={"/jobs"} element={<JobPage />} />
              <Route path={"/listings"} element={<ListingPage />} />
              <Route path={"/listings"} element={<ListingPage />} />
              <Route path={"/register"} element={<RegisterUser />} />
              <Route path={"/listdisplay/:name"} element={<UserListDisplay />} />
              <Route path={"/pricing"} element={<Pricing />} />
              <Route path={"/contact"} element={<Contact />} />
              <Route path={"/Addlisting"} element={<AddList />} />
              <Route path={"/listdetails/:id"} element={<ListDetails />} />



            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
