/* Author: Justin Bachorik / Michael Dionne

*/

// almost all jQuery-based JS files start with this line of code. Essentially, it sets up an anonymous function that is called when the browser has parsed the DOM and is ready to be manipulated by Javascript / jQuery.  
$(document).ready(function() {
  // any lines of code here will execute as soon as the DOM is ready
  
  // declare a variable that is initialized to contain a jQuerified array of navigation links
  var $navLinks = $('#navigation a'); // note the use of CSS-style selectors for targeting elements; also note the prefixing of jQuery-initialized variables with a $ to distinguish them from other variables
  
  // declare a variable initialized to contain a jQuerified representation of the body element
  var $body = $('body');
  
  // store the current background color for later use
  var initialBackgroundColor = $body.css('background-color'); // returns the current value of the "background-color" css property on the "body" tag
  
  // declare a function to return a random color
  var getRandomColor = function() {
    
    // create random values for R, G, and B between 0 and 255, converted to hex
    var redVal = Math.floor(Math.random() * 256).toString(16);
    var greenVal = Math.floor(Math.random() * 256).toString(16);
    var blueVal = Math.floor(Math.random() * 256).toString(16);
    var color = '#' + redVal + greenVal + blueVal; // concatenate hex string
    return color; // pass the result back to the calling line of code
  }
  
  
  // set up an event handler for mousing over navigation links
  $navLinks.mouseover(function() {
    $body.css('background-color',getRandomColor());
  });
  
  $navLinks.mouseout(function() {
    $body.css('background-color', initialBackgroundColor); // reset the body's background color to the initial value
  });
  
});





