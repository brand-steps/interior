import About from '../../../Components/Body/Home/About/About';
import AboutHeading from '../../../Components/Body/Home/MainpgHeading/AboutHeading';
import CarHeading from '../../../Components/Body/Home/MainpgHeading/CarHeading';
import MainHead from '../../../Components/Body/Home/MainpgHeading/MainHead';
import Footer from '../../../Components/Footer/Footer';
import Navbar from '../../../Components/Header/Navbar';
import MainSlider from './Mainslider/MainSlider';
import MainTypes from './Maintypes/MainTypes';
import Productdisplay from './Productmain/Productdisplay';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MainSlider/>
      <MainHead/>
      <MainTypes/>
      <CarHeading/>
      <Productdisplay/>
      <AboutHeading/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home