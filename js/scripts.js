$(document).ready(function() {
  $(".formOne").submit(function(event) {
    var blanks = ["food", "place"];
    blanks.forEach(function(blanks){
      var userInput = $("input#" + blanks).val();
      $(".results").append("<li>" + userInput + "</li>");
    })
    event.preventDefault();
  //   var foodInput = $("input#food").val();
  //   var table = $(".results").append("<li>" + foodInput + "</li>");
  // var placeInput = $("input#place").val();
  //   var chair = $(".results2").append("<li>" + placeInput + "</li>");

    // var plant = table.push("orange", "red");
     // var languages = ['orange', 'bnana', 'apple'];


  });


});
