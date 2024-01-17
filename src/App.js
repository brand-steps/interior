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
import ListDetails from "./Pages/Customer/Listdetails/ListDetails";
import HrApp from "./Pages/Admin/dashboard/HrApp";
import AllListingDisplay from "./Pages/Admin/Alllistingsdisplay/AlllListingDisplay";
import ApprovalPage from "./Pages/Admin/ApprovalPage/ApprovalPage";
import AllUserPage from "./Pages/Admin/AllUserspage/AllUserPage";
import ManageListDisplay from "./Pages/Admin/Managelistdisplay/ManageListDisplay";
import EditListing from "./Pages/Admin/Editlisting/EditListing";
import ViewLister from "./Pages/Admin/Viewlister/ViewLister";
import EditLister from "./Pages/Admin/Editlister/EditLister";
import SubcategoryDisplay from "./Pages/Lister/Subcategorydisplaypage/SubcategoryDisplay";
import AddList2 from "./Pages/Lister/Addlistuser/AddList2";
import ChoosePricing from "./Pages/Customer/Pricing/ChoosePricing";
import Signin from "./Pages/Lister/Signin/Signin";
import Packages from "./Pages/Lister/Packages/Packages";
import OthersPage from "./Pages/Customer/Home/CategoryPages/Otherspage/OthersPage";
import Privacy from "./Pages/Customer/Additionals/Privacy";
import Terms from "./Pages/Customer/Additionals/Terms";
import AboutUs from "./Pages/Customer/Aboutus/AboutUs";
import CheckoutBasic from "./Pages/Lister/CheckoutPages/CheckoutBasic";
import Karachi from "./Pages/Lister/Citypages/Karachi";
import Lahore from "./Pages/Lister/Citypages/Lahore";
import Islamabad from "./Pages/Lister/Citypages/Islamabad";
import Multan from "./Pages/Lister/Citypages/Multan";

function App() {
  let backendurl = "https://easy-erin-clownfish-ring.cyclic.ap p/"
  let newurl = "https://quaint-pocketbook-bat.cyclic.a pp"
  let vercelurl = "https://list-back-gn1y.vercel.ap p"
  let locals = "http://localhost:800 0"

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
              <Route path={"/others"} element={<OthersPage />} />
              <Route path={"/listings"} element={<ListingPage />} />
              <Route path={"/register"} element={<RegisterUser />} />
              <Route path={"/listdisplay/:id"} element={<UserListDisplay />} />
              <Route path={"/pricing"} element={<Pricing />} />
              <Route path={"/contact"} element={<Contact />} />
          {/*    <Route path={"/Addlisting"} element={<AddList />} /> */}
              <Route path={"/Addlisting"} element={<AddList2 />} />

              <Route path={"/listdetails/:id"} element={<ListDetails />} />
              <Route path={"/dashboardadmin"} element={<HrApp />} />
              <Route path={"/listdisplayadmin"} element={<AllListingDisplay />} />
              <Route path={"/approvelistadmin"} element={<ApprovalPage />} />
              <Route path={"/alluseradmin"} element={<AllUserPage />} />
              <Route path={"/bestsellermanage"} element={<ManageListDisplay />} />
              <Route path={"/editlisting/:id"} element={<EditListing />} />
              <Route path={"/userlistview/:id"} element={<ViewLister />} />
              <Route path={"/edituserlister/:id"} element={<EditLister />} />
              <Route path={"/subcategories/:name"} element={<SubcategoryDisplay />} />
              <Route path={"/choosepricing/:id"} element={<ChoosePricing />} />
              <Route path={"/signin"} element={<Signin />} />
              <Route path={"/packages/:id"} element={<Packages />} />
              <Route path={"/privacypolicy"} element={<Privacy />} />
              <Route path={"/terms&conditon"} element={<Terms />} />
              <Route path={"/aboutus"} element={<AboutUs />} />
              <Route path={"/checkoutbasic/:price"} element={<CheckoutBasic />} />

              <Route path={"/karachi"} element={<Karachi />} />
              <Route path={"/lahore"} element={<Lahore />} />
              <Route path={"/islamabad"} element={<Islamabad />} />
              <Route path={"/multan"} element={<Multan />} />


            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
