/**********
Date: 10/1/2018
Author: Phu Vu
Class: CITW 165
Exercise: Exercise 4
**********/

(function() 
{  
    //Create a ticket object 
    var ticket = {
        name: 'J2Team Event',
        price: 75, 
        percentageDiscount: 45, 
        
        offerPrice: function() {
        var offerPrice = this.price * ((100 - this.percentageDiscount) / 100);
        return offerPrice;
        }
    }
  
    //Declare variables, get elements, and Write out the ticket name, ticket price, and the ticket discount
    var ticketName, ticketPrice, ticketDiscount;       
  
    ticketName = document.getElementById('ticketName');       
    ticketPrice = document.getElementById('ticketPrice');
    ticketDiscount = document.getElementById('ticketDiscount');
  
    ticketName.textContent = ticket.name;                     
    ticketPrice.textContent =  '$' + ticket.price.toFixed(2); 
    ticketDiscount.textContent = '$' + ticket.offerPrice();     
  


// PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
var expiresMsg; // Message displayed to users
var today;     // Today's date
var endMsg;    // The element that shows the message about the offer ending

function offerExpires(today) {
  // Declare variables within the function for local scope
  var weekFromToday, day, date, month, year, dayNames, monthNames;

  // Add 7 days time (added in milliseconds)
  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Create arrays to hold the names of days / months
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Collect the parts of the date to show on the page
  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();

  // Create the message
  expiresMsg = 'Offer expires next ';
  expiresMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
  return expiresMsg;
}

today = new Date();                             // Put today's date in variable
endMsg = document.getElementById('offerEnds');  // Get the offerEnds element
endMsg.innerHTML = offerExpires(today);         // Add the expiry message

// Finish the immediately invoked function expression
}());