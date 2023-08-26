import './home.css'
import logo from '../../Images/equipment suppliers logo mini.png';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect , useState} from 'react';
import axios from 'axios';




const Home = () => {

  let [user, setUser] = useState(false)



  console.log('Home Page');
  useEffect(() => {
  
    const getProfile = async () => {
      try {
        let response = await axios.get(`https://busy-lime-cygnet-hem.cyclic.cloud/api/v1/profile`,
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










  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="nav bg-gray-900 flex flex-wrap items-center justify-between px-4">
    <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
    <div   style={{width : "260px"}}  class="logo ">
       <Link to={'/'}   >
       <img src={logo} alt="" />
       </Link>
    </div>
    </div>

    <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
    <label
      className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
      htmlFor="menu-btn"
      onClick={toggleMenu}
    >
      <span className="navicon bg-grey-darkest flex items-center relative"></span>
    </label>

    <ul
  className={`menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto ${
    isMenuOpen ? '' : 'hidden'
  }`}
  id="menu"
>
  <li className='md:border-none mt-2    mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out'>
    <Link to="/">Home</Link>
  </li>
  <li className='border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out'>
    <Link to="/Corporate">Corporate</Link>
  </li>
  <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
    <Link to="/Prducts">Products</Link>
  </li>
  <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
    <Link to="/OurDocument">Our Documents</Link>
  </li>
  <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
    <Link to="/TechnicalService">Technical Services</Link>
  </li>
  <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
    <Link to="/Contact">Contact</Link>
  </li>
  {user ? (
    <Link to="/UserDashboard">
      <li className="border-t md:border-none mt-2 mr-4 text-white hover:text-blue-500 transition duration-300 ease-in-out">
        <i className="fa fa-user" aria-hidden="true"></i>
      </li>
    </Link>
  ) : null}
  <NavLink to="/Login">
    <button
      type="button"
      style={{ background: "rgb(236, 12, 54)" }}
      className="self-end text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
    >
      Login in
    </button>
  </NavLink>
</ul>


  </nav>


  );
};

export default Home;
