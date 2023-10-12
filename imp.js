

/*
     --- HIGER ORDER COMPONENT 
   A)--- CONTROLLED / UNCONTROLLED COMPONENT 
   B)--- STATE LIFTING UP 
   C)--- PROPS DRILLING 
   D)--- USE CONTEXT 

  //  What is context inside react? It is a powerful way to manage data.
  //  This is what we are going to study in upcoming part.

  ==> Every React application has a data layer and UI layer. 
  ==> And data layer is very very important. If we know how to manage data layer properly.
  ==> Our react application will be very smooth, will be very easy to build  



               ############  { 1 }   ####################

         Now if this showItems is true, then only show this itemList  
        // <ItemList items={data?.itemCards}/>
        // how do i write logic for this.

        // so if there is showItems is present then only show my items 
        // true then show it otherwise dont show it.

        conditon ===>>>
        { showItems && <itemList items = {data.itemCards}}/>


        ############  { 2 }  ############
         ===> Data is new oil   
               { 1:38:15} 
        ==> imp concept bataya hai { virtual dom} with ex { in compoent in browser}, check it, note it.



        ####### {3}  ####
        ===> I want to expand the newly added then i want { recommended } to collabes itself.





        ################## LECTURE:== 11 #####################

      //     DATA IS NEW OIL =========================================================++++++++++++++++

      // 1:46:00     
      //  CONCEPT ======>>>>>> STATE LIFTING 

      ########### 1)---  COLLAPSE FEATURE 

       ========>>>>>> Previous Code 

       const[ showItems , setShowItems]= useState(false);

        const handleClick=()=>{
  
      // setShowItems(true);

         setShowItems(!showItems);
 
    }

      {showItems && <ItemList 
          //  key={ data?.itemCards?.card?.info?.id}
            items={data?.itemCards}/>}


     1 point)===>  Now this restaurant category has power to show and expand its item.
                   I want this state to be lifted up, so i dont give the power of show  and collapse itemList 
                    to this { recommendList }. I will give the power of show and expand and collapse to the
                    parent of this child 

      ==> Right Now this restaurant category has power to show and expand its itemList, it is doing setShow 
        over here. { In restaurantCategory Component }.

        ==> I want to give the power to ResMenu, I want to give the power of show and expand 

        ==> basically i want { RestaurantCategory} to take an input, wheather you should show or not. 
        
           <RestaurantCategory 
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={false}

            // so whatever you pass in from the top, It should do this.

            whatever i pass over here  [ showItems={false} ] should be followed 
      ====>> so basically i am lifting my state up. 

      ==> so restaurantcategory has its own showItem over here, I dont want 
      ==> I want restaurantmenu to control all these { restaurantCategory } 
      ===> So right now each restaurantCategory is controling itself. 
      ===> But I want { restaurantMenu } to control all of these restaurantCategory. 
      ==> That is how we can expand and collabs any 

      ==> I dont want restaurantCategory have its own show items.

      ==> I want restaurantMenu to tell wheather you should sjow item or not. 

    ==> Our restaurantMenu is a parent and it has a lot of restaurantcategory. I want this parent to control 
       its childern, If i say show 

    ==> It should take my { showItems } from my props. so where is this prop coming from, It should coming from
       the parent, so basically if i pass in showItems as false then show my itemList if i pass in true then
       does not show. 




       ++++++++++++++++++++++ A)- CONTROLLED AND UNCONTROLLED COMPONENT +++++++++++++++++++++


        ==> So, this restaurantCategory is a controlled component now. Bcz you are controlling the parent 
        { the restaurntMenu } controlling the restaurantcategory now.

        ==> restaurantMenu controlling the restaurant category.

        ==> so when { restaurantcategory} has its own state, It was an uncontrolled component bcz restaurntMenu 
        does not have its control, when it wants to show and hide something it can do itself, this was not
        controled, it was controlling itself so it was an uncontrolled component. The parent does not control
        over its childern, restaurntMenu did not have control over this reaturantCategory.

        ==> If the restaurantCategory controlling itself, this showitems, It would have been a uncontrolled
            compoent.

    ===> If I take away this power, then it is an uncontrolled component. It is relying upon its parent to tell it 
          what it do?  Now this is a { controlled component }.

    ==> Now I am controlling it from my restaurantMenu.

    ==> there is no particualar definition of { controlled } and { uncontrolled } component. this is a phylosphy.
    i would say 

    ==> Restaurantcategory is a controlled component, that means i can control it by a props. I can control it
     It does not have its own state, it can have its own state but that state is not main state.

    ==> Majorly I am controllling it from parent, So this is a controlled component.

    ==> If i was not sending this, and it was managing itself

                  [    showItems={false}    ]

                  <RestaurantCategory 
                     key={category?.card?.card?.title}
                     data={category?.card?.card}
                     showItems={false}
                     />

      and it was mananging itself it was an uncontrolled component.

    ==> LETS BUILD A FEATURE OF EXPAND AND COLLAPBES

    ==> Now the parent has controlled to HIDE all the items collpse all the accordians, and the parent can control
       all these resCategories

###########################################

 showItems={index===0&& true}

 ==> This line means if index is zero { 0 } then send true. otherwise all off then are false.
      now my parent is controlling it.

  POINT )))_---- so this restaurantCategory is controlled component now.

   <RestaurantCategory 
            key={category?.card?.card?.title}
            data={category?.card?.card}
            // showItems={index===1 && true}
            showItems={index==1?true:false}


      ############## FEATURE +++++++++++++++++

      ==> Feature is it should show itself, and collabs all the others.
      ==> At a time only one accordian should be expanded.

        showItems={index === showIndex ? true : false }

// so if i change { showIndex }, it will automatically update it. it will automatically update and collabes it.
//  and the parent can control it.

  //  so on the click of this, how can i alter my { showIndex }.

  // earlier all these accordian items were controlling themseles, Now i have taken that power and i have given 
    it the parent and the parent is controlling all.and at a time only one can be expanded and that accordian is 
    expanded with this  { showIndex }, whatever is showIndex is that accordian will be expanded. otherwise all
    the accordian will be false.

    // Now when i click on this recommended i somehow want to change my showIndex { In ResMenu Component }.
      Now you would see that how can a child modify, if I click this div. on this handleClick, If I click on 
      this i should someHow modify the state variable of my parent.

    ==> Can i modify this { showIndex } from my restaurantCategory 

    ==> Can I modify state variable of my [ parent ] from my [ childeren ]. Can i do that? 
      It's not possiable directly but you can do that indirectly 

   ==> I want to pass my setShow Index to my childeren. How will i pass it.
      I will pass a function, It will be called index.

==> Now I will pass this function, now this function will basically set the show Index of that particular index.
      So I can set the [ showIndex ], I can pass the feature of setting the showIndex to my childeren, and I 
      can extract it here [ In Child Component ] { In restaurntcategory Component }.

  ==> 

      +++++++++++++++++++++++           2:08:40      +++++++++++++++++++++++++++++++++

       =========>>>>   ( C )---    PROPS DRILLING 

       ==> This is an Concept Props drilling.

       ==> So what happens in real world react application, There are lots and lots of component and there are 
          different hierarcy , so our react application, when it grows big there are components, and there are 
          components within them. It's like a big tree structure. 

      ==> There are lots of level nesting inside it. and passing the data between the components, passing data
      from one component to other component is the very big challenge when the application is huge 

      ==> React has one way data flow. In react application, the data has passed from parents to childeren,
        and childerens to their childeren, their childeren to their childeren.

      ==> Similarly data flows in one direction from TOP to BOTTOM.

      ===> In this The { reatuarnatMenu} page passes data to { restauarntCategory }.
          and this { restaurantCategory } pass data to itemList.
          Similarly how the data flows. 

      ==> Suppose there is some data in { restaurantMenu } , 

      [ const data="Dummy data"]

      ==> Suppose I want to pass this dummydata.

      ==> We are in the top, we have created something on the TOP, Now I want to passin the data to the leaf of
      that tree , their childeren to their childeren , suppose i want to acces this data inside my { itemList }.

      ==> RestuarntMenu ==> has restaurantcategory ==> and this restaurantCategory has this itemList. 

      ==> so if i want to access this data into my itemList, so how will i fetch that so basically what will
      i have to do , I cant directly access my itemList,

      ==> If there is a tree and it has some child nodes, and it has some child nodes so i can directly jump
         and pass in that data , I have to pass in that data by a its intermediate parent.
         
      ==> so basicallly If i want to pass my data to my itemList, first of all, I'll have to pass this data to my 
           [ restaurantCategory ], and Now my { restaurantCategory } will recieve this { dummydata }, Now
           this dummydata will pass to { itemsChilderen }, and Now I can access my dummydata inside my itemlist
           so basically i am passing my dummyData down as a props.

      ==> so Suppose, but think of react application which has so many deep level of nesting, supose there is a
        component it has its childeren, that childeren has its childeren, and there are like 7 or 8 levels of
        nesting , and supose if you have to pass data from parent to childeren, will you do this??

      ==>so when we are passing the data the { restaurantCategory } has nothing to do with this dummy. 
      It is just have to passen to this itemList. It is not using it internally, It is just passing it

      ==> so its not a good way to just keep on passing it props like this

      ==> AND THIS CONCEPT IS KNOWN AS PROPS DRILLING, BCZ YOU ARE DRILLING THE PROPS.

      ==> SUPPOSE IF I WANT MY PROPS INSIDE MY { ITEM LIST }, I AM DRILLING IT DOWN AND I BRING IT UP TO THE 
          BOTTOM. THAT IS KNOWN AS " PROP DRILLING ".


          ==> Without props and state react components does not exist and without compoent noting exsit.

          ==> bcz in react everything is a component, compoent has their own state and props. that what component
          is built of.

          ==> But we should avoid prop drilling, so suppose if we have to passin data 1 or 2 levels. This is 
          still Okay, if we needed this data in itemList that is still okay but what if our data is present 
          somewhere , and we want to access that data somewheere else, how would i do that 

          ==> And In a large application, this is a common senario, where sometimes we need to have some kind of
          a global data that I can access anywhere in my app whereEver i am, whatever nested level I am, wheather
          I am in header, wheather I am in footer, Wheather i am in itemList whather i am in cards, wheather I am
          in any place i want to access some data, How we can do that?

          ==> For that react gives us a super power and that super power is known as { REACT CONTEXT }.
          
          ==> SO REACT GIVES US ACCESS SOMETHING KNOWN AS REACT CONTEXT .

          ==> AND  While we can use context we can just avoid props drilling, we should not be passing anything.






          ##########   2:19:34    ################

          ==> LETS CREATE REACT CONTEXT 
          ==> context is a global thing, lets create context in utils.
          ==> lets call it as usercontext that keep the information about  loggedin user.
          ==> this context assume that this is an global kind of an object for react



          ==> This is amazing!!! , I can use this data anywhere, At whatever level I want to, Its kind of like
             global thing, I  just have to write this one line and I can access it from that global space, this is 
             the power of context .

             ==> SHOULD WE KEEP ALL THE DATA INSIDE THE CONTEXT??

             ==> If we keep all the data inside the context, then we dont have to pass in props, then there is no
               need of props we dont have to pass in data inside components through props, but that is not the case.

       ==> Only the data which you are using at multiple places or you feel that It can be used at multiple places
         that is where you will use your context , dont put like all data inside it, It does not make sense 


         ==> YOU CAN ACCESS IT ANYWHERE YOU WANT TO.

        //  2:29:23

        ==> In class base components, we do not have hooks, so we can not use { useContext } over here.
        ==> So how can i access that context, 
        ==> It's very easy but the way is different --- first import it
        ==> So How will you use it?? you can do something like a 
        ==> [ UserContext.Consumer ], you can write this , so what is this?
        ==> So basically when you create a context, react gives you the power of [ consumer ] as well .
        ==> so you have 2 ways to access that context, one way is by using a hook.

        ==> like this==   const { loggedInUser} = useContext(UserContext);
        ==> that the vary common way { Most Used Way } and whenever you are using a context use it like this 
        ==> This is the standderd way now with functional component 
    

        //     ############## 2:31:52    ##################


        ==> but in class base component, You dont have hooks, then you can use it like this 
        ==>   [ <UserContext.Consumer/>]  
        ==> and inside this you will have to have a JSX, which has a callback function

        ==> and this callback function gets access to that data, and this data is the context data.

      ==> [ <UserContext.Consumer/>], we used it like a component, this is not a hook.
      ==> And In that component, we have a callback function, 
              {(data)=>console.log(data)}

      ==> this is a function that gets data inside it.
      ==> who passes the data, react take care of everything, It gives you to access this data.



       <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
        </UserContext.Consumer>


      ==> So We used { userContext.Consumer }, and We used it like a component, This is a component, This is 
      not a hook, In that component, In that component, we have a callback function,
       this is a function that gets {data} inside it,


        <UserContext.Consumer>
            {(data)=><h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>


        //   ############# 2:34:24


      ==> Who passes the data. react takes care of everything, it gives you access to the data,
         i can extract the {loggedIn User} , 
         we give this, as a piece of JSX, <h1>{data.loggedInUser}</h1>,
         this will return a JSX, and it will print the   { h1 }  tag.

      ==> so we have got this { default User }.

      ==> so <UserConsumer.Consumer>, you can consume it inside in our class based component,
      ==> And you can use it  hooks also, 

      ==> BOTH ARE THE WAYS TO CONSUME THE CONTEXT 

      ==> SO THIS IS ABOUT READING THE CONTEXT.

      ==> So In real life, this is the { default Value } inside our context, what if we want to change the value
        of { userContext }, what if we want to not use the default value but suppose i logged in, if i logged in
      as a user, if i have some authentication written in my app. and i loggedIn, how can i modify this.


      ==> Let us see that,------------ so LET'S GO TO THE ROOT LEVEL:------------------------------

              #####################   2:35:40 ##################

      ==> 



          
         
      
      

































         

























    





















             />






       






        




        */