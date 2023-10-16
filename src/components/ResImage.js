


// // import { useContext } from "react";        
// // 1ST WAY TO USE CONTEXT.

// import UserContext from "../utils/UserContext";

// const About=()=>{

//     // const { loggedInUser} = useContext(UserContext);
//     // 1ST WAY TO USE CONTEXT.


//     return(
//         <div>
//         <div> ABout Page</div>

//         {/* <UserContext.Consumer>
//             {(data)=>console.log(data, "ABOUT##############")}
//         </UserContext.Consumer> */}


//         <UserContext.Consumer>
//             {({loggedInUser})=><h1>{loggedInUser}</h1>}
//         </UserContext.Consumer>

//         {/* This will return a JSX, and it will print the h1 tag  */}
//         {/* <UserContext.Consumer>, So you can consume it inside your class base components.
//         ==> you can use hook also ====>     const { loggedInUser} = useContext(UserContext);

//         ==> Both are the ways to consume the context, both are these ways to consume the context 
//         ==> this is about reading the context 
        
//         */}
//         </div>
//     )
// }
// export default About;





import React from "react";
// import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function ResImage() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url("https://getsling.com/wp-content/uploads/2019/11/types-of-restaurants_10.png")` }}
      >

        {/* jjjj */}


        <div style={{
                color:"lightgrey",
                marginTop:"12%",
                fontSize:"3vw",
              
                textAlign: "center",
              
                height:"300px",
                width:"700px",
                marginTop:"5%"

                // backgroundImage: new("https://st5.depositphotos.com/1558912/64667/i/450/depositphotos_646673554-stock-photo-easter-food-background-white-plate.jpg")
                
                
                }}>
          

        </div>
      </div>
      <div className="aboutBottom">
       

      </div>
    </div>
  );
}

export default ResImage;
