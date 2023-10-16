import "../styles/TextComp.css";
import { Link} from "react-router-dom";

const TextComp=()=>{
    return(
        <div className="text">

            {/* <div class="divtext"> */}

            <div style={{
                color:"white",
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


            THE BURGER TASTES BETTER WHEN YOU EAT IT WITH YOUR FAMILY

            {/* <p>bbdhgfhjghjg ghjghjghjg</p> */}

            <Link to="/">
          <button> EXPLORE FULL MENU </button>
        </Link>
        </div>
        {/* delivery */}
     {/* gg */}
     {/* <img src="https://images01.nicepagecdn.com/page/20/57/template-preview-2057310.jpg"/> */}
    
        </div>
    )
}
export default TextComp;