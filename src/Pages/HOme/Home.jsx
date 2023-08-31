import './home.css'
import logo from '../../Images/equipment suppliers logo mini.png';
import { Link } from "react-router-dom";
import { NavLink , useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { MyContext } from '../Context/Context';



const Home = () => {

  const { name, setName, pricep, setPricep, description, setDescription, image, setImage } = useContext(MyContext);
  const navigate = useNavigate();
  let [user, setUser] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isUlVisible, setIsUlVisible] = useState(false);
  const [showList, setShowList] = useState(false);
  const [selectedProduct , setSelectedProduct ] = useState()

  // console.log('Home Page');
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

        // console.log("response: ", response);
        setUser(true)
      } catch (error) {
        console.log("axios error: ", error);


      }



    }
    getProfile();

  }, [])
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/search?q=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }, 300); // Debounce time in milliseconds

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleBlur = () => {
    setTimeout(() => {
      setShowList(false);
    }, 200); // Delay to allow clicking on the list items
  };

  const handleFocus = () => {
    setShowList(true);
  };

  const handleButtonClick = (item) => {
    // console.log(item);
const {name , price , description , imageUrl  } = item
setName(name);
setPricep(price);
setDescription(description);
setImage(imageUrl);
navigate(`/Productdetail2`);
  };




  return (
    <nav className="nav bg-gray-900 flex flex-wrap items-center justify-between px-4">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <div style={{ width: "220px" }} class="logo ">
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
        className={`menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto ${isMenuOpen ? '' : 'hidden'
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
          <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            <Link to="/UserDashboard">
              <span>User<i className="fa fa-user" aria-hidden="true"></i></span>
            </Link>
          </li>
        ) : null}
<Link  to={'/CardPage'} >
<li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
<i class="fa-solid fa-cart-shopping"></i> 
        </li>
</Link>
{/* */}


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

      <div className="search-container  rounded-lg shadow p-4 " onBlur={handleBlur}>
        <div  className='flex '  >
        <input
        type="text"
        className="search-input border rounded-l-lg p-2 focus:outline-none "
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={handleFocus}
      />
 <button
            type="button"
            style={{ background: "rgb(236, 12, 54)" }}
            className="self-end text-white font-medium  text-sm px-5 py-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>
      {searchResults.length === 0 ? (
        <p>No products were found matching your selection.</p>
      ) : (
        <ul className={`PrdouctSerchUl ${showList ? 'block' : 'hidden'}`}>
          {searchResults.map((item) => (
            <li
            key={item._id}
            onClick={() => handleButtonClick(item)}
            className="itemHoverEffect cursor-pointer flex items-center p-2 hover:bg-gray-100"
           
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="mr-3"
              width={70}
              height={20}
            />
            <div>
              <p className="text-md font-semibold">{item.name}</p>
              <p className="text-gray-600">£{item.price}</p>
            </div>
          </li>
          
          ))}
        </ul>
      )}
    </div>


        
      









    </nav>


  );
};

export default Home;
