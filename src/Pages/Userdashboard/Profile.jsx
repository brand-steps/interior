import React from 'react'
import Sidebaruser from './sidebarUser';
import { useEffect , useState} from 'react';
import axios from 'axios';

const Profile = () => {


const [responce  , setResponce] = useState("")


    useEffect(() => {

        const getProfile = async () => {
          try {
            let response = await axios.get(`https://precious-woolens-duck.cyclic.cloud/api/v1/profile`,
              {
                withCredentials: true,
                headers: {
                  'Cache-Control': 'no-cache',
                  'Pragma': 'no-cache',
                  'Expires': '0',
                }
              });
              console.log("response: ", response.data);
              setResponce(response.data)
          } catch (error) {
            console.log("axios error: ", error);
      
      
          }
      
        }
        getProfile();
      
      }, [])
    
  return (

    <div>
            <Sidebaruser />
            <div className="flex flex-wrap justify-center">
      <div className="flex mt-4 justify-center h-screen w-3/4">
  <div className="bg-white p-6 border-2  rounded-md shadow-md w-full max-w-md">
    <h2 className="text-4xl font-bold mb-2">User Information</h2>
    <p className='py-4'  ><span className="font-semibold 	">Email :</span> {responce.email}</p>
    <p className='py-4'  ><span className="font-semibold 	">Username:</span> {responce.username}</p>
    <p className='py-4'  ><span className="font-semibold 	">Password:</span> *******</p>
  </div>
</div>

    </div>
    </div>
    
  )
}

export default Profile