$(document).ready(function () {
    // display todays date and time at the top of the schedule planner
    var date = $("#todays-date");
    var now = moment().format("MMMM Do YYYY");
    var time = moment().format("HH:mm");
    $(date).text(now + " // ");
    $(date).append(time);
    // allow the user to add comments into their day planner textarea
    // refer back to calculator - amount per person - Unit 4 Activity 13
    var entry9am = $("#entry9am");
    console.log(entry9am.val());
    // click on the save button and save todo onto the list in local storage
    //$(".save-button").on(click, function(){
})
// each timeblock is colour coded to indicate past, present or future