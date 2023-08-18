import logo from './logo.svg';
import './App.css';
import Home from './Pages/HOme/Home';
import Slider from './Pages/Slider/Slider';
import Cards from './Pages/Cards/Cards';
import About from './Pages/Aboutus/About'; 
import ProductGroup from './Pages/FirstPage/ProductGroup/ProductGroup';
import ProductSlider from './Pages/FirstPage/ProductGroup/ProductSlider.jsx/ProductSlider';
import Services from './Pages/FirstPage/Services/Services';
// import Login from './Pages/FirstPage/Login/Login';
import FairsComponent from './Pages/FirstPage/FairsArticle/FairsArticle';
import Footer from './Pages/Foooter/Footer';
import Corporate from './Pages/Corporate/Corporate';
import Prducts from './Pages/Products/Prducts';
import BackgroundDiv from './Pages/FirstPage/FairsArticle/FairsArticle';
import OurDocument from './Pages/OurDocuments/OurDocument';
import Contact from './Pages/ContactForm/Contact';
import MainPage from './Pages/MainPage/MainPage';
import Teachnical from './Pages/TeachnicalService/Teachnical';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Productdetail from './Pages/Products/ProductDetail';
import PaymentPage from './Pages/Products/Payment';
import Dashbord from './Pages/AdminDashboard/Dashboard';
import AddProduct from './Pages/AdminDashboard/DashboardCrud/AddProduct/Addproduct';
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/Corporate"} element={<Corporate/>} />
        <Route path={"/Prducts"} element={<Prducts/>} />
        <Route path={"/OurDocument"} element={<OurDocument/>} />
        <Route path={"/Contact"} element={<Contact/>} />
        <Route path={"/TechnicalService"} element={<Teachnical/>} />
        <Route path={"/Login"} element={<Login/>} />
        <Route path="/Productdetail/:img/:text/:paragraph/:price"  element={<Productdetail/>}  />
        <Route path="/PaymentPage/:totalPrice"  element={<PaymentPage/>}  />
        <Route path="/Dashbord"  element={<Dashbord/>}  />
        <Route path="/AddProduct"  element={<AddProduct/>}  />
</Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
