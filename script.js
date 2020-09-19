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
            else if (row > h)
                currentRow.addClass("future");
            else if (row === h)
                currentRow.addClass("present");
        }
        // update the page, time & row colour every second
        setTimeout(refresh, 1000);
        console.log("setTimeout");
    }
refresh();
})
// allow the user to add comments into their day planner textarea 
// give give each corresponding button a data-time, then make an event listener
for (let i = 9; i !== 6; i++) {
    console.log(i);
    if (i >= 12) {
        i = 0;
        continue;
    }
}
document.querySelector(".save-button").addEventListener("click", function (event) {
    event.preventDefault();
    let time = parseInt($(this).data("time"));
    let entry = $(`.entry${time}`).val();
    localStorage.setItem(`entry${i}`, entry);
})