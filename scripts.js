$(()=>{
  var counter = 0;
function countDivs(){
  $(".droppable").each(function(index){
    counter = $(this).children(".draggable").length;
    $( this )
        .find( ".doing-counter" )
        .html( counter);
  });
};
function getActualCount(){
  $(".row").each(function(index){
    return $(this).children(".draggable").lengt;
  });
};

function getNewDiv(value){
  var newNote = $('.template').clone();
  newNote
    .removeClass('template')
    .css('display', 'block');
  return newNote;
};
function getNewCol(){
  var newCol = $('.colTemplate').clone();
  newCol
    .removeClass('colTemplate')
    .css('display', 'block')
    .css('background','pink');
  return newCol;
}
$("#addCol").on('click',function(){
  var clonedCol = getNewCol();
  $(clonedCol).clone().appendTo("#columns");
  $( ".droppable" ).droppable({
    drop: function( event, ui ) {
      ui.draggable.detach().appendTo($(this));
      countDivs();
    }
  });
});
$("#newTask").on('click', function(){
  var actualCounter = getActualCount();
  actualCounter +=1;
  var clonedDiv = getNewDiv(actualCounter);
  $(clonedDiv).clone().appendTo("#todo");
  $( ".draggable" ).draggable({
    opacity: 0.4,
    helper:"detach",
    containment:"document"
   });
   $(".taskBg").change(function(){
    $(this).find(".draggable").css("background-color",$(".taskBg").val());
  });
});
$(".container").on('click','button.archive',function(){
  $(this).find(".draggable")
  .clone()
  .appendTo("#archiveCol");
});

  $(".bg").change(function(){
    $("#full").css("background-color",$(".bg").val());
  });

    $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        ui.draggable.detach().appendTo($(this));
        countDivs();
      }
    });
    $( ".datepicker" ).datepicker();
    $( ".tabs" ).tabs();
});


// $( "#slider" ).slider({
// 	range: true,
// 	values: [ 17, 67 ]
// });


// $( "#tooltip" ).tooltip();