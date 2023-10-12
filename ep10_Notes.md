
<!-- 
/*

  normal CSS

1)- scss

2)- Styled components

3)- material UI , Chankra UI , 
    Ant library -- 2nd most popular UI library 


big companies they use different libraries [ these are like css framework ] and these libraries and frameworks makes our life very very esay .

Material UI  -- It already has a prebuilt CSS inside it, in this you get prebuilt component

--------------benefits of Css libraries and framework--------------------



1)- Tailwaid CSS :- it works along with react, but it also works with all the framework available. 
                     it is a very generic framework, it works with react, it works with react, angular and different
                     other UI framework.

        2)- it works with normal HTML, CSS, JAVASCRIPT also.

        3)- there are various ways to install tailwaid CSS, but 

    == > but We have to install in a different way, this is not an normal installation that we have to do,
        basically we will go to framework guides, and we will choose parcel bcz we will choose parcel 
        so we will have to choose parcel over here

    == > if you are using { create-react-app } so choose create react app, if you are using angular then use angular
       guides, if you are using next, use next guide, bcz our project using parcel so i use parcel so i will see 
       how to install tailwaid CSS with parcel. 


1)- you get prebuilt component, you dont have to do anything just import this in your app.
 so this is the beautiful thing about libraries CSS frameworks.

 ==> POST CSS :- Post CSS is a tool for transforming CSS with javascript basically if you have to transform your CSS
                 inside javascript, you use post CSS. so tailwaid CSS uses post css so you dont have to study postcss. bcz taiwaid css behind the scenes uses post css. 

==> npx tailwaid init :-- npx means we are invoking, we are executing tailwaid css, that means we are initializing
                         the tailwaid css into our tailwaid repositry 
                    -- when we do  [ npx tailwaid init ], it will create [ tailwind.config.js] for us. it created a
                    new file for us which is known as tailwind.config.js, this is our configuration file for our 
                    tailwind CSS, so this is the configuration file which is automatically created when we excute this packge using npx tailwind css init. 

    ############ this is for parcel guide

    MERA VALA CREATE REACT APP SE BANA HAI, SO I DON'T NEED IT 

    ==> so now we have got configuration for our tailwind, now we will create a configuration for our post css also.
       now we will have to create our post css file also, a configuration file for post css also. 
       nd docs say create .postcssrc file , so goto the root section and create a rc file 


                                <!--      TIME :==  19:30  -->

   <!-- 
   
   ==> so .postcssrc is a configuration file for post css 
   ==> and tailwind.config.js is a configuration for tailwind 
   ==>  for post css, you have to write this , you have to basically copy this thing and paste this.

   {
  "plugins": {
    "tailwindcss": {}
  }
}
in .postcssrc file 

that means postcssrc, it means that, you have to tell postcssrc that we are using tailwind over here 

########## this is for parcel { when you u use parcel }

--- so will postcssrc do, if you have to use tailwind, so your parcel have to use postcssrc to read tailwind,
   bcz we are using parcel, so parcel, your bundler will use postcssrc is used to understand tailwind 


--- so postcssrc is kind of a way that our project understand that what is written inside the tailwind 

 that is how you use, that is all you need to understand poastcss for writing tailwind. 


                       #############################################

1)- Noq let us configure our tailwind, so you must be thinking, we already have this configuration right but
   there is a silght modifiaction that we have to do in our tailwind config file as well. 
   so what is that modification.

2)- It says that inside our [ content ] we need to write this, we have to give this configuration ,
    so what is this configuration doing ,
    this configuration means this content attribute takes a array, takes a list, a list of all the file where i can use my tailwind css 

3)- this array takes the confiuration that what all places are we going to use tailwind ,
   so with this { regex kind of expression}   content: [  "./src/**/*.{html,js,jsx,ts,tsx}" ],
    we are teliing tailwind that tailwind can be used inside our html files,
    tailwind can be used inside our js files,
    tailwind can be used inside our jsx files,
    tailwind can be used inside our ts files,
    tailwind can be used inside our tsx files

4)- So right now, we are saying that anywhere in your project whereever you find any of these file,
   html file, js file, jsx file, tsx file, you can find tailwind anywhere .
   so this is a way we are telling our project that we can use tailwind in any of these files which are using this
   extension, so any file which are inside the { src } folder {**/*} that means any where under our { src } folder,
   and have one of these extensions, we can use tailwind over there 

NOW OUR TAILWIND CONFIGURATION IS DONE.

---Now our project will track where taildwind classes are there and it will automatically pickup and unnderstand tailwind css as we use it.


 content: [  "./src/**/*.{js,jsx,ts,tsx}" ],

--- Right now I am just using html and js files in my project so that is why 

 just keep this html file and js file over here as well.

  content: [  "./src/**/*.{html, js}" ],

  --- so what ever file you are using keep all these extansion name over here as well. 

  SO THIS IS THE CONFIGURATION DONE FOR TAILWIND,
  DONE FOR POSTCSS 

                  #################  RECAP   ###################

1)- Till now what we have done is first of all I have installed 

my tailwind css and postcss  {note:- ye bta rha hai bcz he had used parcel guide mere m only tailswind hai.}

using npm install then we wrote { npx tailwind init}, that created a configuration our tailwind 

=> 3)- then we created a configuration for our postcss that was the 3rd step.

=> 4)- one more step was to just add this content, this is the place where we add what files we can find tailwind css in 

==> 5)- Now we have to write this inside our index.css file 

those three line

 @tailwind base;
@tailwind components;
@tailwind utilities;

and we are done

<!--    TIME : -- 25:00  -->







 content: [  "./src/**/*.{js,jsx,ts,tsx}" ]



   
   
   
   
   
   
   
   
   
   
   
   
   
   -->









*/ -->