//Business Logic
function Character(name, pet){
  this.nameCharacter = name;
  this.pet = pet;
};



//User Interface Logic
$(document).ready(function() {
  $("form#intro-form").submit(function(event){
    event.preventDefault();
    var name = $("input#player1").val();
    var pet = $("select#player-pet").val();
    var newCharacter = new Character(name);

    $(".intro-page").hide();

    $(".player-name").text(newCharacter.nameCharacter);

    $("#decision1").show();
    if(pet === "dog") {
      $(".dogPet").show();
    }
  });
  $("form#decision-form").submit(function(event) {
    event.preventDefault();
    var decision1 = $("input:radio[name=option1]:checked").val();
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
    var decision2a = $("input:radio[name=option2a]:checked").val();
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
    var decision2b = $("input:radio[name=option2b]:checked").val();
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
    var decision3a = $("input:radio[name=option3a]:checked").val();
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
    var decision3b = $("input:radio[name=option3b]:checked").val();
    if (decision3b === "1") {
      $("#decision-3c").show();
      $("#decision-3b").hide();
    } else if (decision3b === "2") {
      $("#result2").show();
      $("#decision-3b").hide();
    }
  });
  $("form#decision3c-form").submit(function(event) {
    event.preventDefault();
    var decision3c = $("input:radio[name=option3c]:checked").val();
    if (decision3c === "1") {
      $("#result4").show();
      $("#decision-3c").hide();
    } else if (decision3c === "2") {
      $("#decision-2a").show();
      $("#decision-3c").hide();
    }
  });
});
