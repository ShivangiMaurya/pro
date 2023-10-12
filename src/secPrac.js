

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
const resObj= [
  {
    "cardType": "topCollection",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "topCollection",
      "subtype": "image",
      "data": {
        "displayName": "WELCOME50",
        "id": 78798,
        "count": 500,
        "identifier": "",
        "description": "",
        "webCollectionHeader": "",
        "webMastHead": "",
        "appMastHead": ""
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "667571",
        "name": "Popeyes",
        "uuid": "5fdc0488-c767-4322-83f4-f761e622253f",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "61f2bd5d86640a55419ffe358af97b03",
        "cuisines": [
          "American",
          "Burgers",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "popeyes-80-feet-road-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "80 feet Road",
        "parentId": 397044,
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
              "fee": 2700,
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
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
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
        "adTrackingID": "cid=7755283~p=1~eid=00000189-d9e6-a97a-231b-683500770159~srvts=1691577919866~78798",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.4 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=667571",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "lastMileTravel": 0,
          "lastMileDistance": 1.4,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "25620",
        "name": "KFC",
        "uuid": "19dd099d-636e-41b9-aaa3-1b9006fc8e1a",
        "city": "1",
        "area": "Ejipura",
        "totalRatingsString": "",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "kfc-intermediate-ring-road-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "Intermediate Ring Road",
        "parentId": 547,
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
              "fee": 4200,
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
          "totalFees": 4200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4200",
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
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=25620",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 0,
          "lastMileDistance": 0.4,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "307050",
        "name": "Call Me Chow",
        "uuid": "b9bf2a17-faf9-4e4a-a6a7-61197d4bafa0",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "soegobqsiqvhmkfvnnkj",
        "cuisines": [
          "Chinese",
          "Pan-Asian"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "call-me-chow-koramangala-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "8th Block",
        "parentId": 18560,
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
              "fee": 2700,
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
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
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
        "adTrackingID": "cid=7849423~p=3~eid=00000189-d9e6-a97a-231b-683700770312~srvts=1691577919866~78798",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.8 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=307050",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 0,
          "lastMileDistance": 1.8,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "50467",
        "name": "Bakingo",
        "uuid": "862dd21c-f679-431b-bba4-b5f9fd85e933",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "wle5xrryznnyrdoxlchz",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "bakingo-koramangala-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "1st Block",
        "parentId": 3818,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4200,
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
          "totalFees": 4200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4200",
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
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.1 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=50467",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0,
          "lastMileDistance": 2.1,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "185275",
        "name": "Mamagoto",
        "uuid": "acf4970f-bc43-474a-a87a-aaeb44eb89bf",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "",
        "cloudinaryImageId": "hngtja8xkjp49fu57wf7",
        "cuisines": [
          "Chinese",
          "Asian",
          "Pan-Asian",
          "Thai",
          "Oriental"
        ],
        "tags": [
          
        ],
        "costForTwo": 90000,
        "costForTwoString": "₹900 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "mamagoto-koramangala-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "Keb Layout",
        "parentId": 622,
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
              "fee": 4200,
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
          "totalFees": 4200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4200",
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
        "adTrackingID": "cid=7621224~p=4~eid=00000189-d9e6-a97a-231b-683800770458~srvts=1691577919866~78798",
        "badges": {
          "imageBased": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=185275",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 0,
          "lastMileDistance": 2.7,
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
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "269402",
        "name": "The Tea Brewery",
        "uuid": "3ccdecfb-bbc1-4217-beea-20eea779b337",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "v4s7ectlujr8325ejrnc",
        "cuisines": [
          "Beverages",
          "Snacks",
          "Bakery",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "the-tea-brewery-koramangala-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "1st Block",
        "parentId": 21147,
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
              "fee": 2700,
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
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
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
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "description": "",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=269402",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0,
          "lastMileDistance": 1.6,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.5",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "65797",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "uuid": "eb55093b-df3d-4d40-943e-d50a850218a5",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "r4ufflqojich0r29efvc",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "leon-grill-koramangala-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "Koramangala",
        "parentId": 371281,
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
              "fee": 2700,
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
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
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
        "adTrackingID": "cid=7841837~p=5~eid=00000189-d9e6-a97a-231b-683900770528~srvts=1691577919866~78798",
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
          "link": "swiggy://menu?restaurant_id=65797",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "lastMileTravel": 0,
          "lastMileDistance": 1.3,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "201224",
        "name": "Asha tiffins",
        "uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
        "city": "1",
        "area": "HSR Layout",
        "totalRatingsString": "",
        "cloudinaryImageId": "n15vckntsiboiod3gpco",
        "cuisines": [
          "Indian",
          "South Indian",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "asha-tiffins-hsr-hsr-2",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "7th Sector",
        "parentId": 236243,
        "unserviceable": false,
        "veg": true,
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
              "fee": 3900,
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
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
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
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=201224",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 0,
          "lastMileDistance": 4,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "690730",
        "name": "Omm Nom Nomm",
        "uuid": "e5263dc5-1d6a-41ae-b7ba-4c438362122c",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "0b6ccedf0af57a82ecea2910397bb947",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "omm-nom-nomm-koramangala-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "BTM Layout",
        "parentId": 21184,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4200,
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
          "totalFees": 4200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4200",
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
        "adTrackingID": "cid=7848073~p=6~eid=00000189-d9e6-a97a-231b-683a00770610~srvts=1691577919866~78798",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=690730",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 0,
          "lastMileDistance": 1.1,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.8",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "23678",
        "name": "McDonald's",
        "uuid": "ab6699fa-ffd9-4554-b68b-f111fc9b4cbb",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "mc-donalds-kormangala-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "5th Block",
        "parentId": 630,
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
              "fee": 2700,
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
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
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
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "description": "",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=23678",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "lastMileTravel": 0,
          "lastMileDistance": 1.3,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "730356",
        "name": "Cakewala",
        "uuid": "6dea10bd-aa92-4626-8aa9-7f0448383d3b",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "067d652383db484541c711794df16af0",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "cakewala-koramangala-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "Khb colony",
        "parentId": 3492,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700,
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
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
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
        "adTrackingID": "cid=7842783~p=7~eid=00000189-d9e6-a97a-231b-683b0077075f~srvts=1691577919866~78798",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=730356",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 0,
          "lastMileDistance": 1,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "5934",
        "name": "Burger King",
        "uuid": "ac56f2ac-71d3-4978-9513-b3aa68e25463",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "burger-king-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "7th Block",
        "parentId": 166,
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
              "fee": 2700,
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
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
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
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=5934",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 0,
          "lastMileDistance": 1.6,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "2072",
        "name": "Kota Kachori And Falahaar",
        "uuid": "5b5dd0e6-2318-45f3-809d-83282c59881a",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "3198495edc9215c39d001593cb9d6b10",
        "cuisines": [
          "North Indian",
          "Sweets",
          "Beverages",
          "Rajasthani",
          "Snacks",
          "Chaat",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "falahaar-kota-kachori-6th-block-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "7th Block",
        "parentId": 373582,
        "unserviceable": false,
        "veg": true,
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
              "fee": 2700,
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
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
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
        "adTrackingID": "cid=7847563~p=9~eid=00000189-d9e6-a97a-231b-683d0077097c~srvts=1691577919866~78798",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=2072",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 0,
          "lastMileDistance": 1.6,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "121836",
        "name": "Bob's Bar",
        "uuid": "30d4204e-01d4-4d41-af74-0050b2a05ef6",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "",
        "cloudinaryImageId": "z4c9ypvudgfmunfxsace",
        "cuisines": [
          "South Indian",
          "Biryani",
          "Desserts",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "bob39s-bar-koramangala",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "7th Block",
        "parentId": 10956,
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
              "fee": 2700,
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
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
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
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.3 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=121836",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0,
          "lastMileDistance": 2.3,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  }
]


// console.log(resObj.data.sla.maxDeliveryTime,"sla");

// console.log(resObj.data.data.name,"sla");
// {
//   resObj.map((res)=>console.log(res,"mp"));
// }

const RestaurantCard=(props)=>{
  // console.log(props,"props");
  // const{resName}=props;
  const{resName}=props;

  // console.log(resName[0].data.data.displayName,"props res");
  console.log(resName.data.data.name,"props res");
  // console.log(props.cuisine,"props");
  return(
    <div className="res-card">
      k
      <img 
      className="res-logo"
      alt="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resName.data.data.cloudinaryImageId}
      />
      <h3>{resName.data.data.name}</h3> 
      <h4>{resName.data.data.cuisines.join(", ")}</h4>
      <h4>{resName.data.data.avgRating}</h4>
      {/* <h4>{resObj.data.data.sla.maxDeliveryTime}</h4> */}
       {/* <h4>{resName.data.data.cuisines.join(", ")}</h4>
      <h4>{resName.data.data.avgRating}</h4>
    <h4>{resObj.data.data.sla.maxDeliveryTime}</h4> */}

 
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
   
      resName={resObj[1]}
      // resObj[1] that means array ka pehla object
      
     
      />

<RestaurantCard 
   
   resName={resObj[2]}
  
   />

<RestaurantCard 
   
   resName={resObj[3]}
  
   />

      
     
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