import Home from '../../Pages/HOme/Home';
import Slider from '../../Pages/Slider/Slider';
import Cards from '../../Pages/Cards/Cards';
import About from '../../Pages/Aboutus/About'; 
import ProductGroup from '../../Pages/FirstPage/ProductGroup/ProductGroup';
import ProductSlider from '../../Pages/FirstPage/ProductGroup/ProductSlider.jsx/ProductSlider';
import Services from '../../Pages/FirstPage/Services/Services';
import Login from '../../Pages/FirstPage/Login/Login';
import FairsComponent from '../../Pages/FirstPage/FairsArticle/FairsArticle';
import Footer from '../../Pages/Foooter/Footer';
import { useEffect , useState} from 'react';
import axios from 'axios';

const MainPage = () => {
  return (
    <div>
<Home />
  <Slider/>
  <Cards/>
  <About/>
  <ProductGroup/>
  <ProductSlider/>
  <Services/>
  <Login/>
  <FairsComponent/>
  <Footer/>
    </div>
  )
}

export default MainPage