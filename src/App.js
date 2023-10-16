import React , {lazy, useEffect, useState} from 'react';
import './App.css';
import {Header }from "./components/Header.js";
import Body from "./components/Body.js";
import About from './components/About';
import Contact from './components/Contact';
import {Outlet} from "react-router-dom";
import UserContext from './utils/UserContext';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Footer from './components/Footer';


// {
//   /* The following line can be included in your src/index.js or App.js file */
// }
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Grocery from './components/Grocery';



// we will not import our grocery like this, we will get our [ Grocery] into our app by using something known as
// "lazy" , we will load it by something known as lazy

// const Grocery = lazy(()=> import("./components/Grocery"));

/*
so [ lazy ] is a function which is given to us by react, and this { lazy } comes from our react package, and it 
comes as a named export, now this lazy takes a callback function, we will lazy loaded and i cn write my import.


this import is not that import no this is not that import but this import is basicallly a function and this
function will take the path of this grocery component. 

but now i will be importing my grocery using this lazy function 

-- this one line of code has lot of power, this one line of code can do { magical things } in your app.

-- our main { javascript bundle main js file} {check in your browser } does not have grocery component 


*/


// Restaurant card component
// what will my restaurant card have - it should have img , name of the restaurant, start rating nd all......
let obj = {"a": 1, 'b': 2, 'c': 3};
console.log(obj.a)
// console.log(resList.data.);

const AppLayout=()=>{
  // Header-- it will be a new component.
  // Body
  // Footer

  const[ userName , setUserName]= useState();

  // authentication
      useEffect(()=>{
        // Make an API call and send username and password 

        const data={
          name:"Shivangi",
        };
        setUserName(data.name);
      },[]);


  return(

    // <UserContext.Provider value={{loggedInUser:userName }}>
    // <div className="app">
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName }}>
      <Header/>

      </UserContext.Provider>
    {/* this outlet is a component whenever there is a change in the path so this outlet will be filled
        with the childeren according to the path. on what page we are */}
        {/* according to routes it will render */}

        {/* whenever i will be on [/] my body will be filled over here[inside] in this outlet. */}
        {/* so here outlet is like a tunnel and all the childeren according to the routes go inPlace of this 
        outlet. */}

    <Outlet/>
{/* my Header is intact my outlet is getting filled with the compoent that is passed as a childeren to my parent*/}

{/* parent is AppLayout, I can have multiple childeren , i can have parents, and according to the route it
     will render . this is how you can create childeren routes inside your app.  */}

{/* so if i do [/contact] then this contact will basically go and fill this outlet. */}

    {/* so this Outlet is basically  */}

    {/* it does not reload the page and does not  refresh the compoent that is why our react application 
    is known as "Single page application " */}

    {/* its a whole single page, its a whole single compoent, this app component and all the routing 
    all the new pages are just component interchanging themselves  */}

    {/* this is why we called it single page application only one page , if i go to the new route also 
    it just changing the components ite not reloading the new page  */}


    {/* if you have to navigate through different pages, you dont have to refresh the page, your
    website will not reload your browser will not reload your website, browser will not make external call
    or something this is known a singl page application  */}


<Footer/>
</Provider>
    // </div>

    //  </UserContext.Provider> 
  )
}


export default AppLayout;

// { AppLayout } is a root level component...
// that why we have to export this component not header bcz 
// the header component is in the AppLayout.