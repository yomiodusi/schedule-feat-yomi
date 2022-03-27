// Today's Date
var todayDate = moment().format('LLLL');
$("#currentDay").html(todayDate);

// anycode inside here is ready to be executed. So this is the selector for my button
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
      console.log("click")
    })
})

// function to store variable when clicked