
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
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url("https://media.istockphoto.com/id/1304225026/photo/top-view-of-mobile-phone-glasses-pen-and-notebook-written-with-about-us-on-wooden-background.jpg?s=612x612&w=0&k=20&c=YhbAlzZONGfWt-Qm5W10Z0-Z8waHkblhtZEbRh4E0bM=")` }}
      >

        {/* jjjj */}


        <div style={{
                color:"lightgrey",
                marginTop:"12%",
                fontSize:"3vw",
                // display: table;
                // color: white;
                // fontFamily: "impact",
                // font-size: 2.8vw;
                textAlign: "center",
                // border:"2px solid black",
                height:"300px",
                width:"700px",
                marginTop:"5%"

                // backgroundImage: new("https://st5.depositphotos.com/1558912/64667/i/450/depositphotos_646673554-stock-photo-easter-food-background-white-plate.jpg")
                
                
                }}>
            {/* Resize the browser window to see 
            how the font size scales. */}


            {/* THE BURGER TASTES BETTER WHEN YOU EAT IT WITH YOUR FAMILY */}
            We build innovative products & solutions that deliver unparalleled convenience to 
            urban consumers.  a dedicated customer connect team is on standby to answer your queries 24x7.
{/* The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India. */}

 {/* a dedicated customer connect team is on standby to answer your queries 24x7. */}

{/* Brands */}
{/* With love and support from consumers, Swiggy expanded far and wide, first through the entire city of Bengaluru and then across the entire country.  */}
{/* Today, Swiggy is the leading food ordering and delivery platform in India. */}

            {/* <p>bbdhgfhjghjg ghjghjghjg</p> */}

            {/* <Link to="/">
          <button> EXPLORE FULL MENU </button>
        </Link> */}
        </div>
      </div>
      <div className="aboutBottom">
        {/* <h1> ABOUT US</h1> */}
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p> */}

        {/* <div class="divtext">
            Resize the browser window to see 
            how the font size scales.
        </div> */}


      </div>
    </div>
  );
}

export default About;
