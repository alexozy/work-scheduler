// display current time?
var dateDisplayEl = document.querySelector("#date-Display")
//makes the clock tick
setInterval (function () {
    dateDisplayEl.textContent = (moment().format('ddd, MMM Do YYYY, h:mm:ss a'));
}, 1000)

var currentTime = moment().hour();





// saveBtn Local Storage? 

// add onClick & annon function to localStorage.setItem (key,value). I need the key and value defined
// $(".saveBtn").on("click", function () {
//     var key = $(this).parent().attr("id").split("-")[1];
//   var value = $(this).parent().find(".description").val();
//   localStorage.setItem(key,value)
// });

// .each controls content inside () ; we are in charge of content in {}
$(".saveBtn").each(function (i, btn) {
  $(btn).on("click",function (){
    // we want to grab the info in textarea and not the actual button
    var value = $(this).siblings(".description").val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key,value)
  })
});