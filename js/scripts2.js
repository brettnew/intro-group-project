//Business Logic
function Character(name){
  this.nameCharacter = name;
};



//User Interface Logic
$(document).ready(function(){
  $("form#intro-form").submit(function(event){
    event.preventDefault();
    var name = $("input#player1").val();
    var newCharacter = new Character(name);
    $(".intro-page").hide();
    $("#decision1").show();
    $("#player-name").text(newCharacter.nameCharacter);
  });
  $("form#decision-form").submit(function(event) {
    event.preventDefault();
    var decision1 = $("select#option1").val();
    if (decision1 === "1") {
      $("#decision-2a").show();
      $("#decision1").hide();
    } else if (decision1 === "2") {
      $("#decision-2b").show();
      $("#decision1").hide();
    }
  });
  $("form#decision2a-form").submit(function(event) {
    event.preventDefault();
    var decision2a = $("select#option2a").val();
    if (decision2a === "1") {
      $("#decision-3a").show();
      $("#decision-2a").hide();
    } else if (decision2a === "2") {
      $("#result1").show();
      $("#decision-2a").hide();
    }
  });
  $("form#decision2b-form").submit(function(event) {
    event.preventDefault();
    var decision2b = $("select#option2b").val();
    if (decision2b === "1") {
      $("#result2").show();
      $("#decision-2b").hide();
    } else if (decision2b === "2") {
      $("#decision-3b").show();
      $("#decision-2b").hide();
    }
  });
  $("form#decision3a-form").submit(function(event) {
    event.preventDefault();
    var decision3a = $("select#option3a").val();
    if (decision3a === "1") {
      $("#result3").show();
      $("#decision-3a").hide();
    } else if (decision3a === "2") {
      $("#result5").show();
      $("#decision-3a").hide();
    }
  });
  $("form#decision3b-form").submit(function(event) {
    event.preventDefault();
    var decision3b = $("select#option3b").val();
    if (decision3b === "1") {
      $("#result4").show();
      $("#decision-3b").hide();
    } else if (decision3b === "2") {
      $("#result2").show();
      $("#decision-3b").hide();
    }
  });
});
