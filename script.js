// console.log(moment().format('LL'))
// page loads
// get items from local storage to the page - set
$(document).ready(function () {
    var r = [ "", "", "", "", "", "", "", "", "" ]
    if (localStorage.getItem("inputData")) {
        var inputFields = $(".userInput")
        var inputData = JSON.parse(localStorage.getItem("inputData"))
        console.log(inputFields)
        for (let i = 0; i < inputFields.length; i++) {
            $(inputFields[i]).val(inputData[i])
            // console.log($(inputFields[i]))
            // console.log(inputData[i])
        }
    }
    else {
        localStorage.setItem("inputData", JSON.stringify(r))
    }
    checkTime()
});

function checkTime() {
    var displayDate = moment().hours()
    console.log(displayDate)
    var hours = $(".hourSlot")
    var userInput = $(".inputArea")
    for (let i=0; i < hours.length; i++) {
        let currentValue =  parseInt($(hours[i]).attr("data-time"))
        console.log(currentValue, displayDate)
        if (displayDate === currentValue) {
            $(userInput[i]).css("background-color", "#ff6961")
            console.log("present")
        }
        else if (displayDate < currentValue) {
            $(userInput[i]).css("background-color", "#77dd77")
            console.log("future")
        }
        else {
            $(userInput[i]).css("background-color", "#d3d3d3")
            console.log("past")
        }
    }
}

// use momentjs to append "today's date" to page
// use momentjs for current time (for past, present, future slots)
var displayDate = moment().format('LL')
$("#currentDay").text(displayDate)

// capture value of user input
// set value to a variable 
// within the block time-frame, capture/connect correct time slot
// create jq func that checks all userInput class items (when saveButton is changed)
$(".saveButton").click(function () {
    // console.log(this)
    var input = $(this).parent().prev().children('.userInput').val();
    // console.log(input)
    var timeSlot = $(this).parent().prev().prev().children(".hourSlot").data("time");
    // console.log(timeSlot + "s")
    var storageData = JSON.parse(localStorage.getItem("inputData"))
    console.log(storageData[timeSlot - 9])
    storageData[timeSlot - 9] = input
    // console.log(storageData)
    // console.log(input)
    localStorage.setItem("inputData", JSON.stringify(storageData))
});

// user sees their saved information
// user inputs a value and hits "save"
// when user hits "save" it goes to local storage & will stay if page is refereshed
$(".saveData").click(function () {
});




