import { useEffect , useState} from 'react';
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
import axios from 'axios';
const MainPage = () => {
let [user, setUser] = useState(false)



console.log('Home Page');
useEffect(() => {

  const getProfile = async () => {
    try {
      let response = await axios.get(`http://localhost:8000/api/v1/profile`,
        {
          withCredentials: true,
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
          }
        });

      console.log("response: ", response);
      setUser(true)
    } catch (error) {
      console.log("axios error: ", error);


    }



  }
  getProfile();

}, [])



  return (
    <div>
<Home  user={user}   />
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