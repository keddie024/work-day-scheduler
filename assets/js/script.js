$(document).ready(function() {

    var today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do"));

    $(".saveBtn").on("click", function() {
        console.log("click");
        var textValue = $(this).siblings(".description").val();
        var textTime = $(this).parent().attr("id");
        console.log(textValue);
        console.log(textTime);
    })

















})