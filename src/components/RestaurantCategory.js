

// WE CAN RECIEVE THE { DATA } LIKE THIS, THIS IS AN OBJECT, OR WE CAN DESTRURE IT ALSO...
// LIKE  THIS [ DATA MEI BHI JO DATA KEY HAI] ({data});
import {useState} from "react";
import ItemList from "./ItemList";

// I WILL RECIEVE DATA HERE AS A { props }.

const RestaurantCategory=({data , showItems , setShowIndex , dummy})=>{

   console.log(setShowIndex,"set!!!!");
   console.log(dummy,"DUMMMY !!!!");

    // console.log( datarr?.data?.title  ,"restuarnt catergory!!!!!!!");

    // console.log( data?.itemCards?.length  ,"restuarnt catergory!!!!!!!");
    // console.log( data  ,"restuarnt catergory!!!!!!!");

    // it is normal arrow function, it will take in some props.
    // we will pass in some props and return JSX 
    // JSX is basically that accordian item that is colapsable/ expandable kind of thing.


    // const[ showItems , setShowItems]= useState(false);

    // const handleClick=()=>{
    //   console.log("ggg");
    //   // and also change cursor to pointer so that it will point.
    //   // on click of it, it should show and expand.
    //   // It should expand and collaps.

    //   // 1)- so itemList <itemList/> , this JSX is on the UI layer, now i want to handle this show and hide 
    //   // from the data layer, I have to work on my data layer, so this data layer has a state variable 
    //   // and this state variable will decide this item will be shown or not. 

    //   // 2)- i can create a state variable and variable will control, if i want to show items or not. 

    //   // setShowItems(true);

    //   setShowItems(!showItems);
    //   // If my { showItems } is true, make it false, if Our showitems is false make it true. 1:32:5 

      
    // } 

    const handleClick=(param)=>{
      console.log(param, "clicked!");

      setShowIndex();
      console.log(data?.title,"SHOW INDEX!!!!!!!!!");

    }

    // console.log(data?.itemCards[0]?.card?.info?.id,"item!!!!!!!!!")
    return(
     // I want to map my all the category and for each category return a { <RestaurantCategory/> Component!!}
          <div >
        <div style={{
          // backgroundColor:"red",
        backgroundColor:"lightgrey",
        width:"60%",
        marginLeft:"20%",

        }}>
       {/* text demo!!!! */}

            {/* Accordian Header */}

{/*   I want to show and hide my itemList, when i click on this header, it should hide and show. so i will write
       a { onClick} over here. so if i click then this function will be called.  */}

              <div style={{display:"flex",
              padding:"20px",
              margin:"10px",
              justifyContent:"space-between",
              cursor:"pointer",
              alignItems:"center"
                }}   

               onClick={handleClick}
                >
                  

                <span style={{fontSize:"21px", fontWeight:"bold"}}>{data?.title} ({ data?.itemCards?.length})</span>
                <span style={{fontSize:"x-large", fontWeight:"bold"}}>^^^</span>

                

             </div> 
                  {/* Now if this showItems is true, then only show this itemList  */}
         {/*so we are controling this itemList with showItems  */}

            {showItems && <ItemList 
           key={ data?.itemCards?.card?.info?.id}
            items={data?.itemCards}
            dummy={dummy}
            
            />}

            


            </div>

            {/* Accordian Body */}
            {/* CREATE A ANOTHER COMPONENT FOR IT ITEMLIST for accordian body... */}

            {/* <ItemList items={data?.itemCards}/> */}
            {/* I will pass in some props over here, which is { items } and for items, i will pass {data.itemcard},
            so we have got this {itemList } over here, 
            
            
            */}

        </div>
    )
}

export default RestaurantCategory;