$(document).ready(function() {

    var today = moment();
    var currentHour;
    var savedTasks = [];

    // Displays the current date in the header.
    $("#currentDay").text(today.format("dddd, MMM Do"));

    // Gets the current hour and then runs a loop to compare the current hour with the hour of each text area.
    // The text area background is then changed based on the current hour.
    var getHour = function () {
        currentHour = moment().format("H");
        for (i = 9; i < 18; i++) {
            var hourBlock = $("#hour-" + i + "");
            if (i > currentHour) {
                hourBlock.children().eq(1).addClass("future");
                hourBlock.children().eq(1).removeClass("present");
                hourBlock.children().eq(1).removeClass("past");
            } else if (i == currentHour) {
                hourBlock.children().eq(1).addClass("present");
                hourBlock.children().eq(1).removeClass("future");
                hourBlock.children().eq(1).removeClass("past");
            } else {
                hourBlock.children().eq(1).addClass("past");
                hourBlock.children().eq(1).removeClass("present");
                hourBlock.children().eq(1).removeClass("future");
            }
        }
    }    
    getHour();
    // Runs the getHour function once every second to dynamically update the page.
    setInterval(getHour, 1000);

    // 
    $(".saveBtn").on("click", function() {
        console.log("click");
        var textValue = $(this).siblings(".description").val();
        var textTime = $(this).parent().attr("id");
        console.log(textValue);
        console.log(textTime);
        localStorage.setItem(textTime, textValue);

        // var saveObject = {
        //     Hour: textTime,
        //     Task: textValue
        // }

        // localStorage.setItem("Schedule", JSON.stringify(saveObject));


        // $(".description").each(function(index) {
        //     console.log(index + 1 + ": " + $(this).val())
        // })


    })















})