// import React from 'react';
import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import imgs from '../../../../Assests/details1.jpg'

const StockSlider = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productsBoolean, setProductsBoolean] = useState(false);
    const [Delete, setdelete] = useState(false);
    const [Modularkitchens, setModularkitchens] = useState(false)
    const [MainKitchenEquiment, setMainKitchenEquiment] = useState(false)
    const [coldUnits, setColdUnits] = useState(false)
    const [DishwasherEquipment, setDishwasherEquipment] = useState(false)
    const [ovens, setOvens] = useState(false)
    const [preprationMachine, setpreprationMachine] = useState(false)
    const [Neutral, setNeutral] = useState(false)
    const [OpenBuffet, setOpenBuffet] = useState(false)
    const [TeaCoffee, setTeaCoffee] = useState(false)
    const [CaffeBar, setCACaffeBar] = useState(false)
    const [CountertopKitchen, setCountertopKitchen] = useState(false)
    const [bakeryEqupent, setbakeryEqupent] = useState(false)
    const [KitchenUtensil , setKitchenUtensil] = useState(false)
    const [HygieneandSanitation , setHygieneandSanitation] =  useState(false)
    const [DesktopandPresentationEquiment , setDesktopandPresentationEquiment] = useState(false) 
    const [BeverageandBar , setBeverageandBar ] = useState(false)

   const [category, setCategory] = useState("");

   const divStyle = {
    cursor: "pointer",
    /* Other styles you might want to apply */
  };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className='mx-6 my-4 lg:w-5/5 md:w-4/5 sm:w-2/5 w-2/5 h-20 ' style={divStyle}>
            <Carousel
                swipeable={true}
                arrows={true}
                draggable={true}
                autoPlay={true}
                responsive={responsive}

            >
                
                <div onClick={() => {navigate("/Refrigeration")}} onMouseEnter={() => (setOpenBuffet(true))} onMouseLeave={() => (setOpenBuffet(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src={imgs} alt="" />
                </div>
                <div onClick={() => {navigate("/Dishwashing")}} onMouseEnter={() => (setDishwasherEquipment(true))} onMouseLeave={() => (setDishwasherEquipment(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/vr5npfcg/bulasik_giyotin.svg" alt="" />
                </div>
                <div onClick={() => {navigate("/Appliances")}} onMouseEnter={() => (setbakeryEqupent(true))} onMouseLeave={() => (setbakeryEqupent(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12' src="https://ozti.com/media/xgipiphp/pastane.svg" alt="" />
                </div>
                <div onClick={() => {navigate("/StainlessSteel")}} onMouseEnter={() => (setNeutral(true))} onMouseLeave={() => (setNeutral(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/b1zf4p3m/davlumbaz.svg" alt="" />
                </div>
                <div onClick={() => {navigate("/Cooking")}} onMouseEnter={() => (setCountertopKitchen(true))} onMouseLeave={() => (setCountertopKitchen(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/0ezpsikc/mutfak_gerecleri.svg" alt="" />
                </div>
                <div onClick={() => {navigate("/Foodprep")}} onMouseEnter={() => (setBeverageandBar(true))} onMouseLeave={() => (setBeverageandBar(false))}    className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/nlbmh4kh/buzlar-portakal.png" alt="" />
                </div>
                <div onClick={() => {navigate("/Beverage")}} onMouseEnter={() => (setTeaCoffee(true))} onMouseLeave={() => (setTeaCoffee(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/yrxeybpa/kahve_makinasi.svg" alt="" />
                </div>


                <div onClick={() => {navigate("/Pizzeria")}} onMouseEnter={() => (setMainKitchenEquiment(true))} onMouseLeave={() => (setMainKitchenEquiment(false))} className='flex flex-col justify-center items-center'  >
                <img className='w-20 h-12	' src="https://ozti.com/media/hbpeulq3/ada-mutfak.svg" alt="" />

                </div>

<div onClick={() => {navigate("/Ovens")}} onMouseEnter={() => (setMainKitchenEquiment(true))} onMouseLeave={() => (setMainKitchenEquiment(false))} className='flex flex-col justify-center items-center'  >
                    <img className='w-20 h-12	' src="https://ozti.com/media/mhtltgf5/ocak.svg" alt="" />

                </div>
                <div onClick={() => {navigate("/Utensils")}} onMouseEnter={() => (setDesktopandPresentationEquiment(true))} onMouseLeave={() => (setDesktopandPresentationEquiment(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/odhfgpj3/spoon.svg" alt="" />
                </div>



            </Carousel>

        </div>


    );
};


export default StockSlider;

// 
