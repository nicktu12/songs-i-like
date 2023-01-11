# Songs I Like as I Hear Them

A simple todo app for remembering songs I hear, as I am hearing them. Check out the [deployed application](https://magnificent-heliotrope-59ad89.netlify.app/) for yourself!

### To start:

`npm install`

and then

`npm start`

### Some Thoughts...

1. Looking through your code, where were you able to:
  * Make use of Pure Functions?
    * The application makes use of pure functions wherever possible. The need to sync the dom/local storage makes some functions not pure, as does the use of some global variables. Functions like newIdea(), hydrateDiv() and addError() showcase principles of pure functions. 
  * Make use of Higher Order Functions?
    * Both hydrateDiv() and drawIdeas() employ basic use of currying and higher order functions. Additionally, iterator methods used throughout the project are techincally higher order functions.
  * Make use of Closures?
    * There is use of closure in many of the functions that were curried - nested functions that are returned reference variables outside of them. 
    * I was definitely confused at times the difference between closures and curryed functions when implemented. Often times they can be present in the same functions. 
  * Make use of Curried Functions?
    * Both hydrateDiv() and drawIdeas() employ basic use of currying and higher order functions. 
    * How does currying employ the principles of FC?
  * Make use of Composition?
    * No.
2. How did you go about creating your data model? Where is it in your code?
    * I initially used the DOM for keeping track of the data model, but shifted my approach to use a global variable instead. 
3. How well were you able to separate your data model from the DOM logic? Where is that separation in the code?
    * I separated the code by comments, but considered using different files for DOM logic, data model logic and functional methods, but due to the already brief nature of the code kept it all in one file. 
