//Display Time
var timeDisplayEl = document.querySelector("#currentDay")

setInterval(function(){
    timeDisplayEl.textContent = moment().format("MMMM Do YYYY, h:mm:ss a")
}, 1000)

//Save Text Area


// Change color depending on time

var liveTime = $('#currentDay')
var hour9 = $("#9")

if (hour9 < liveTime) {
  $('#9').addClass('.past')
};


//Functionality with saving the notes
//listen for button clicks then save button
//Message prompts when saved to local file, by grabbing value inside text area



// Data that was saved upon closing browser remained
// Getting previous saved value using get item/set item 
// Get value from local storage
// Saved associated text area the value we retrieved from local storage

// functionality for changing background color. Time of day hours that passed
//time associated with each block
// moment.js grabbing time
//set up variable equal to current time of day using moment.js
//loop over blocks
// if blocks time < current time vairable -change time color to gray 
// else if the blocks time is equal to the current hour set it to red
//else - set to green

// display the current day on the page
// use moment to grab day 
//format it appropriatley 
// put it on the page using the paragraph tag in html doc

// saving local storage from text area