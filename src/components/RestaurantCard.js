import {useContext} from "react";
import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";
// import "../styles/Menu.css";

import StarsIcon from '@mui/icons-material/Stars';
import { blueGrey } from "@mui/material/colors";

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

    const{name,cuisines,avgRating,cloudinaryImageId,aggregatedDiscountInfoV3,costForTwo,totalRatingsString}=resName.info;

    // console.log(costForTwoMeassage,"lheader");

  
    // const[name]=resName.info;
    // const[info]=resName.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
    // we did destructuring here .....

    // 10 11 12 1 2 3 4 5 6 7 
    // 1  2  3  4 5 6 7 8 9 
  
    return(
      // <div className="container">
      // <div className="menu">

      <div style={{
        display:"flex",
        // border:"2px solid black",
        // margin:"42px",
        margin:"5%",

        marginLeft:"4rem",
        onMouseOver:"green"
        // hover:""
        
        }}>
      <div style={{
        border:"2px solid black",
        // height:"490px",

        height:"500px",
        width:"320px",
        background:"transprent",
        backgroundColor:"lightgrey",
        padding:"2%",
        borderRadius:"3%",

        textDecorationLine:"none"
        // padding:"5px"

        // height:"100em",
        // width:"70%",
        // width:" 104em"
        // margin:"2%"

      }}
      // className="menuList"
      //  key={resName.info.id}
       >
        {/* k */}
        
        <img 
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />

           {/* {aggregatedDiscountInfoV3?.header===undefined?null:
           <h2 style={{color:"white"}}>{aggregatedDiscountInfoV3?.header + " " +aggregatedDiscountInfoV3?.subHeader}</h2>
           } */}
        {/* <h1 style={{color:"white"}}>{aggregatedDiscountInfoV3?.header +" "+aggregatedDiscountInfoV3?.subHeader}</h1> */}

 {/* <h3>{resName.info.id}</h3>  */}
 <div class="container2">
        <h3 style={{color:"black"}}>{name}</h3> 
        <StarsIcon style={{color:"green"}}/>
      
        <h4 style={{color:"black"}}>{avgRating}</h4> 
        <h4 style={{color:"#6e5f5f"}}>{cuisines.join(",  ")}</h4>

        <h2 style={{color:"black"}}>{costForTwo.replace("for two", " ")}</h2>
            <h4 style={{color:"#6e5f5f"}}>{totalRatingsString} ratings</h4>
         {/* <h4>{cuisines}</h4>  */}
        {/* <h4>{avgRating}</h4>  */}
</div>
        {/* <h4> USER:++{loggedInUser}</h4> */}
      
      </div>
      </div>

      // </div>
    )
  };

  // Higer Order Component

  // Input => RestaurantCard => RestaurantCardPromoted 

  export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
      return(
        <div>
          {/* <label> Promoted </label> */}

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