import React, { useContext, useState } from 'react'; // Don't forget to import useContext!
import CartContext from '../Context/CartContext';
import Home from '../HOme/Home';
import Footer from '../Foooter/Footer';
const CardPage = () => {



  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  const [data, setData] = useState(cartItems)
  console.log(data);
  return (
    <div>
      <Home />

      <div>
        <div class="h-screen py-8">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="md:w-3/4">
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table class="w-full">
                    <thead>
                      <tr>
                        <th class="text-left font-semibold">Product</th>
                        <th class="text-left font-semibold">Price</th>
                        <th class="text-left ml-6 font-semibold">Quantity</th>
                      </tr>
                    </thead>

                    {data.map((innerArray, index) => (
                      <tbody key={index}>
                        <tr>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img className="h-16 w-16 mr-4" src={innerArray[3].key} alt="Product image" />
                              <span className="font-semibold">{innerArray[0].key}</span>
                            </div>
                          </td>
                          <td className="py-4">${innerArray[5]}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button className="border rounded-md py-2 px-4 mr-2">-</button>
                              <span className="text-center w-8">{innerArray[4]}</span>
                              <button className="border rounded-md py-2 px-4 ml-2">+</button>
                            </div>
                          </td>
                       
                        </tr>
                      </tbody>
                    ))}





                  </table>
                </div>
              </div>
              <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                  <h2 class="text-lg font-semibold mb-4">Summary</h2>
                  <div class="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>$19.99</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>$1.99</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <hr class="my-2" />
                  <div class="flex justify-between mb-2">
                    <span class="font-semibold">Total</span>
                    <span class="font-semibold">$21.98</span>
                  </div>
                  <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>




      </div>



    </div>

  )
}

export default CardPage