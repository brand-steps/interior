import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNAvbar from '../../../Components/Header/Adminnavbar/AdminNavbar';


const ViewLister = () => {
  const navigate = useNavigate();
const {id} = useParams();
  const [products, setProducts] = useState([]);
  const [singleuser, setsingleuser] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)
  const [page, setPage] = useState(1)
  const [numberOfPages, setnumberOfPages] = useState(9)
  let [customeruser, setcustomeruser] = useState(false);
  let [customerresponse, setcustomerresponse] = useState("");
  const [Delete , setdelete] = useState(false);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://quaint-pocketbook-bat.cyclic.app/listdisplayuserid/${id}`);
      console.log("response: ", response);
      console.log(response.data);
      setProducts(response.data.data);
      console.log("Products" + response.data.data);
    } catch (error) {
      console.log("Error In Getting All Products ", error);
    }
  };
  const fetchSingleProduct = async() => {
    const response = await axios.get(`https://quaint-pocketbook-bat.cyclic.app/singleuser/${id}`);
    console.log("response: ", response);
  setsingleuser(response.data.Product);
  console.log(singleuser);

        }
  const deleteData = async (id)=>{
    try {
      const response = await axios.delete(`https://quaint-pocketbook-bat.cyclic.app/deletelist/${id}`)
      console.log("response: ", response.data);
      setdelete(!Delete)
    } catch (error) {
      console.log("error in deleting all requests", error);
    }
    alert("Product deleted");
  };
  useEffect(() => {
    console.log('asdasd')
    fetchSingleProduct()
    getAllProducts()
  }, [Delete])

 
  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#EC0C36',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  return (
    <>
    <AdminNAvbar/>
    <h1 className='mx-5 my-5 text-3xl font-bold text-center'>{singleuser.firstname}</h1>
    <h1 className='mx-5 my-5 text-xl font-semibold text-center'>package: {singleuser.packagename}</h1>
    <br/>
    <div className='flex  justify-center flex-wrap my-4' >
      
 {products.map((eachProduct, i) => (
      <div style={containerStyle}>
      <Card className="max-w-sm" imgSrc={eachProduct.imageUrl1} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {eachProduct.productname}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        You can view your product
        <p className='mt-2'> <span className='font-bold'>
        Status: </span>
          {eachProduct.Deactive === false ? (
            <>
            <span className='text-green-500'> Active</span>
            </>
          ): (<>
          <span className='text-red-500'>DisActive</span>
          </>)}
             <span className='ml-4'>Price: ${eachProduct.price}</span> <button className='font-bold ml-2 text-red-500' onClick={()=>{deleteData(eachProduct._id)}}>Delete</button><button className='font-bold ml-2 text-purple-600' onClick={() => {navigate(`/listdetails/${eachProduct._id}`)}} >View</button></p>
      </p>
    </Card> 

      </div>

))}
    </div>
    </>
  );
}

export default ViewLister;
