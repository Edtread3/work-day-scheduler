



$(document).ready(function () {
   // sets current date , month/day/year
    $('#currentDay').text(dayjs().format('MMM D,YYYY'));
    // add click event to save button to send text and time to local storage
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings("description").val();
      var time = $(this).parent().attr("id");

   
   

    });
    
     function timeCompare() {
    
    $('.time-block').each(function () {
    
     // create variable that displays current hour
    var currentTime = parseInt(dayjs().format("H"));
    var hourBlock = parseInt($(this).attr("id").split("-")[1]);
 
    // if statement that would compare hours selected to current hour set as past , present , or future


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

// setting text, and time to localStorage

 // setting work day times to get from localStorage


for (i = 9; i <= 17; i++) {
   $("#hour-" + i +".description").val(localStorage.getItem("hour" + i));
 
}
    
function saveDescription() {
   const hour = $(this).parent().attr('id').split("-")[1];
   const text = $(this).siblings(".description").val();
   console.log(text)
   localStorage.setItem(hour, text)

}

$(".saveBtn").click(saveDescription)