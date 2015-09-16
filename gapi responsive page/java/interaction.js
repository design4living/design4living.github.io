src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">
$(document).ready(function(){
    $("img").hover(function(){
        $(this).css("border-color", "yellow");
        }, function(){
        $(this).css("border-color", "pink");
    });
});