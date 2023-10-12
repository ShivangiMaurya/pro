
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const ResMenu=()=>{

    const[showIndex , setShowIndex] = useState(null);
    // I want to pass this [ showIndex ] to my childeren.

    // so on the click of that, how can i alter my { showIndex }.[ In RestaurantCategory ]

    // If the showIndex is zero(0) then first will be open. 
    // If the showIndex is zero(1) then second will be open. 
    


    const {restaurantId} = useParams();

    const dummyData = "I am Doremon!!!!!!!!";


    // ##############  MOST IMPORTANT PART   ##################

    // param me , we get this object {restaurantId: '25620'} 'params' 
// then we have to destructure it, so put { restaurantId }
    console.log(restaurantId , "params");
    // object me key ka perfect name dalna 
    console.log("log");

    const products = useRestaurantMenu(restaurantId);
//   yeh products ka name same [jo state varible ka h useResMenu m] rakhe ya kuch or bhi rakh skte hai..


    console.log(products , "resMenu Prosucts argument ")

    //   1:38 
    //   1:37   ==== 3 hr 20 min
    
    //   3:08 
    //    2:39  ==== 6 hr 


      if(products===null) return <li>shivangi</li>

      console.log(products.cards[0].card.card.info);


      const{name , cuisines , costForTwoMeassage, totalRatingsString }=products.cards[0].card.card.info;

      console.log(totalRatingsString,"ratimgs");


      const {itemCards}=products?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
    //    console.log(itemCards, "itemCards");

    //    console.log(products?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards, "Cards");
        
    
    const categories=products?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
       filter((data)=>data?.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        
       console.log(categories[0]?.card?.card?.title,"CATEGORIES!!!!!!!!!");

    //    categories.map((data)=>console.log(data?.card?.card?.title,"categories!!!!!"))

   
// console.log(products?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info, "Products");
    
 return(
        <div style={{textAlign:"center"}}>
            <h1>{name}</h1>
            <h1>{cuisines}</h1>

                 {/* {cuisines.join(",")} - {costForTwoMeassage} */}
           
            <h1>{costForTwoMeassage}</h1>
            <h3>{totalRatingsString}</h3>

            {/* { categories.map((data)=>console.log(data?.card?.card?.title,"cat return!!"))} */}

            { categories.map((category,index)=>
            // first parameter is each item from this map.and second is index, this is how you get the index.
                //   {console.log("CLIKED!!!!!!!!")}
                // <div>
                //       {console.log(index,"CL!!!!!!!!")}
            <RestaurantCategory 
            key={category?.card?.card?.title}
            data={category?.card?.card}
            // showItems={index===1 && true}

            showItems={index === showIndex ? true : false }
            // so if i change { showIndex }, it will automatically update it.
       // so on the click of this, how can i alter my { showIndex }.

            setShowIndex={()=>setShowIndex(index)}

            dummy={dummyData}

            // I can pass my setShowIndex to my childeren 

            // showItems={true}

            // whatever i pass over here  [ showItems={false} ] should be followed 
            // ====>> so basically i am lifting my state up. 
             />

            //    </div>
            )}
          
            {/* for each category let me pass in a { props } which is known as [ "data" ], what data will be get 
                cardData, lets call it as {data}, data will be {category.card.card}      
            */}
        

      {/* {
           y r 
        6 7 8 9 10 11 12 1
          2 3 4  5 6 7 8 9  10 11 


          

         itemCards.map((mapData)=>console.log(mapData?.card?.info,"mapData!!!!!"))
      } */}
      
         </div>

    )
}
export default ResMenu;




// type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge filter
// main.9cf2548d5f4d693f2bf0.hot-update.js:70 type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel filter
// 17main.9cf2548d5f4d693f2bf0.hot-update.js:70 type.googleapis.com/swiggy.presentation.food.v2.ItemCategory filter
// main.9cf2548d5f4d693f2bf0.hot-update.js:70 type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo filter
// main.9cf2548d5f4d693f2bf0.hot-update.js:70 type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress filter