$(document).ready(function () {
    // display todays date and time at the top of the schedule planner
    var date = $("#todays-date");

    function refresh() {
        var now = moment().format("MMMM Do YYYY");
        var time = moment().format("HH:mm");
        $(date).text(now + " // ");
        $(date).append(time);
        var h = moment().hour();


        for (var row = 9; row <= 17; row++) {
            var currentRow = $("#row" + row);
            currentRow.removeClass(["past", "present", "future"])

            if (row < h)
                currentRow.addClass("past");
            else if (row < h)
                currentRow.addClass("future");
            else if (row === h)
                currentRow.addClass("present");
        }

        setTimeout(refresh, 1000);
        console.log("setTimeout");
    }
    refresh();

    // refer back to calculator - amount per person - Unit 4 Activity 13
    // allow the user to add comments into their day planner textarea  
    // var element9 = document.querySelector("#entry9");
    // var element10 = document.querySelector("#entry10");
    // var entryEl = document.querySelector(".entry");
    // var saveBtn = document.querySelector(".save-button");

    // var thingsToDo = [];

    // // getting the value for 9am
    // // function toDoList(event) {
    //     event.preventDefault();
    //     localStorage.setItem('entry9', element9.value);
    //     var nineToDo = element9.value;
    //     thingsToDo.push({ nineToDo: nineToDo });
    // localStorage.setItem('entry10', tenEl.value);
    // var tenToDo = tenEl.value;
    // var elevenToDo = eleven.value;
    // thingsToDo.push({elevenToDo: elevenToDo });
    // thingsToDo.push({twelveToDo: twelveToDo });
})
// give give each corresponding button a data-time, then make an event listener like this?
document.querySelector(".save-button").addEventListener("click", function (event) {
    event.preventDefault();
    let time = parseInt($(this).data("time"));
    let entry = $(`.entry${time}`.val());
    localStorage.setItem(`entry${i}`, entry)
})



    // // click on the save button and save todo onto the list in local storage
    // saveBtn.addEventListener("click", toDoList);
    // element9.innerHTML = localStorage.getItem('entry9')

    // rows change colour as the time continues
    // if HH = HH make it this colour blue and text white
    // var hour = moment(HH) 
    // hr = (new Date()).getHours();

    // changing row colours according to past, present, future
    //?is that the right ID?




    // var hour = 10;
    // if (hour < 10) {
    //     document.getElementById("entry10").className = "past";
    // }
    // // else in the future light grey
    // else if (hour > 10) {
    //     document.getElementById("entry11").className = "future";
    // }
    // // else if it time is less than current time = white 
    // else (hour === 10)
    // document.getElementById("entry10").className = "present";
