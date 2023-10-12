

import './App.css';

const Header=()=>{
  // Header will have -- Logo and Nav Items
  return(
    <div className="header">
    {/* <div style={{display:"flex"}}> */}

    <div className="logo-container">
      <img style={{height:"90px",width:"140px"}} alt="img" src="https://static.vecteezy.com/system/resources/previews/011/468/885/original/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"/>
    </div>

    <div className="nav-items">
      {/* nav items is list of some items */}
      <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart </li>
      </ul>

    </div>

   </div>
  )
}

// Restaurant card component
// what will my restaurant card have - it should have img , name of the restaurant, start rating nd all......
let obj = {"a": 1, 'b': 2, 'c': 3};
console.log(obj.a)
// console.log(resObj.data.);
const resObj={
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  // "data": {
  //   "type": "restaurant",
    "data": {
      "type": "F",
      "id": "425",
      "name": "Hotel Empire",
      "uuid": "79848f6e-cd46-4b74-b127-d1fc3af3256c",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "",
      "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 0,
      "slugs": {
        "restaurant": "hotel-empire-5th-block-koramangala",
        "city": "Bangalore"
      },
      "cityState": "1",
      "address": "",
      "locality": "Koramangala",
      "parentId": 475,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          
        ],
        "descriptionList": [
          
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "BASE_TIME",
            "fee": 0,
            "message": ""
          },
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7796950~p=1~eid=00000189-d98c-5c9d-229e-9ee900770116~srvts=1691572001949~78798",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.3 kms",
      "hasSurge": false,
      "cta": {
        "link": "swiggy://menu?restaurant_id=425",
        "type": "DEEPLINK",
        "text": "RESTAURANT_MENU"
      },
      "sla": {
        "restaurantId": "",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 0,
        "lastMileDistance": 1.3,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  // },
  // "parentWidget": false
};
console.log(resObj.data.sla.maxDeliveryTime,"sla");
// {
//   resObj.map((res)=>console.log(res,"mp"));
// }

const RestaurantCard=(props)=>{
  // console.log(props,"props");
  const{resName}=props;

  console.log(resName.data.avgRating,"props res");
  // console.log(props.cuisine,"props");
  return(
    <div className="res-card">
      <img 
      className="res-logo"
      alt="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resName.data.cloudinaryImageId}
      />
      <h3>{resName.data.name}</h3>

      <h4>{resName.data.cuisines.join(", ")}</h4>

      <h4>{resName.data.avgRating}</h4>
      <h4>{resObj.data.sla.maxDeliveryTime}</h4>
      {/* <h4>{kk}</h4> */}
    </div>
  )
}

const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      {/* this resturant container contains lots of restaurant cards */}

    <div className="res-container">
      <RestaurantCard 
      // resName="Meghna Foods"
      resName={resObj}
      // cuisine={resObj.data.data.cuisines}
      />

       {/* <RestaurantCard
        resName="KFC"
        cuisine="Dosa"
       /> */}
     
    </div>


    </div>
  )
}
const AppLayout=()=>{
  // Header-- it will be a new component.
  // Body
  // Footer
  return(
    <div className="app">
      <Header/>
      <Body/>
  
    </div>
  )
}
export default AppLayout;

// { AppLayout } is a root level component...
// that why we have to export this component not header bcz 
// the header component is in the AppLayout.