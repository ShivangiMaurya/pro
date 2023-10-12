import {useContext} from "react";
import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{


  // I want to use { useContext }, this useContext comes from react and which { context }, I want to use,
  // I want to use { userContext }, lets extract loggedInuser from here. 

      const { loggedInUser}=useContext(UserContext)
 
    const{resName}=props;
  
    // const{name,cuisines,avgRating,cloudinaryImageId}=resName?.data.data;
    console.log(resName

      ,"resName");

      console.log(resName?.info?.aggregatedDiscountInfoV3?.header

        ,"resName");
        console.log(resName?.info?.aggregatedDiscountInfoV3?.subHeader

          ,"resName");

    const{name,cuisines,avgRating,cloudinaryImageId,aggregatedDiscountInfoV3}=resName.info;

    console.log(aggregatedDiscountInfoV3,"header");

  
    // const[name]=resName.info;
    // const[info]=resName.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
    // we did destructuring here .....

    // 10 11 12 1 2 3 4 5 6 7 
    // 1  2  3  4 5 6 7 8 9 
  
    return(
      <div className="res-card"
      //  key={resName.info.id}
       >
        {/* k */}
        
        <img 
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />

           {aggregatedDiscountInfoV3?.header===undefined?null:
           <h2 style={{color:"white"}}>{aggregatedDiscountInfoV3?.header + " " +aggregatedDiscountInfoV3?.subHeader}</h2>
           }
        {/* <h1 style={{color:"white"}}>{aggregatedDiscountInfoV3?.header +" "+aggregatedDiscountInfoV3?.subHeader}</h1> */}

 <h3>{resName.info.id}</h3> 
        <h3>{name}</h3> 
        <h4>{cuisines.join(",")}</h4>
         <h4>{cuisines}</h4> 
        <h4>{avgRating}</h4> 

        <h4> USER:++{loggedInUser}</h4>
      
      </div>
    )
  };

  // Higer Order Component

  // Input => RestaurantCard => RestaurantCardPromoted 

  export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
      return(
        <div>
          <label> Promoted </label>

          <RestaurantCard {...props}/>

        </div>
      )
    }
  }
/*
when we call withPromotedLabel it will return this

it will return to us this component.
==> we are passing this props to this component. we will have to pass the same data to a restaurant card 
{...props}, it will pass all the props that 

i recive{ in body comp [<RestaurantCardPromoted resName={restaurantObj}] }. 

 it will just passin to retaurnat card 

(props)=>{
      return(
        <div>
          <label> Promoted </label>

          <RestaurantCard {...props}/>

        </div>
      )
    }



*/


  export default RestaurantCard;