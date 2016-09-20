//$(document).ready(function(){
    $(function() {
        
        $("#para").click(function(ev) {
          //$("#para")    //Same effect but two different things.....Para - rescans
       // $(this).fadeOut('slow','linear'); //says I dont have to look it up already have the id.
          $(ev.target).fadeOut('slow', 'linear');
        });

        $("h3")
        .css("text-decoration","underline");
     $("ul").find("li:first-child")
        .css("color", "red");
    });
