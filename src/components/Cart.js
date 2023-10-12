
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

    return <div>

        <h1> Cart</h1>

        <button 
           onClick={handleClearCart}
        
        >Clear Cart</button>

        {cartItems.length === 0 && <h1> Cart is empty!! Add item to the cart</h1>}

        <ItemList items={cartItems}/>
    </div>
}

export default Cart;