import {Link} from "react-router-dom";

const Grocery =()=>{
    
    return(
        // <h1>
        //    Our Grocery online store, and we have a lot of child component insde this web page !!!

        // </h1>

        <div className="home" 

style={{ 
    pad:"2%",
    
    backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-an-empty-grocery-store-aisle-lit-up-at-night-in-the-image_2585080.jpg")` }}>


    {/* style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/food-ingredients-spices-cooking-mushrooms-tomatoes-cheese-onion-oil-pepper-salt-basil-olive-delicious-italian-pizza-black-concrete-background-copyspace-top-view-banner_769609-4978.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=ais")` }}> */}

    {/* // style={{ backgroundImage: `url("https://quotesbook.com/quotes/food-quotes/unknown-authors/nothing-brings-people-together-like-good-food-3840x2160-2336.jpg")` }} */}
    {/* > */}

      <div className="headerContainer">
        {/* <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p> */}
        <h2 style={{color:"darkgrey"}}>In these times, we've eliminated the stress associated with shopping for daily essentials. You can now effortlessly order all your household products and groceries online. Plus, the added convenience of finding all your requirements at a single source, coupled with substantial savings, demonstrates that bigbasket, India's largest online supermarket, has transformed the way we shop for groceries. Online grocery shopping has become second nature. And when it comes to freshness, whether it's fruits and vegetables or dairy and meat, we've got you covered! Easily obtain fresh eggs, meat, fish, and more with just a few clicks.</h2>
        <Link to="/">
          <button
          style={{
            marginLeft:"40%"
          }}
          
          > ORDER NOW </button>
        </Link>
      </div>
      
    </div>
    )
}

export default Grocery;