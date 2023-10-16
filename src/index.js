import React , {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';



// whenever you have to devlop routes we have to create a routing congfiguration 
// so this {createBrowserRouter} will create a routing configuration for us.
// now what im going to do im creating we are creating routing configuration inside appRouter 
// we are basically devloping our router and we will pass in this configuration inside this [createBrowserRouter].

// const appRouter= createBrowserRouter();
// so what is the configuration when i say configuration , 
// configuration means some information that will define what will happen on a specific route
// so the information that will tell the browser router, What will happen on a specific path.
// so supose if im calling about , what should happen if i call that URL, if i call that route
// so that we are going to pass in over here.
// so this [createBrwserrouter] takes a list of paths
// WHAT IS PATH?
// path is noting but an object, it contains two things 
//  {
//   path:"/",
// element: <App/>
//  } like this 
// so if my path is {/} then load the elemnent my Home page
// my Home page is APP so load that APP componenet
// 
// 
// its a composition of components, one big level component {AppLayoutComponent} then there are several component
// inside it 
// what is about us page its again a {component}
// thats why we say everything is a component.
// 
// 
import {createBrowserRouter} from "react-router-dom";
import Contact from "./components/Contact";
// import About from './components/About';
import Body from './components/Body';
// import RestaurantMenu from './components/RestaurantMenu';

import ResMenu from './components/ResMenu';
// import Grocery from './components/Grocery';

import Cart from './components/Cart';
import Front from './components/Front';

const root = ReactDOM.createRoot(document.getElementById('root'));


const Grocery = lazy(()=> import("./components/Grocery"));
// this is also known as dynamic import, we are dynamically importing it 
// 
const About = lazy(()=> import("./components/About"));

const appRouter=createBrowserRouter([
  // so this is how we give the configuration, but just creating the configurtion wont work, we will have to pass
  // this configuration, we will have to provide this information.

  
  {
    path:"/",
    element:<AppLayout/>,
    // i want to push these childeren according to routes (in App.js)

    // 1)- Now this AppLayout has 3 childeren, Now I want to load these three childeren according to the path.
    // 2)- But where should i load this [in App.js [in the outlet]].
    // 3)- react dom will provide a outlet.

    children:[
      {
        path:"/",
        element:<Body/>,
        // if my path is ["/"] then i want what childeren to load in this outlet.[my body compoent]
        // If my path has ["/"] then i want what my body component to be there.
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading.....</h1>}>  <About/> </Suspense>,
        // so now, you have differnet bundle for about us page

        // element:<About/>,
        // if my path is /contact, I want to get my contact componenet to come over there(in app.js) after 
        // header component. 
      },
      {
        path:"/contact",
        element:<Contact/>,
      },

      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading.....</h1>}>  <Grocery/> </Suspense>,
         // so now, you have differnet bundle for grocery page

        //  give it a placeholder--fallback 
        // is what should react render?  when code is not available.
      },
      {
        path:"/restaurants/:restaurantId",
        // element:<RestaurantMenu/>,

        element:<ResMenu/>,
      },

      {
        path:"/cart",
        element: <Cart/>
      },

      {
        
        path:"/front",
        element: <Front/>
      }

    ],
    errorElement:"OPPPSSSSS!!!!!!!!!"
    // error page bana lena !!!!
  },


  {/* if path = /about */}
    //  if i have my path is [about], I should have my about component over here. and noting 

  // {
  //   path:"/contact",
  //   element:<Contact/>,
  // },

  // {
  //   path:"/about",
  //   element:<About/>,
  // },
]);
root.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
  <RouterProvider router={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
