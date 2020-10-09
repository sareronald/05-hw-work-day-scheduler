$(document).ready(function () {
  // display todays date and time at the top of the schedule planner
  var date = $("#todays-date");

  // var todos = [];

  readStorage();

  function refresh() {
    var now = moment().format("MMMM Do YYYY");
    var time = moment().format("HH:mm");
    $(date).text(now + " // ");
    $(date).append(time);
    var h = moment().hour();

    for (var row = 9; row <= 17; row++) {
      var currentRow = $("#row" + row);
      currentRow.removeClass(["past", "present", "future"]);

      if (row < h) currentRow.addClass("past");
      else if (row > h) currentRow.addClass("future");
      else if (row === h) currentRow.addClass("present");
    }
    // update the page, time & row colour every second
    setTimeout(refresh, 1000);
    // console.log("setTimeout");
  }
  refresh();
});
// allow the user to add comments into their day planner textarea
// give give each corresponding button a data-time, then make an event listener
for (let i = 9; i !== 6; i++) {
  // console.log(i);
  if (i >= 12) {
    i = 0;
    continue;
  }
}

$(".save-button").click(function (event) {
  event.preventDefault();
  let time = parseInt($(this).data("time"));
  let entry = $(`#entry${time}`).val();
  console.log(entry);
  // do I need to make let entry global?
  // we normally set up a variable with an empty array to fill with this info?
  localStorage.setItem(`entry${time}`, entry);
});

function readStorage() {
  $("textarea.entry").each(function (index, element) {
    var currentId = element.id;
    var currentValue = localStorage.getItem(currentId);
    if (currentValue) $(element).val(currentValue);
    // console.log(currentId);
  });
}
