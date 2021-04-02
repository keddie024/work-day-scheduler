$(document).ready(function() {

    var today = moment();
    var currentHour;
    $("#currentDay").text(today.format("dddd, MMM Do"));

    var getHour = function () {
        currentHour = moment().format("H");
        if (currentHour == 30) {
            console.log("Works");
        }
    }    
    getHour();
    setInterval(getHour, 1000);

    
    

    $(".saveBtn").on("click", function() {
        console.log("click");
        var textValue = $(this).siblings(".description").val();
        var textTime = $(this).parent().attr("id");
        console.log(textValue);
        console.log(textTime);
    })

















})