import About from '../../../Components/Body/Home/About/About';
import AboutHeading from '../../../Components/Body/Home/MainpgHeading/AboutHeading';
import CarHeading from '../../../Components/Body/Home/MainpgHeading/CarHeading';
import MainHead from '../../../Components/Body/Home/MainpgHeading/MainHead';
import WhatsappIcon from '../../../Components/Body/Home/Whatsapp/WhatsappIcon';
import SearchBar from '../../../Components/Body/Stockcomponents/SearchBar';
import Footer from '../../../Components/Footer/Footer';
import Footer2 from '../../../Components/Footer/Footer2';
import NavContact2 from '../../../Components/Header/NavContact2';
import Navbar2 from '../../../Components/Header/Navbar2';
import MainSlider from './Mainslider/MainSlider';
import MainSlider2 from './Mainslider2/MainSlider2';
import MainSub from './Mainsub/MainSub';
import MainTypes from './Maintypes/MainTypes';
import Productdisplay from './Productmain/Productdisplay';
import './home.css';

const Home = () => {
  return (
    <div>
      
      <NavContact2/>
      <Navbar2/>
      <MainSlider2/>
           {/*}        
   
 <MainHead/>MainSlider <NavContact2/> <NavContact/> <AboutHeading/> */}
      <MainSub/>
      <SearchBar/>
      <MainTypes/>
      <CarHeading/>
      <Productdisplay/>
      <MainHead/>
      <WhatsappIcon/>
      <About/>
      <Footer2/>
    </div>
  )
}

export default Home