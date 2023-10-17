import React from "react";
import Sidebaruser from "./sidebarUser";
import { useEffect, useState } from "react";
import axios from "axios";

const AddProductuser = () => {
  const [Email, setEmail] = useState();
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [Description, setDescription] = useState();
  const [Input, setInput] = useState();
  const [category, Setcategory] = useState();
  const [subcategory, SetSubcategory] = useState();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [subcategoryError, SetSubcategoryError] = useState();

  const [refrigeration, setRefrigeration] = useState(false);

  const getInitialState = () => {
    const value = "Shirt";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    alert("Product Added Suceesfully ");
    console.log(Email);
    console.log(Name);
    console.log(Price);
    console.log(value);
    console.log(subcategory);
    console.log(Description);
if (!subcategory || subcategory == "Select a Sub category") {
  SetSubcategory("");
  SetSubcategoryError("Please Enter a Sub Category");
}

    if (!selectedFiles || selectedFiles.length === 0) {
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]);
    }

    formData.append("email", Email);
    formData.append("name", Name);
    formData.append("price", Price);
    formData.append("value", value);
    formData.append("subcategory", subcategory);
    formData.append("description", Description);

    try {
      const response = await axios.post(
        "http://localhost:8000/productrequest",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // Handle response from backend if needed
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div>
      <Sidebaruser />
      <div className="flex flex-wrap justify-center">
        <div class="flex flex-col  mt-4 items-center h-screen w-3/4">
          {/* <h2 class="text-center text-black font-bold text-2xl uppercase dasdsd mb-10">Add Product </h2> */}
          <div class="asdasdasdasdasdas  p-6  rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">


          <div class="mb-5">
              <label for="email" class="block mb-2 font-bold text-white">email</label>
              <input onChange={(e) => {
                setEmail(e.target.value)
              }} type="text" id="email" name="email" placeholder="Enter registered email" class="border border-gray-300 shadow p-3 w-full rounded mb-" />
            </div>
            
            <div class="mb-5">
              <label for="name" class="block mb-2 font-bold text-white">
                Product Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                name="name"
                placeholder="Enter Prouct Name ."
                class="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div class="mb-5">
              <label for="twitter" class="block mb-2 font-bold text-white">
                Product Price
              </label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                required="true"
                id="twitter"
                name="twitter"
                placeholder="Enter Product Price"
                class="border  border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>
            {/*
            <div class="mb-5">
            <label for="twitter" class="block mb-2 font-bold text-white">
                Category
              </label>
              <input
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type="text"
                placeholder="Enter Product Category"
                class="border  border-gray-300 shadow p-3 w-full rounded mb-"
              />
               <input     type="text" required='true'  id="twitter" onClick={(e)=>{setValue(e.target.value)}} name="twitter" placeholder="Enter Product Category" class=""/> 
            </div>
*/}
            <div class="mb-5">
            <label for="twitter" class="block mb-2 font-bold text-white">
                Category
              </label>
            <select id="category" name='category' onChange={(e) => {setValue(e.target.value);}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select a category</option>
        <option value="Refrigeration" >Refrigeration</option>
        <option value="Diswashing">Diswashing</option>
        <option value="Appliances">Appliances</option>
        <option value="Stainless Steel">Stainless Steel</option>
        <option value="Cooking">Cooking</option>
        <option value="Food prep">Food prep</option>
        <option value="Beverage Equipment">Beverage Equipment</option>
        <option value="Pizzeria & Grill">Pizzeria & Grill</option>
        <option value="Oven & Steamers">Oven & Steamers</option>
        <option value="Utensils">Utensils</option>

</select>
              </div>

              <div class="mb-5">
            <label for="twitter" class="block mb-2 font-bold text-white">
                Sub category
              </label>
        {value === "Refrigeration" && (
                      <select id="subcategory" name='subgategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Beer Fridges">Beer Fridges</option>
        <option value="Back Bar Refrigerators">Back Bar Refrigerators</option>
        <option value="Mini Fridges">Mini Fridges</option>
        <option value="Bottle Coolers">Bottle Coolers</option>
        <option value="Wine Coolers">Wine Coolers</option>
        <option value="Undercounter Fridges">Undercounter Fridges</option>
        <option value="Glass Door Fridges">Glass Door Fridges</option>
        <option value="Undercounter Freezers">Undercounter Freezers</option>
        <option value="Ice Makers">Ice Makers</option>
        <option value="Upright Fridges">Upright Fridges</option>
        <option value="Upright Freezers">Upright Freezers</option>
        <option value="Chest Freezers">Chest Freezers</option>
        <option value="Refrigerated Displays & Merchandisers">Refrigerated Displays & Merchandisers</option>
        <option value="Cake Counters & Patisserie Showcases">Cake Counters & Patisserie Showcases</option>
        <option value="Serve Over Counters & Deli Display Refrigerators">Serve Over Counters & Deli Display Refrigerators</option>
        <option value="Counter Fridges">Counter Fridges</option>
        <option value="Dry Aging Refrigerators">Dry Aging Refrigerators</option>
        <option value="Refrigerated COunters / Chef Bases">Low Refrigerated COunters / Chef Bases</option>
        <option value="Counter Freezers">Counter Freezers</option>
        <option value="Refrigerated Pizza Tables">Refrigerated Pizza Tables</option>
        <option value="Salad & Sandwitch Preparation Counters">Salad & Sandwitch Preparation Counters</option>
        <option value="Saladettes">Saladettes</option>
        <option value="Display Refrigerated Counters">Display Refrigerated Counters</option>
        <option value="Bakery Refrigeration">Bakery Refrigeration</option>
        <option value="Refrigerated Prep Tops">Refrigerated Prep Tops</option>
        <option value="Sushi & Tapas Display Showcases">Sushi & Tapas Display Showcases</option>
        <option value="Multi Deck Displays & Refrigerated Wall Cabinets">Multi Deck Displays & Refrigerated Wall Cabinets</option>
        <option value="Supermarket Refrigerators">Supermarket Refrigerators</option>
        <option value="Blast Chillers & Flash Freezers">Blast Chillers & Flash Freezers</option>
        <option value="Cold Rooms & Freezer Rooms">Cold Rooms & Freezer Rooms</option>
        <option value="Display Refrigeration">Display Refrigeration</option>
        </select>
        )}

{value === "Diswashing" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Glasswashers">Glasswashers</option>
        <option value="Undercounter Dishwashers">Undercounter Dishwashers</option>
        <option value="Pass Through Dishwashers">Pass Through Dishwashers</option>
        <option value="Dishwasher Tables">Dishwasher Tables</option>
        <option value="Cuttlery & Glass Polishers">Cuttlery & Glass Polishers</option>
        <option value="Shower Unit & Faucets">Shower Unit & Faucets</option>
        <option value="Dishwasher Racks">Dishwasher Racks</option>
        </select>
        )}

{value === "Appliances" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Table Top Fryers">Table Top Fryers</option>
        <option value="Countertop Mixers">Countertop Mixers</option>
        <option value="Griddles">Griddles</option>
        <option value="Microwaves">Microwaves</option>
        <option value="Shower Unit & Faucets">Panini / Contact Grills</option>
        <option value="Roller Grills">Roller Grills</option>
        <option value="Food Warming">Food Warming</option>
        <option value="Hotdog Warmers">Hotdog Warmers</option>
        <option value="Heated Merchandisers / Displays">Heated Merchandisers / Displays</option>
        <option value="Induction Cookers">Induction Cookers</option>
        <option value="Shower Unit & Faucets">Table Top Bains Marie & Hotpots</option>
        <option value="Soup Kettles">Soup Kettles</option>
        <option value="Rice Cookers">Rice Cookers</option>
        <option value="Salamanders">Salamanders</option>
        <option value="Toasters">Toasters</option>
        <option value="Pressure Cookers">Pressure Cookers</option>
        <option value="Sous Vide & Slow Cookers">Sous Vide & Slow Cookers</option>
        <option value="Waffle Makers">Waffle Makers</option>
        <option value="Knife Sterilisers">Knife Sterilisers</option>
        <option value="Egg Boilers">Egg Boilers</option>
        <option value="Popcorn Machines">Popcorn Machines</option>
        <option value="Candy Floss Machines">Candy Floss Machines</option>
        <option value="Insect Killers">Insect Killers</option>

        </select>
        )}

{value === "Stainless Steel" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Work Tables">Work Tables</option>
        <option value="Sink Units with 1 & 2 Bowls">Sink Units with 1 & 2 Bowls</option>
        <option value="Sink Units with 3 Bowls">Sink Units with 3 Bowls</option>
        <option value="Sink Top Storage Cupboards">Sink Top Storage Cupboards</option>
        <option value="Sink Tops">Sink Tops</option>
        <option value="Sink Units For Dishwashers">Sink Units For Dishwashers</option>
        <option value="Wall Shelves">Wall Shelves</option>
        <option value="Wash Basin & Hand Sinks">Wash Basin & Hand Sinks</option>
        <option value="Bar Sinks">Bar Sinks</option>
        <option value="Base Storage Cupboards">Base Storage Cupboards</option>
        <option value="Ice Bins">Ice Bins</option>
        <option value="Plain Top Hot Cupboards">Plain Top Hot Cupboards</option>
        <option value="Cabinet Storage Cupboards">Cabinet Storage Cupboards</option>
        <option value="Work Stations">Work Stations</option>
        <option value="Wall Cupboards">Wall Cupboards</option>
        <option value="Gantries & Chefs Passes">Gantries & Chefs Passes</option>
        <option value="Extraction Canopies">Extraction Canopies</option>
        <option value="Grease Traps & Fat Seperators">Grease Traps & Fat Seperators</option>
        <option value="Shelving Units">Shelving Units</option>
        <option value="Equipment Stands">Equipment Stands</option>
        <option value="Waste Bins">Waste Bins</option>
        <option value="Trolleys & Carts">Trolleys & Carts</option>
        <option value="Stainless Steel GN Pans & Containers">Stainless Steel GN Pans & Containers</option>
        </select>
        )}

{value === "Cooking" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Boiling Tops & Hobs">Boiling Tops & Hobs</option>
        <option value="Induction">Induction</option>
        <option value="Range Ovens & Floor Standing Cookers">Range Ovens & Floor Standing Cookers</option>
        <option value="Bains Marie & Hotpots">Bains Marie & Hotpots</option>
        <option value="Chargrills & Gas Grills">Chargrills & Gas Grills</option>
        <option value="BBQ Grills">BBQ Grills</option>
        <option value="Chip Scuttles">Chip Scuttles</option>
        <option value="Fryers">Fryers</option>
        <option value="Griddles">Griddles</option>
        <option value="Pasta Boilers">Pasta Boilers</option>
        <option value="Tilting Bratt Pans">Tilting Bratt Pans</option>
        <option value="Wok Stoves">Wok Stoves</option>
        <option value="Bases & Neutral Units">Bases & Neutral Units</option>
        <option value="Modular Cooking Ranges">Modular Cooking Ranges</option>
        </select>
        )}

{value === "Food prep" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Planetary Mixers">Planetary Mixers</option>
        <option value="Spiral Mixers & Dough Kneaders">Spiral Mixers & Dough Kneaders</option>
        <option value="Vegetable Prep Machines">Vegetable Prep Machines</option>
        <option value="Hand Mixers & immersion Blenders">Hand Mixers & immersion Blenders</option>
        <option value="Meat Mincers">Meat Mincers</option>
        <option value="Meat Slicers">Meat Slicers</option>
        <option value="Bone Saw Machines">Bone Saw Machines</option>
        <option value="Sausage Stuffers">Sausage Stuffers</option>
        <option value="Potato peelers">Potato peelers</option>
        <option value="Bread Slicers">Bread Slicers</option>
        <option value="Vacuum Machines">Vacuum Machines</option>
        <option value="Hamburger Presses">Hamburger Presses</option>
        <option value="Bases & Neutral Units">Bases & Neutral Units</option>
        <option value="Modular Cooking Ranges">Modular Cooking Ranges</option>
        </select>
        )}

{value === "Beverage Equipment" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Ice Cream & Frozen Yoghurt Machines">Ice Cream & Frozen Yoghurt Machines</option>
        <option value="Juice Dispensers">Juice Dispensers</option>
        <option value="Juicer Machines">Juicer Machines</option>
        <option value="Hand Mixers & immersion Blenders">Hand Mixers & immersion Blenders</option>
        <option value="Slush Machines">Slush Machines</option>
        <option value="Bar Blenders">Bar Blenders</option>
        <option value="Milshakes & Bar Mixers">Milshakes & Bar Mixers</option>
        <option value="Espresso Coffee Machines">Espresso Coffee Machines</option>
        <option value="Filter Coffee Machines">Filter Coffee Machines</option>
        <option value="Coffee Grinders">Coffee Grinders</option>
        <option value="Percolators & Coffee Urns">Percolators & Coffee Urns</option>
        <option value="Water Boilers & Hot Water Dispensers">Water Boilers & Hot Water Dispensers</option>
        <option value="Chocolate Machines">Chocolate Machines</option>
        <option value="Cup Warmers">Cup Warmers</option>
        </select>
        )}

{value === "Pizzeria & Grill" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Pizza Ovens">Pizza Ovens</option>
        <option value="Pizza Prep Counters">Pizza Prep Counters</option>
        <option value="Dough Kneaders & Mixers">Dough Kneaders & Mixers</option>
        <option value="Gyros Donar Kebab Grills">Gyros Donar Kebab Grills</option>
        <option value="Planetary Mixers">Planetary Mixers</option>
        <option value="Rotisseries Ovens">Rotisseries Ovens</option>
        <option value="Charcoal Grills">Charcoal Grills</option>
        <option value="Pita Ovens  / Salamander Grills">Pita Ovens  / Salamander Grills</option>
        <option value="Chicken Warmers">Chicken Warmers</option>
        <option value="Dough Rollers & Dough Sheeters">Dough Rollers & Dough Sheeters</option>
        <option value="Pizza Storage & Transport">Pizza Storage & Transport</option>
        <option value="Pizza Utensils">Pizza Utensils</option>
        </select>
        )}

{value === "Oven & Steamers" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Electric Convection Ovens Manual Controls">Electric Convection Ovens Manual Controls</option>
        <option value="Electric Combi Steamers Manual Controls">Electric Combi Steamers Manual Controls</option>
        <option value="Electric Combi Steamers Digital Controls">Electric Combi Steamers Digital Controls</option>
        <option value="Electric Bakery Ovens">Electric Bakery Ovens</option>
        <option value="Air Fryers">Air Fryers</option>
        <option value="Mini Ovens">Mini Ovens</option>
        <option value="Proofers, Proofing Ovens & Dehydrators">Proofers, Proofing Ovens & Dehydrators</option>
        <option value="Potato Ovens">Potato Ovens</option>
        <option value="Rotisseries Ovens">Rotisseries Ovens</option>
        <option value="Microwave Ovens">Microwave Ovens</option>
        <option value="Modular Cooking Ovens">Modular Cooking Ovens</option>
        <option value="Oven Trays & Grids">Oven Trays & Grids</option>
        </select>
        )}

{value === "Utensils" && (
        <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Kitchen Utensils">Kitchen Utensils</option>
        <option value="Pots & Pans">Pots & Pans</option>
        <option value="Holders & Trays">Holders & Trays</option>
        <option value="Dispensers, Squeeze Bottles & Sauce Boats">Dispensers, Squeeze Bottles & Sauce Boats</option>
        <option value="Jugs & Carafes">Jugs & Carafes</option>
        <option value="Cleaning Equipments">Cleaning Equipments</option>
        <option value="Food Containers">Food Containers</option>
        <option value="Glass Holders">Glass Holders</option>
        <option value="Tab Grabbers & Bill Holders">Tab Grabbers & Bill Holders</option>
        <option value="GN Containers">GN Containers</option>

        </select>
        )}
              </div>


              {subcategoryError && <p className="error-message">{subcategoryError}</p>} 
            <div class="mb-5">
              <label for="twitter" class="block mb-2 font-bold text-white">
                Description
              </label>
              {/* <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." /> */}
              <textarea
                style={{ height: "100px" }}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <input type="file" onChange={handleFileChange} />

            <button
              onClick={handleUpload}
              class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
            >
              Add Product{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductuser;
