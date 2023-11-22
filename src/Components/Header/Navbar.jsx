import "./navbar.css";
import logo from "../../Assests/car1.jpg";
import logos from "../../Assests/logo-5.png";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {

  const navigate = useNavigate();
  let [user, setUser] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isUlVisible, setIsUlVisible] = useState(false);
  const [showList, setShowList] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowList(false);
    }, 200); // Delay to allow clicking on the list items
  };

  const handleFocus = () => {
    setShowList(true);
  };

  return (
    <nav className="nav headerbg flex flex-wrap items-center justify-between px-4">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <div style={{ width: "220px" }} class="logo ">
          <Link to={"/"}>
            <img src={logos} alt="" style={{ height: "100px" }} />
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
        className={`menu border-b md:border-none flex justify-center list-reset m-0 w-full md:w-auto ${
          isMenuOpen ? "" : "hidden"
        }`}
        id="menu"
      >
        <Link to="/">
        <li className="md:border-none mt-2    mr-4 headcolor font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          Home
        </li>
        </Link>
        <Link to="/Corporate">
        <li className="border-t md:border-none mt-2 mr-4 headcolor font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          Current Stock
        </li>
        </Link>
        <Link to="/Prducts">
        <li className="border-t md:border-none mt-2 mr-4 headcolor font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          Sold
        </li>
        </Link>
       {/*} <Link to="/OurDocument">
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          Our Documents
        </li>
        </Link>
      */}
        <Link to="/TechnicalService">
        <li className="border-t md:border-none mt-2 mr-4 headcolor font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          Finance
        </li>
        </Link>
        <Link to="/Contact">
        <li className="border-t md:border-none mt-2 mr-4 headcolor font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          Contact
        </li>
        </Link>
       


        
      </ul>


    </nav>
  );
};

export default Navbar;
