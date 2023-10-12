
// whenever you write a hook try to see the contract, we get the resId 
/*
 we ahve this hook restaurantMenu. what this hook is doing, what it is getting in the input 
 what it is getting in the output 
 -- what is the contract of that hook?

 -- tha contract of that hook is it get the restaurant ID 
now it has to fetch the data and return the restaurant information back to where that hook is being called from.
we take the restaurant ID and return that restaurant information. 
 
custom hook is just a utility function 

how do you fetch the data we fetch the data same way as how we use to fetch the data inside the component 
bcz its also a react, react is tracking the hook as well  
how? inside our useEffect.

*/

import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu=(resId)=>{

    console.log(resId , "resId !!!!!!!!!1");
    // fetchData
//  this variable is coming from my [ useState Hook ] 
    // const [ resInfo, setResInfo]= useState(null);

    const [ products, setProducts]= useState(null);

    console.log(products, "setprod !!!!!!!!!!!!!");
    
    useEffect(()=>{
           fetchData();
    }, []);
    
    const fetchData= async ()=>{
        const data= await fetch( MENU_API + resId );
        
        const json = await data.json();

        console.log(json ,"useRestaurantMenu JSONN  !!!!!!!!!!!!!!!")
        setProducts(json?.data);

        console.log(products ,"useRestaurantMenu !!!!!!!!!!!!!!!")
        //  setProducts(JSON.parse(JSON.stringify(json?.data))); 
    
    }

     return products;
    //  I have to return this data 
    /*
    resInfo is basically a local variable for this hook so just like we have state variable inside the component 
    so just like we have state variable inside components , we can create [state variable] inside your [hook] comp
    as well exactly the same way.


   --- so basically this useRestaurantMenu, all this logic of getting the data from the API 
       making an API call, getting the data, i have abstarcted all this logic, I have taken out all this logic
       form our main component into this hook 

       now restaurant menu does not have to worry about how i am getting the data
       it just needs to worry about this [ resId ] and passing the this resId and someHow magically resInfo will 
       get the restaurant informstion, it does not have to worry about what black magic is going behind the scence 
       inside it. 
       and our code looks much more cleaner and it is less number of line 







    */
}

export default useRestaurantMenu;
