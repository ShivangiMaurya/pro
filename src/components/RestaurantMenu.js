

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{

    // const[resInfo , setResInfo]=useState();

    const[data, setData]= useState([]);

   useEffect(()=>{
    fetchMenu();
   },[])

const fetchMenu = async () =>{
    const data= await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=375041&catalog_qa=undefined&submitAction=ENTER"
    );
    const json= await data.json();

    console.log(json ,"Json Data");
    //  setData(json.data);

    //  setData(JSON.parse(JSON.stringify(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)));
  setData("ll");
      console.log(data," DATA");

    console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards," json Data");

}

// if(resInfo===null) return "kk";

    return(
        <div>
                     shivi

        </div>
    )
}
export default RestaurantMenu;