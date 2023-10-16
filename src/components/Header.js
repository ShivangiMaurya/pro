
import { useContext, useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export const Header=()=>{
    // Header will have -- Logo and Nav Items
    const[btnNameReact,setBtnNameReact]=useState("login");

    // let btnName="Login";
    console.log("Header");

    // SUBSCRIBING TO THE STORE USING A SELECTOR...

    // const cartItems = useSelector((store)=> store);
    // console.log(cartItems ,"redux val")

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems ,"redux val")

    const onlineStatus =useOnlineStatus();

    useEffect(()=>{
      console.log("useEffect called...");
    },[]);
    // it will only be called when the dependency changes..
    // if you have something as a dependency 

      // const data = useContext(UserContext);

      // console.log(data.loggedInUser,"User Context Data !!!!!" );

      //  I CAN EXTRACT { LOGGEDIN USER } FROM THIS DATA.

      const { loggedInUser} = useContext(UserContext);

      console.log( loggedInUser,"User Context Data !!!!!" );

      // so i want to use that context, i want to show the loggedin user info ?
      // How i can acces it.
      // i can access that piece of information using a react hook,
      // react gives us hook, we can use hook to access our context 
      // that hook name is, just like we have { useState }, there is something known as {useContext}.

      // TO CREATE A CONTEXT, IT IS { CREATECONTEXT }.
      // AND TO USE IT, WE HAVE SOMETHING KNOWN AS { USECONTEXT }.

      // I CAN USE THIS CONTEXT AND I CAN GET THIS DATA FROM CONTEXT, I'LL JUST DO A { USECONTEXT },
      // AND I WILL NOW PASS IN THIS { USERCONTEXT }, THIS USERCONTEXT COMES FROM OUR { USERCONTEXT FILE }.
      // SO THIS {USECONTEXT} IS A HOOK THAT COMES FROM REACT 

      // YOU CAN CREATE AS CONTEXT AS YOU WANT TO. AS MANY GLOBAL OBJECT YOU WANT TO.

      // YOU CAN CREATE MULTIPLE CONTEXT, SO WHATEVER CONTEXT YOU HAVE TO USE PASS IN { USECONTEXT }, AND YOU
      // GET THAT DATA FROM THAT { USERCONTEXT } OVER HERE. 

      // LET ME JUST LOG THIS DATA, AND SEE WHAT CAME 

         





    return(
      <div className="header">
      {/* <div style={{display:"flex"}}> */}
  
      <div className="logo-container">
        <img style={{height:"100px",width:"100px"}}
         alt="img" 
         src={LOGO_URL}/>
      </div>
  
      <div className="nav-items">
        {/* nav items is list of some items */}
        <ul>

          <li style={{color:"darkgrey"}}>Status:-</li>
         {onlineStatus ? <li  style={{color:"darkgrey"}}><CheckCircleIcon style={{color:"green"}}/></li>:<li  style={{color:"darkgrey"}}> <CancelIcon style={{color:"red"}}/> </li>}

         {/* %%%%%*/}

        <li style={{listStyle:"none",textDecoration:"none"}}>
          {/* <Link 
          style={{
            textDecoration:"none",
            color:"darkgrey"
        }}
          
          to="/front"> front</Link> */}

<Link 
          style={{
            textDecoration:"none",
            color:"darkgrey"
        }}
          
          to="/front"> Home</Link>
        </li>

         {/* %%%%%%% */}
          
        <li>

        {/* <Link 
         style={{
          textDecoration:"none",
          color:"darkgrey"
      }}
        to="/">Home</Link> */}

<Link 
         style={{
          textDecoration:"none",
          color:"darkgrey"
      }}
        to="/">Menu</Link>
         
        </li>

        {/* when you are using react and you want to route to some other page never ever use an anchor tag.
           bcz when i go to this page, the whole page got refresh.
           In react you can navigate to different page without reloading the whole page.[with th help of]
           [link component], link will not reload the page.
        */}

        <li >
            {/* <a href="/about">About Us</a> */}
            <Link
             style={{
              textDecoration:"none",
              color:"darkgrey"
          }}
             to="/about">About Us</Link>
  
        </li>

        <li>
              <Link 
               style={{
                textDecoration:"none",
                color:"darkgrey"
            }}
              to="/contact">Contact Us</Link>
        </li>

        <li>
              <Link 
               style={{
                textDecoration:"none",
                color:"darkgrey"
            }}
              
              to="/grocery"> Grocery</Link>
        </li>


        <li>
        <Link 
         style={{
          textDecoration:"none",
          color:"darkgrey"
      }}
        
        to="/cart"> Cart ( {cartItems.length} items )  </Link>
          {/* Cart == ( {cartItems.length} items ) */}
          
          </li>
        <button 
        // className="login"
        style={{
          padding:"3px",
          backgroundColor:"green",
          padding: "11px 35px",
          textAlign:"center",
          borderRadius:"5px",
          // background-color: #04AA6D;
          color: "lightgrey",
          marginTop:"0.5%",
          marginBottom:"0.5%"
          // marginLeft:"45%"
        }}
        
        onClick={()=>{
         btnNameReact==="login"?
          setBtnNameReact("Logout"):setBtnNameReact("login")
        }}
        
        >{btnNameReact}</button>


        <li style={{fontFamily:"monospace",
        color:"darkgrey",
                    border:"1px solid green"}}>{loggedInUser}</li>
        </ul>
  
      </div>
  
     </div>
    )
  }

  // export default Header;
  