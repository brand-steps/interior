import About from '../../../Components/Body/Home/About/About';
import AboutHeading from '../../../Components/Body/Home/MainpgHeading/AboutHeading';
import CarHeading from '../../../Components/Body/Home/MainpgHeading/CarHeading';
import MainHead from '../../../Components/Body/Home/MainpgHeading/MainHead';
import Footer from '../../../Components/Footer/Footer';
import Footer2 from '../../../Components/Footer/Footer2';
import Navbar from '../../../Components/Header/Navbar';
import Navbar2 from '../../../Components/Header/Navbar2';
import MainSlider from './Mainslider/MainSlider';
import MainSub from './Mainsub/MainSub';
import MainTypes from './Maintypes/MainTypes';
import Productdisplay from './Productmain/Productdisplay';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar2/>
      <MainSlider/>
     {/*} <MainHead/> */}
      <MainSub/>
      <MainHead/>
      <MainTypes/>
      <CarHeading/>
      <Productdisplay/>
      <AboutHeading/>
      <About/>
      <Footer2/>
    </div>
  )
}

export default Home