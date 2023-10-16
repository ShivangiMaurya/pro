
import resList from "../utils/mockData";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Front from "./Front";
import PizzaComp from "./PizzaComp";
import ResImage from "./ResImage";

const Body=()=>{
//  state variable
const[listOfRestaurants,setlistOfRestaurants]= useState([]);

const[filteredRestaurant,setFilteredRestaurant]=useState([]);

const[searchText,setSearchText]=useState("f");
// const[data,setData]= useState([]);
 
  // console.log(listOfRestaurants , "shivangi");

  //  #########  HIGER ORDER COMPONENT ###############

    const RestaurantCardPromoted =withPromotedLabel(RestaurantCard);

    // it will return a restaurant card which has label inside it. 
    





  console.log(listOfRestaurants[0]?.info?.aggregatedDiscountInfoV3
    , "shivangi");
  useEffect(()=>{
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData= async()=>{

      const data=  await fetch(
      
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    
        );

    // fetch will return nd how do we resolve it either by .then or async await
    const json= await data.json();
    // Optional Chaining
     setlistOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

     setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  console.log("Body rendered");

  // Conditional Rendering:- Rendering on the bases of condition.

  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }
 

      // first get onlineStatus it will give me the useOnlineStatus

      const onlineStatus =useOnlineStatus();

      // console.log(onlineStatus);


      // if( onlineStatus === false)console.log("lll")
      if( onlineStatus === false) return (
        <h1> Looks like you are offline!! Plz Check your internet connection.. </h1>
        // console.log("lll")
      )
      

      // console.log("online!!!!!!!!!!!!!!!!!!!!");

    return listOfRestaurants.length===0?<Shimmer/>:
    (
      <div className="body">
        {/* <Front/> */}
        <ResImage/>
        {/* <PizzaComp/> */}
          {/* {console.log("ret")} */}


          {/* <div className="filter"> */}
        {/* <div className="search"> */}

       <div style={{
        // display:"inline-block",
      //  border:"2px solid black",
       marginLeft:"30%",
       marginTop:"2%",
       marginBottom:"3%",
       padding:"20px"
       
       }}>
        <div style={{
          // padding:"5px", 
        // justifyContent:"center",
        alignItems:"center"}}>

          <input type="text" 
          className="search-box" 
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value)
          }}
          
          />


          <button

// #bdb7b7
             style={{
              padding:"3px",
              backgroundColor:"green",
              padding: "11px 35px",
              textAlign:"center",
              borderRadius:"5px",
              // background-color: #04AA6D;
              color: "lightgrey",
              // padding: 12px 20px;
              // border: none;
              // border-radius: 4px;
              // cursor: pointer;
              // float: right;
             }}


          onClick={()=>{
            console.log(searchText);

            

            // const filteredRestaurant=listOfRestaurants.filter((res)=>res?.info?.name === searchText)

        //   this is the case insensitive search...

            const filteredRestaurant=listOfRestaurants.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))

            // setlistOfRestaurants(filteredRestaurant);
            setFilteredRestaurant(filteredRestaurant);

            if(searchText===""){
              setFilteredRestaurant([]);
            }

          }} >  Search </button>
        </div>
    </div>
   
        {/* this resturant container contains lots of restaurant cards */}
  
      <div className="res-container">
  {/* these list item should be uniquely represented... */}

{/* How will i make this card clickable... */}

  {
   filteredRestaurant.map((restaurantObj,index)=>
    (
          <div
          // style={{backgroundColor:"black"}}
          
          key={restaurantObj.info.id}>
       <Link style={{ textDecoration: 'none' }} to={"/restaurants/" + restaurantObj.info.id }>

        {/* If the restaurant is promoted then add a promoted label to it === IN AKSHY CASE */}

        {/*if there is any offer then show that offer on the card === IN MY CASE   */}

             { restaurantObj?.info?.aggregatedDiscountInfoV3?.header===undefined ? 
              <RestaurantCard resName={restaurantObj}/>:<RestaurantCardPromoted resName={restaurantObj}/>
             }
               {/* <RestaurantCard  
                 resName={restaurantObj}
                /> */}



       </Link>
</div>
    
    )
    
    )
  }    
 </div>
      </div>
    )
  }

  export default Body;