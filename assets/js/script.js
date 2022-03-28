// Today's Date
var todayDate = moment().format('LLLL');
$("#currentDay").html(todayDate);

// anycode inside here is ready to be executed. So this is the selector for my button
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var activity = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, activity);
    })

// code for color coding time block based on current time
    function getHours() {
        
        var timeNow = moment().hours();

        $(".time-block").each(function () {
            var chosenTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (chosenTime < timeNow) {
                $(this).addClass("past");
            }
            else if (chosenTime === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })

    }
    getHours();

})


// code to make descriptions stay when user refreshes site
for(var i=8; i < 16; i++) {
    localStorage.getItem(hour, activity);
    }