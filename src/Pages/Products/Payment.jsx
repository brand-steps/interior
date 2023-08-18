import React, { useState } from 'react';
import Footer from '../Foooter/Footer';
import Home from '../HOme/Home';
import { useParams } from 'react-router-dom';

const PaymentPage = () => {
  const { totalPrice } = useParams();

    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState(''); // Add state for amount
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add payment processing logic here
    };
  

  return (
    <div className='bg-gray-100'   >
<Home/>

<div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Payment Details</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-indigo-300"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-indigo-300"
              placeholder="**** **** **** ****"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                className="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-indigo-300"
                placeholder="MM/YY"
              />
            </div>


            <div className="w-1/2 mt-8 ">
            <p className=" font-semibold mb-2">
            Total Amount: ${parseFloat(totalPrice).toFixed(2)}
          </p>
            </div>






              

          </div>
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
              How would you like to pay?
            </label>
            <select
              id="paymentMethod"
              className="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-indigo-300"
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bitcoin">Bitcoin</option>
            </select>
          </div>
          <button
  type="submit"


  style={{"background" : "rgb(236, 12, 54)"}}
  className="w-full  text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
>
  Pay Now
</button>

        </form>
      </div>
    </div>

    <Footer/>
    </div>
  );
};

export default PaymentPage;
