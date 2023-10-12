  <!-- {/* so if i click this button my restaurant should filter out the top rated restaurant.. */}
      {/* which have written more than four {4} */}
      {/* when i click this something should happen */}
      {/* In this button i'll pass a attribute and that attribute is known as onClick  */}
      {/* now this onClick takes a callback function which will be called on click */}
    {/* this is the callback function which will be called on click this is the arrow func //{()=>{}} // this one*/}
    {/* this callback function is javascript thats why we are wrapping inside these curly braces inside JSX */}
    {/* this callback fucntion  will be called when we clicked on this button this is how u add click handlers */}


      <div className="filter">
        <button 
        className="filter-btn" 
        // onClick={()=>{console.log("top res")}}
        onMouseOver={()=>{console.log("top res")}}
        
        > Top Rated Restaurants </button>
      </div> -->




<!-- **** -->
<!-- A hook is noraml javascript function which is given to us by react -->

<!-- React Hook

Normal JS utility function    --written by facebook devlopers 
written this inside the react which you import

there are 2 vry imp react hook
1)- useState()  --react gives you superpowerful variable in react
2)- useEffect()

you have to import it from "React" and you have to import it as a named import 
bcz somebody would have named export it.

so useState is used to create state variable.
it maintains the state of your application or component.

A local state variable scope is inside the component


1)- when you call useState 
useState();
it will give you a state variable . so how do you recive that state variable---[inside an array]

const[ listOfRestaurant ] = useState();

this is how you create a state variable.thisis a superpowerful react variable.

//  state variable
  const[listOfRestaurants]= useState([]);
  -- so whatever you pass over here in useState becomes the default value of this variable.
  --- this state variable just work like this normal js variable
  --- useState is giving us the listOfRestaurant.
  --- it is a special react variable. how do you modify this?
  -you have to created in a special way useState Hook which gives you the array if i have to modify the list of res.
  ---  { listOfRestaurant=[] } you can not modify like this.
  --- how do i have to modify is BY A FUNCTION and the function comes as the second parameter in this array
  -- and this is known as the setListOfRestaurant , u cn name this as whatevr you wish to
  -- so this setlistOfRestaurant is used to update the list this state variable.
  --- i am updating my list of restaurant with this [ filteredList ]
  --- 
  --- you can update the normal variable like this---incase of let
  --- [    
       let list=[];
       list=["abc"];
       ]     
       --- In case of const
       [
       const list=[]
       list.push("some data") 
       { you can push some data inside it.}


  --- whenEver this variable we need to update 
  --- suposse i need to update the value of listOfRextaurant i will not modify it directly using a eqaul to sign[=],
  --- like this listofRestaurant=[]  NOOOOOO!!!!!!!!
  --- but i will use a setListof method to update it

  ** basically this superpowerful variable keeps the UI in sinck with the data layer

  --- if this list of restaurant was a normal variable 
  --- const listOfRestaurant=[]  , if i will update it my UI does not update it but if i have superpowerful react
     variable it will keep the UI in sink with that variable.
  --- SO as soon as my listOFRestaurant changes it will automatically refresh our component 
  --- and this is known as [render].

  *** Whenever a state variable update react will re-render our component
  *** whenever state variable changes react will re-render my component.

  1:37

       ]





  // normal variable
  let listOfRestaurants=[];







  point)=== React will make this DOM operation super fast and effcient.

  why is your web app fast??
  --- bcz we are using react NOO!!!

  --- react only good at DOM Operation/ Manipulation
  --- AS soon as i change my state variable react automatically refresh that component. [very fast automagically]
  --- it keep sink your data layer with the UI layer

  1:44
  --- Reconciliation algorithm


useEffect called after the component render
-- first body component render and then after useEffect called


################  point  ########################
 
 => if no dependency array  ==> useEffect is called on every render
 => if denpendency array is empty = [] => useEffect is called on initial render(just once)
 => if dependency array is [btnNameReact] => called everytime when btnNameReact is updated.
 => it is always called after inital render.
  EP -7 
 useEffect(()=>{
  console.log("useEffect called");
 },[btnNameReact]);

=> every time my btnnameReact will changes my useEffect will be called.


 #################  point ####################
  useState===>
 => it is used to make local state variable inside your functional component.
  => so always call it inside your functional component 
  => call this on the top of function

  => dont put any condition while creating state variable bcz it create inconsistency

  if(){
    const[searchText , setSearchText]= useState("");
  }

  although you can do it but dont put any conditon here

  => dont do that inside condition, inside {for loop}, inside function
  => dont create state variable inside a function





----------------------------- [   LESSON - 7  ] ---------------------------

whenever my data will update, it will update my UI.

<!-- 1:05:00 TIME -->

useEffect(()=>{
  console.log("called");
},[])
------ it will called once after intial render.

Server Side Rendering

#### 2 types Routing in web apps

--- Client Side Routing
--- Server Side Routing   {explation for single page application also}



<!--    
            EPISODE    ===   [ 7 ]     

    // ##############  MOST IMPORTANT PART   ##################

    // param me , we get this object {restaurantId: '25620'} 'params' 
// then we have to destructure it, so put { restaurantId }
    console.log(restaurantId , "params");
    // object me key ka perfect name dalna 


   ###################   Part   #######################

   why we use custom hook?
   
   --  its not a mandatory thing but its a good thing that will make your code more readable , that will make
   your code more modular and more reusable.


   --- why we need custom hook 

   so the component [ resMenu ] has three responsibilty that is 

   1)- fetch the data
   2)- displaying the data 

   so don't you think that restaurnat menu should only be consern about displaying the data, it should not 
   worrry where the data is coming from, How that data is coming from , what is that API that is being called.


   so like in case of use [useparam], we dont need to know How useParam is getting the parameters, there would
   be some code written for useParam that will go check the URL, check the resId over here. then abstract and give it to you.. 

   -- what is hook ?

   -- it is just an utility function 

  we just want a custom hook [ useRestaurantMenu ]. it gives us the restaurant menu.
  and we dont need to worry about how this customHook fetching the data..
  im trying to abstract/ take out that fetch data logic and put inside this hook.. 

  i will create this useRestaurant menu hook and then this [ RestaurantMenu ] component . it does not have to worry
  about how to fetch the data, it just have to worry about , i have got my data inside resInfo i just want to display it now 


  --we will create a custom hook that will fetch the data and give it to restaurantMenu 
   so after that this restaurant has single responsibility 
   it is just concern about displaying the restaurant menu on to the UI.
   and the code will also be cleaner


   -- whenever you are creating a hook always start with the word [ use ] then name RestaurantMenu
   why we do that?
   bcz thats a way for react to know if the function name is starting from a small letter [ use ] that means 
   its a hook, react understand that. 



   ##############  Custom hook   ########################


   // whenever you write a hook try to see the contract, we get the resId 
/*
 we ahve this hook restaurantMenu. what this hook is doing, what it is getting in the input 
 what it is getting in the output 
 -- what is the contract of that hook?

 -- tha contract of that hook is it get the restaurant ID 
now it has to fetch the data and return the restaurant information back to where that hook is being called from.
we take the restaurant ID and return that restaurant information. 
 
custom hook is just a utility function 



############# imp point 
31:00   ep-9
- that means you can create custom utility functions and you can export it as a package and put it upon NPM 
so that world can use it.









######### imp part ###########################


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

Ep== ( 9 ) 58:00

-- we setup linters , if you setup linters according to react , so it will start throwing you error 
--- if you dont use over here in { useHook } means in custom hook.

MAKE NOTES ------  FROM VIDEO [ EP - 9]   [TIME:-- 01:00]

Bundling-- we can bundle 100 of components
  we bundle our all js file into one js file { check this in your browser }

-- you can split your website into smaller bundles so that you dont put a load on a single bundle
-- so that so request for that js file does not became so heavy that it takes a lot of time to get into browser 

--- so that is why we do this dynamic bundling, code spliting, chunking 


### imp terms 

1)- Chunking
2)- Code Splitting
3)- Dynamic Bundling
4)- Lazy Loading  
5)- On Demand loading 

6)- also known as dynamic import 


### Lazy loading 

--- so when i goto my grocery page then only that grocery code will be there in our app.
--- so, intially our code should not have grocery code, when i go to that link then only my grocery code should come up.

--- that is known as lazy loading 

-- so we will not load everything directly, but we will do a lazy loading when required , and this is also
  known as "On Demand loading". so whenever user going to the particaular page then only load that page 



ep- 09  {01:25} video timings

 1)-  suppose we are on home page, now we have just one { index file }, right now it does not have grocery code
      as soon as i will click on grocery, it will take some time, it will take few seconds to fetch the data of 
      grocery at that particaular time, so in that middle state react tries to render grocery and it is not there 
      that state that causes that error ,

      2)- So how to handle that state we will use suspense ?

      - so {suspense} is a compoennt which comes from react 
      - we can wrap our compoennt into suspense 

  2)- so these { 4 lines } of code make your app very fast, very performant, light weight, optimize 

  --IN YOUR SYSTEM DESIGN INTERVIEWS YOUR INTERVIER WILL ASK THESE THINGS. 

  -- SO TELL YOUR INTERVIWER I CAN USE LAZY LOADING WHEN MY APPLICATION GROWS.

  -- 1)- Suppose if your interviwer ask you to devlop an e-commerce website , you should tell him that you can use
        lazy loading to distribute my code into different chunks 

        --- when our app is bloting (means it takes lot of time to load), when app's bundle size is increseing
        then we do this { code spliting}, we do this { chunking } , we do this { lazy loading}, we do this
        { dynamic loading }


  --- SO WHEN YOU DO LAZY LOADING SO ALL THE CODE DOES NOT COME AT ONCE, IT IS ONLY COME WHEN IT IS REQUESTED.

  -- when you tell that to your interviewr they get to know that you are a mature devloper, you know all this 
     you know this important things, you can build large scale application 

     --- YOU CAN NOT BUILD A LARGE SCALE APPLICATION WITH 1000 OF COMPONENTS WITHOUT DOING THIS. 

     10 - 20 components its fine but if your compoents size is incresing and your budle size gets heavier 
        suppose now it is [ 2 mb] after that if it is [ 4 mb ] then it should be concerning, so then we will
        start using these funailities


        --- you can use lazy loading whatever component you wish to.

  --- SO THIS IS HOW I CAN DISTRIBUTE MY APP INTO SMALLER- SMALLER CHUNKS, AND THIS WILL MAKE OUR APPLICATION
       VERY PERFORMANT 

       this is very important thing, this is how you optimize it, this is how you make them performant. this is
       how you do dynamic import chunking , tell your interviews

  --- so when you work on large apps these things are really important / helpful.
     you should know all of this thing

     this was episode of optimizing the app -----


     --WE HAVE COVERED LOT OF THINGS 

     1)- We have created { custom hooks }
     2)- we use this { online status } very easily 
     3)- we also saw a important thing of lazy loading 

     same concept differnt names like chunking, code spliting nd all.


     you will devlop large scale application and performant 
     --- To devlop this you should have this knowlage for sure.
  








*/


  


   












 -->













 -->