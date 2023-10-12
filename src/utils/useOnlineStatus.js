 //  check if online
    //  To check wheather online or offline we will use EventListener

import { useEffect, useState} from "react";

// i just need to add event listener once 
//  so how can i do it, with the help of useEffect
//  i will put my eventListener on to the webpage onnce
// its job is to keep tracking when the internet is online, when the internet is offline and return the status back.

const useOnlineStatus=()=>{
  
     const[ onlineStatus , setOnlineStatus] = useState(true);

    //  check if online

    useEffect(()=>{
           window.addEventListener("offline" , ()=>{
                console.log("OFFLINE !!!!!!!!!!!")
                setOnlineStatus(false);
           })

//    you can simulate a offline connection in browser,
// you can give them [ good game ] when user offline.


           window.addEventListener("online" , ()=>{

            console.log("ONLINE !!!!!!!!!!!")
            setOnlineStatus(true);
       })
    },[])


    // return boolean value
    return onlineStatus;
}
export default useOnlineStatus;
















































// how to create custom HOOK ? 36:00 ep-9

// so before making hook first finalize the contract 
/*

contract means what is the input of that hook? what is the output of that hook?

like in previous useRestaurant.js mai the input was [ resId ] and the output was [ resInfo ]

-- if you know these 2 things then it becomes easier to write your { HOOK }

so similary in this case in [ useOnllineStatus], so what should be the input, do we need some specific infomation
to show the online status  --- No!!! WE DON'T NEED IT

what we will do over here --  we will just try to check online and it will return onlineStatus 
and it will return return onlineStatus and this is a boolean

we dont need any infomation from coloar, colar means 




FOR EXAMPLE:== the colar is resMenu, in this to get the parameters from the URL, I dont need any particular 

information from the coloar/ from the component where it is being called. 
i just need to access my URL that i can do it by using a utility function/ by using browser function. 

here in [ useOnlineStatus hook ], I just need to return a boolean value.

const ResMenu=()=>{

    const {restaurantId} = useParams();

---

*/