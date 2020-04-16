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
});
// create jq func that checks all userInput class items (when saveButton is changed)

// use momentjs to append "today's date" to page
var displayDate = moment().format('LL')
$("#currentDay").text(displayDate)
// use momentjs for current time (for past, present, future slots)


// select all timeslots on page - queryselectorall
// grab data time from each hour slot 
// grab current time from moments - twentyfour-hour format

// compare the data time to current time
// depending on data-time <>= is where you assign past, present, future - .addclass

// capture value of user input
// set value to a variable 
// within the block time-frame, capture/connect correct time slot
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
// after all necessary information has been captured, we can save to local storage

// on-click event listener for the save button

// BONUS add a delete button for cleaing local storage values



