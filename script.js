$(document).ready(function () {
    // display todays date and time at the top of the schedule planner
    var date = $("#todays-date");
    var now = moment().format("MMMM Do YYYY");
    var time = moment().format("HH:mm");
    $(date).text(now + " // ");
    $(date).append(time);

    // refer back to calculator - amount per person - Unit 4 Activity 13
    // allow the user to add comments into their day planner textarea  
    var nineEl = document.querySelector("#entry9am");
    var tenEl = document.querySelector("#entry10am");
    var elevenEl = document.querySelector("#entry11am");
    var twelveEl = document.querySelector("#entry12am");
    var oneEl = document.querySelector("#entry1pm");
    var twoEl = document.querySelector("#entry2pm");
    var threeEl = document.querySelector("#entry3pm");
    var fourEl = document.querySelector("#entry4pm");
    var fiveEl = document.querySelector("#entry5pm");
    var saveBtn = document.querySelector(".save-button");

    var thingsToDo = [];
    // getting the value for 9am
    function toDoList(event) {
        event.preventDefault();
        localStorage.setItem('entry9am', nineEl.value);
        var nineToDo = nineEl.value;
        thingsToDo.push({ nineToDo: nineToDo });

    }
    console.log(thingsToDo);
   

    // function saveThisToo {
    // localStorage.setItem("something",JSON.stringify(something));
    // }
    // var savedToDo = JSON.parse(localStorage.getItem)
    saveBtn.addEventListener("click", toDoList);
    // console.log(saveBtn);

    nineEl.innerHTML = localStorage.getItem('entry9am')

    // click on the save button and save todo onto the list in local storage
    //$(".save-button").on(click, function(){

    // var entry9am = $("#entry9am");
    // console.log(entry9am.val());
    // each timeblock is colour coded to indicate past, present or future?

})