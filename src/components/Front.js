import React from "react";
import { Link } from "react-router-dom";
// import BannerImage from "../assets/pizza.jpeg";
import "../styles/Front.css";
import TextComp from "./TextComp";
import DeliveryComp from "./DeliveryComp";
import Body from "./Body";
import MeetEat from "./MeetEat";
import DeliveryPartner from "./DeliveryPartner";
import PizzaComp from "./PizzaComp";

function Front() {
  return (
    <>
    <div className="home" 

style={{ backgroundImage: `url(" https://jooinn.com/images/italian-food-background-1.jpg")` }}>


    {/* style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/food-ingredients-spices-cooking-mushrooms-tomatoes-cheese-onion-oil-pepper-salt-basil-olive-delicious-italian-pizza-black-concrete-background-copyspace-top-view-banner_769609-4978.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=ais")` }}> */}

    {/* // style={{ backgroundImage: `url("https://quotesbook.com/quotes/food-quotes/unknown-authors/nothing-brings-people-together-like-good-food-3840x2160-2336.jpg")` }} */}
    {/* > */}

      <div className="headerContainer">
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/">
          <button> ORDER NOW </button>
        </Link>
      </div>
      
    </div>
    <MeetEat/>
    {/* <TextComp/> */}
    {/* <MeetEat/> */}

    {/* <DeliveryComp/> */}
    <TextComp/>
    {/* <PizzaComp/> */}

    <Body/>

    <DeliveryPartner/>
    <DeliveryComp/>
    </>
   
  );
}

export default Front ;
