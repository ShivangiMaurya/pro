
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart =()=>{

    const cartItems = useSelector((store)=>store.cart.items);
    // you are selecting specific portion of that store.
    // so when you write like this, this { cartItems } will only update, when my { store.cart.items } change,
    //    that small items, it has noting to do with anything happening outside the scope of this.
    // it is only subscribe to cartItem

    // redux is a powerful heavy tool

    console.log(cartItems ,"jj");

    const dispatch = useDispatch();

    const handleClearCart=()=>{
       dispatch(clearCart());
    }

    return <div style={{backgroundColor:"red",
    backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/20170803/pngtree-Food-Menu-Fare-Meal-background-photo-869492.jpg")`

    }}>

        <h1
         style={{
            padding:"3px",
            backgroundColor:"black",
            padding: "11px 35px",
            textAlign:"center",
            borderRadius:"5px",
            // background-color: #04AA6D;
            color: "lightgrey",
            // marginLeft:"1%"
          }}
        
        > Cart Items</h1>

        <button 
          style={{
            padding:"3px",
            backgroundColor:"green",
            padding: "11px 35px",
            textAlign:"center",
            borderRadius:"5px",
            // background-color: #04AA6D;
            color: "lightgrey",
            marginLeft:"45%"
          }}
           onClick={handleClearCart}
        
        >Clear Cart</button>

        {cartItems.length === 0 && <h1 style={{color:"white"}}> Cart is empty!! Add item to the cart</h1>}

        <ItemList items={cartItems}/>
    </div>
}

export default Cart;