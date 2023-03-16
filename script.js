



$(document).ready(function () {
   // sets current date , month/day/year
    $('#currentDay').text(dayjs().format('MMM D,YYYY'));
    // add click event to save button to send text and time to local storage
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings("description").val();
      var time = $(this).parent().attr("id");
   
      // setting items text, and time to localStorage
      localStorage.setItem(text, time);

    });
    
    
     function timeCompare() {
    
    $('.time-block').each(function () {
    
     // create variable that displays current hour
    var currentTime = parseInt(dayjs().format("H"));
    var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
    
    // if statement that would compare hours selected to current hour set as past , present , or future
    console.log(currentTime);

     if (hourBlock == currentTime) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
     }
     else if (hourBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
     }
     else {  (hourBlock > currentTime) 
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
     }
     

   });


 };

 timeCompare ();
});     


 // setting work day times to get from localStorage
$("#hour-9.description").val(localStorage.getItem("hour9"));
$("#hour-10.description").val(localStorage.getItem("hour10"));
$("#hour-11.description").val(localStorage.getItem("hour11"));
$("#hour-12.description").val(localStorage.getItem("hour12"));
$("#hour-13.description").val(localStorage.getItem("hour1"));
$("#hour-14.description").val(localStorage.getItem("hour2"));
$("#hour-15.description").val(localStorage.getItem("hour3"));
$("#hour-16.description").val(localStorage.getItem("hour4"));
$("#hour-17.description").val(localStorage.getItem("hour5"));

//timeCompare();
    



