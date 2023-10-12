
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList=({items,dummy})=>{


    // console.log(dummy,"ItemLIst DUMMY!!!!!!!!!!!111");

    // Hum basically ek object recive krte hai hai hum like { items={data} krte hai. }


    // Now As soon as somebody clicks on this add button, i want to add item,
    // i want to dispatch an action.
    // first of all, I need access to dispatch 
    // this dispatch is a function that we get from a hook that is known as "useDispatch";
    // and this { useDispatch hook } again given to us by "react-redux" ;

    // just like { useSelector } for dispatch.

    // I want to dispatch an action , first import that action, that you want to perform.
    // Now I will dispatch this action.
    // and whatEver i pass in this will go inside my cart
    // suppose i add {"pizza"} over here, so that will my action.payload.
    // whatever i have pass in this action this will go in the reducer function action and that to inside
    //   a payload

/*
{
    payload:"pizza"
}


*/

    const dispatch = useDispatch();
    
     const handleAddItem = (item) =>{
        console.log("handle Clicked");

        // dispatch(addItem("pizza"));
        dispatch(addItem(item));
     }
  
    return(
        <div>
           {
            items.map((item)=>(
            //    {console.log(items,"Items DATA!!!!!!!!!!!111")}
                <div style={{border:"2px solid black",margin:"10px"}} 
                key={item?.card?.info?.name}
                
                >
                      {console.log(item?.card?.info?.name,"Items DATA!!!!!!!!!!!111")}

                   <img style={{height:"150px",width:"150px"}}
                   src={CDN_URL + item?.card?.info?.imageId}/>


                   <button 
                   style={{
                    padding:"10px", 
                    position:"absolute",
                    marginTop:"60px",
                    marginLeft:"60px"
                    }}
                     
                //    onClick={handleAddItem(item)}
                // onClick={()=> handleAddItem(item.card.info.name)}
                   

                onClick={()=> handleAddItem(item)}
                    > ADD + +</button>
                                     
                    <div key={item?.card?.info.id}>

                        {/* <button>ADD</button> */}
                        

                        <span style={{fontFamily:"cursive",textAlign:"left"}}>{item?.card?.info?.name}</span>
{/* so some times we have only { price } and sometimes we have default price { defaultPrice}. so how to 
    access this type of data. this is a bug bcz we have price but now we have defaultPrice.
    sometimes we have price, sometimes we have defaultPrice , how will be show? */}

{/* so we put a condition here if the price is valid then show the price [ OR ] show a default price by 100 */}

      <span style={{fontWeight:"bold"}}> -- ₹ {item?.card?.info?.price
                                                ?item?.card?.info?.price/100
                                                :item?.card?.info?.defaultPrice/100}
                                                </span>

                        {/* <span style={{fontWeight:"bold"}}> -- ₹ {item?.card?.info?.price/100}</span> */}
                          
                    </div>

                    <p style={{fontStyle:"italic",color:"white"}}>{item?.card?.info?.description}</p>
                </div>
            ))
           }



        </div>
    )
}

export default ItemList;