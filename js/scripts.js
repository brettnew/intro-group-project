// Back-end
function Character(name){
  this.nameCharacter = name;
  // this.decision1 = decision1;
};

// Character.prototype.adventure = function() {
//
// }



// Front-end
$(document).ready(function(){
  $("form#intro-form").submit(function(event){
    event.preventDefault();
    var name = $("input#player1").val();

    var newCharacter = new Character(name);

    $("#decision1").show();
    $("#player-name").text(newCharacter.nameCharacter);

  });
  $("#button1").click(function(event) {
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
  $(".button2").click(function(event) {
    event.preventDefault();
    var decision2 = $("select.option2").val();
    alert(decision2);
    if ((decision2 === "1") || (decision2 === "4")) {
      $("#result1").show();
      $("#decision-2a, #decision-2b").hide();
    } else if ((decision2 === "2") || (decision2 === "3")) {
      $("#result2").show();
      $("#decision-2a, #decision-2b").hide();
    }
  });
});
