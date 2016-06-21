//Business Logic
function Character(name){
  this.nameCharacter = name;
  this.choicesArray = [];
};



//User Interface Logic
$(document).ready(function() {
  $("form#intro-form").submit(function(event) {
    event.preventDefault();
    var name = $("input#player1").val();
    newCharacter = new Character (name);
    $("#decision1").show();
    $("#player-name").text(newCharacter.nameCharacter);

    $("form#decision-form").submit(function(event) {
      event.preventDefault();
      var decision1 = $("select#option1").val();
      newCharacter.choicesArray.push(decision1);
      if(newCharacter.choicesArray[0]==="1") {
        $("#decision-2a").show();
        $("#decision1").hide();
      } else {
        $("#decision-2b").show();
        $("#decision1").hide();
      }

    $("form#decision2a-form").submit(function(event) {
      event.preventDefault();
      var decision2a = $("select#option2a").val();
      newCharacter.choicesArray.push(decision2a);
      debugger;
      if(newCharacter.choicesArray[1]==="1") {
        console.log("hello");
      } else if (newCharacter.choicesArray[1]==="2") {
        $("#result1").show();
        $("#decision-2a").hide();
        $("#decision-2b").hide();
      } else if (newCharacter.choicesArray[1]==="3") {
        $("#result2").show();
        $("#decision-2a").hide();
        $("#decision-2b").hide();
      } else {
        console.log("else");
      }
    $("form#decision2b-form").submit(function(event) {
      event.preventDefault();
      var decision2b = $("select#option2b").val();
      newCharacter.choicesArray.push(decision2b);
      if(newCharacter.choicesArray[1]==="1") {
        console.log("hello");
      } else if (newCharacter.choicesArray[1]==="2") {
        $("#result1").show();
        $("#decision-2a").hide();
        $("#decision-2b").hide();
      } else if (newCharacter.choicesArray[1]==="3") {
        $("#result2").show();
        $("#decision-2a").hide();
        $("#decision-2b").hide();
      } else {
        console.log("else");
      }
      alert(newCharacter.choicesArray);
  });
  });
  });
  });
});
