
$( ".box1" ).click(function() {
  $( ".box1" ).hide();
});

//2. show box 1
$("button").click(function(){
  $(".box1").show();
});

//3. change color on mouseover on box 1
$(".box1").on("mouseover", function() {
  $(this).css("background-color","red");
});

//4. change color on mouseout on box 1
$(".box1").on("mouseout", function() {
  $(this).css("background-color","green");
});

//5. enlarge using toggle on box 2
$( ".box2" ).click(function() {
    $(this).toggleClass("wide");
});
//6. slide up box 2
$(".box2").click(function() {
  $(this).slideUp("slow");
});
//7. click button to make box 2 reapper
$(".btn2").click(function(){
  $(".box2").show("slow");
});

//8. click to fade box 3 opacity to 20%
$( ".box3" ).click(function() {
  $(this).fadeTo( "slow" , 0.2);
});

//9. click btn to add border to box 3
$(".btn3").click(function(){
  $(".box3").css("border","3px solid gray");
});

//10. click to have box 4 slide down
$( ".box4" ).click(function() {
  $(this).slideDown( "slow" );
});

//11. appending an item to a list
$( "<li>berries</li>" ).appendTo( ".list1" );

//12. prepending an item to a list
$( "<li>pineapple</li>" ).prependTo( ".list1" );

//13. hide one list element then show on delay
$(".one").hide().delay(500).fadeIn(1200);

//14.
$("ul").before("<p>This is my list title that was added. </p>");

//15.
$("ul").after("<p>This is an after thought for the list. </p>");

//16. changed text color on list item
$(".two").css("color", "red");

//17.
$( ".photo1" ).on("mouseover", function() {
  $(this).fadeOut( "slow");
});

//18.
$( ".photo1" ).on("mouseout", function() {
  $(this).show( "slow");
});

//19.
$(".photoBtn").on("click", function(){
    $(".photo1").css("margin-left", "200px");
});

//20.
