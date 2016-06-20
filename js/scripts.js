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
    var decision1 = $("select#option1").val();


    $("#decision1").show();
    $("#player-name").text(newCharacter.nameCharacter);


    $("#button1").click(function(event) {
      event.preventDefault();
      if(decision1 === "1"){
        $("#decision-2a").show();
        $("#decision1").hide();
      } else {
        $("#decision-2b").show();
        $("#decision1").hide();
      }
    });




  });
});
