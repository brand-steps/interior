// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pricep , setPricep] = useState('');
  const [description, setDescription] = useState('');
  const [image , setImage ] = useState(''); 
  const [category , setcategory ] = useState(''); 
  const [quantityProduct  , setQuantityProduct ] = useState(''); 

  const [color , setcolor ] = useState(''); 
  const [material, setmaterial] = useState();
  const [capacity, setCapacity] = useState();
  const [shelves, setshelves] = useState();
  const [lid, setlid] = useState();
  const [lightening, setlightening] = useState();
  const [level, setlevel] = useState();
  const [door, setdoor] = useState();
  const [Width, setWidth] = useState();
  const [depth, setDepth] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [consumption, setconsumption] = useState();
  const [supply, setsupply] = useState();
  const [power, setPower] = useState();
  const [temperature, settemperature] = useState();
  const [refrigerant, setrefrigerant] = useState();
  const [cooling, setcooling] = useState();
  const [warranty, setwarranty] = useState();

    //dishwashing
    const [castors, setcastors] = useState();
    const [tray, settray] = useState();
    const [pressure, setpressure] = useState();
    const [production, setproduction] = useState();
    const [innerheight, setinnerheight] = useState();
    const [basket, setbasket] = useState();
    const [programs, setprograms] = useState();
    const [volume, setvolume] = useState();
    const [cycles, setcycles] = useState();
    const [pump, setpump] = useState();
    const [rinsepower, setrinsepower] = useState();
    const [dispenser, setdispenser] = useState();
    const [rinsefunc, setrinsefunc] = useState();
    const [volumerinse, setvolumerinse] = useState();

     //appliance
  const [version, setversion] = useState();
  const [tap, settap] = useState();
  const [output, setoutput] = useState();

   //stanless steel
   const [feet, setfeet] = useState();
   const [bottomshelf, setbottomshelf] = useState();
   const [bowlpos, setbowlpos] = useState();
   const [sinkbowl, setsinkbowl] = useState();
   const [upstand, setupstand] = useState();
   const [assembly, setassembly] = useState();

    //Cooking
  const [timer, settimer] = useState();
  const [controls, setcontrols] = useState();

   //food prep
   const [rpm, setrpm] = useState();
   const [speeds, setspeeds] = useState();
   const [included, setincluded] = useState();
   const [weldingbar, setweldingbar] = useState();

   //Beverage equipment
  const [bin, setbin] = useState();
  const [waterconnection, setwaterconnection] = useState();
  const [type, settype] = useState();

  //pizza & grills
  const [lock, setlock] = useState();
  const [worksurface, setworksurface] = useState();
  const [gasconsumption, setgasconsumption] = useState();
  const [defrost, setdefrost] = useState();

    //ovens
    const [steam, setsteam] = useState();

      //utensils
  const [pieces, setpieces] = useState();
  const [diameter, setdiameter] = useState();
  const [length, setlength] = useState();
  
  // Add more state variables using useState

  return (
    <MyContext.Provider
      value={{
        email, setEmail,
        name, setName,
        pricep  , setPricep,
        description , setDescription , 
        image , setImage, 
        quantityProduct , setQuantityProduct, 
        category, setcategory,
        color , setcolor,
        material , setmaterial ,
        capacity , setCapacity ,
        shelves , setshelves,
        lid , setlid,
        lightening , setlightening ,
        level , setlevel,
        door , setdoor,
        Width , setWidth,
        depth , setDepth,
        height , setHeight,
        weight , setWeight,
        consumption , setconsumption,
        supply , setsupply, 
        power, setPower,
        temperature , settemperature,
        refrigerant , setrefrigerant,
        cooling , setcooling,
        warranty, setwarranty,
        castors, setcastors,
        tray, settray,
        pressure, setpressure,
        production, setproduction,
        innerheight, setinnerheight,
        basket, setbasket,
        programs, setprograms,
        volume, setvolume,
        cycles, setcycles,
        pump, setpump,
        rinsepower, setrinsepower,
        dispenser, setdispenser,
        rinsefunc, setrinsefunc,
        volumerinse, setvolumerinse,
        version, setversion,
        tap, settap,
        output, setoutput,
        feet, setfeet,
        bottomshelf, setbottomshelf,
        bowlpos, setbowlpos,
        sinkbowl, setsinkbowl,
        upstand, setupstand,
        assembly, setassembly,
        timer, settimer,
        controls, setcontrols,
        rpm, setrpm,
        speeds , setspeeds,
        included , setincluded,
        weldingbar , setweldingbar,
        bin , setbin,
        waterconnection, setwaterconnection,
        type , settype,
        lock , setlock,
        worksurface , setworksurface,
        gasconsumption, setgasconsumption,
        defrost , setdefrost,
        steam , setsteam,
        pieces, setpieces,
        diameter , setdiameter,
        length , setlength,

        
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
