/*
<!--
    Bryan Cutkelvin
    2020
      -this javascript page is for educational purposes.
      -this script performs evaluation of the current time and prompts an
       applicable "moment of day" greeting to the user

-->
*/
var today = new Date();
var hourNow = today.getHours();
var greeting;

  if( hourNow > 18)
  {
    greeting = 'Good Evening 🌛'  //observe single quotes for '' string
  }
  else if( hourNow > 12)
  {
    greeting = 'Good Afternoon ☀️'
  }
  else if( hourNow >= 0)
  {
    greeting = 'Good Morning 🌞'
  }
  else
  {
    greeting = 'Welcome! 👋'
  }

document.write('<h3>' + greeting + '</h3>');
