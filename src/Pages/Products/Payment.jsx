import React, { useState } from 'react';
import Footer from '../Foooter/Footer';
import Home from '../HOme/Home';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../Context/Context';
const PaymentPage = () => {
  const { totalPrice } = useParams();
  const { quantity } = useParams();
  const {name, setName} = useContext(MyContext);
  const {pricep , setPricep} = useContext(MyContext);
  const {description, setDescription} = useContext(MyContext);
  const {image , setImage } = useContext(MyContext);
  const allProduct = [name ,  totalPrice , description , image ,  totalPrice]
console.log(allProduct);

  return (
    <div className='bg-gray-100'   >
<Home/>

<div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Order Summary</p>
    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={image.key} alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">{name.key}</span>
          <span class="font-semibold">{quantity}</span>
          <p class="text-lg font-bold">{totalPrice}</p>
        </div>
      </div>
    </div>

    <p class="mt-8 text-lg font-medium">Shipping Methods</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Fedex Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Fedex Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  </div>
  <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Payment Details</p>
    <p class="text-gray-400">Complete your order by providing your payment details.</p>
    <div class="">
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
      <div class="relative">
        <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>
      <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
      <div class="flex">
        <div class="relative w-7/12 flex-shrink-0">
          <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
        <input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
        <input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
      </div>
      <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
      <div class="flex flex-col sm:flex-row">
        <div class="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <img class="h-4 w-4 object-contain" src="data:image/png;base64,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" alt="" />
          </div>
        </div>
        <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
          <option value="State">State</option>
        </select>
        <input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
      </div>

      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900"> £{parseFloat(totalPrice).toFixed(2)}</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Shipping</p>
          <p class="font-semibold text-gray-900">£8.00</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900"> £{parseFloat(totalPrice).toFixed(2)}</p>
      </div>
    </div>
    <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
  </div>
</div>

    <Footer/>
    </div>
  );
};

export default PaymentPage;
