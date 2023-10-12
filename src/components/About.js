
// import { useContext } from "react";        
// 1ST WAY TO USE CONTEXT.

import UserContext from "../utils/UserContext";

const About=()=>{

    // const { loggedInUser} = useContext(UserContext);
    // 1ST WAY TO USE CONTEXT.


    return(
        <div>
        <div> ABout Page</div>

        {/* <UserContext.Consumer>
            {(data)=>console.log(data, "ABOUT##############")}
        </UserContext.Consumer> */}


        <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
        </UserContext.Consumer>

        {/* This will return a JSX, and it will print the h1 tag  */}
        {/* <UserContext.Consumer>, So you can consume it inside your class base components.
        ==> you can use hook also ====>     const { loggedInUser} = useContext(UserContext);

        ==> Both are the ways to consume the context, both are these ways to consume the context 
        ==> this is about reading the context 
        
        */}
        </div>
    )
}
export default About;