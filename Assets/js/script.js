// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
var curhour = dayjs().format('HH');

var dateEl = $("#currentDay");
var mainEl = $('#main');
var period = "AM";
var timeslots = [8,9,10,11,12,13,14,15,16,17];


//populate the header with date
$("#currentDay").text(today.format('MMM D, YYYY'));
console.log(curhour);


for (i = 0; i < 10; i++) {
  console.log(timeslots[i]);
  if (i < 4) {  period = "AM"} else {period = "PM"};
  if (timeslots[i] >= 13) { tSlot = timeslots[i] - 12} else { tSlot = timeslots[i]}
  var newslot = $('<div>');
  var newslot2 = $('<div>');
  var newtext = $('<textarea>');
  var newBtn = $('<button>');
  var newI = $('<i>');
  var checkStor = 'hour-' + tSlot;
  //compare current time to see how to color the slot with styling
  if (curhour > timeslots[i]) {
    newslot.attr('class','row time-block past');
  }
  else if (curhour == timeslots[i]) {
    newslot.attr('class','row time-block present');
   }
   else if (curhour < timeslots[i]) {
    newslot.attr('class','row time-block future');
   }
  newslot.attr('id','hour-'+tSlot);
  newslot2.attr('class','col2 col-md-1 hour text-center py3');
  newslot2.text(tSlot+period);
  newtext.attr('class','col-8 col-md-10 description');
  newtext.attr('rows',3);
  newBtn.attr('class','btn saveBtn col-2 col-md-1');
  newBtn.attr('aria-label','save');
  newI.attr('class','fas fa-save');
  newI.attr('aria-hidden','true');
//append the new attributes
  mainEl.append(newslot);
  newslot.append(newslot2);
  newslot.append(newtext);
  newslot.append(newBtn);
  newBtn.append(newI);
  newBtn.addEventlistener
  console.log(checkStor)
 //if there is local storage for that item populate it for that tie slot
  if ( localStorage.getItem(checkStor) !== null ) {
     newresultObj = localStorage.getItem(checkStor) ;
    console.log(localStorage.getItem(checkStor) + "True" + checkStor);
    newtext.text(localStorage.getItem(checkStor));
  }
}


//save the event to storate when save button clicked
$("button").click(function(){
  var savetime = $(this).parent('div').attr('id');
  var textToSave = $(this).parent('div').children('textarea').val();
  // var saveTS = { hourTS: savetime,
  //                textToSave: textToSave};
  console.log(savetime); console.log(textToSave);
  // console.log(JSON.stringify(saveTS));
  // console.log(timeslots[i]);
  localStorage.setItem(savetime,textToSave);
  
  console.log(localStorage.getItem(savetime) + "here");
});

$(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
