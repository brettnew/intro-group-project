//Business Logic
var resultArray = [];
var runningResults = [];

function Character(name, petName){
  this.nameCharacter = name;
  this.petName = petName;
};


//User Interface Logic
$(document).ready(function() {
  $("form#intro-form").submit(function(event){
    event.preventDefault();
    var name = $("input#player1").val();
    var petType = $("select#player-pet").val();
    var inputtedPetName = $("input#pet-name").val();
    var newCharacter = new Character(name, inputtedPetName);
    var personalityType = $("#player-personality").val();
    $(".intro-page").hide();
    $("#sidebar").slideToggle(2000);
    $(".player-name").text(newCharacter.nameCharacter);
    $(".petsName").text(newCharacter.petName);
    $("#decision1").slideToggle(2000);
    $("#chill").show();
    if(petType === "dog") {
      $(".dogPet").show();
      $("#dogIcon").show();
    } else if (petType === "cat") {
      $(".catPet").show();
      $("#catIcon").show();
    } else if (petType === "lizard") {
      $(".lizardPet").show();
      $("#lizardIcon").show();
    }
    if(personalityType === "shy") {
      $(".personality-shy").show();
    } else if (personalityType === "calm") {
      $(".personality-calm").show();
    } else if (personalityType === "angry") {
      $(".personality-angry").show();
    }
  });
  $("form#decision-form").submit(function(event) {
    event.preventDefault();
    var specialItem = $("select#special-item").val();
    var decision1 = $("input:radio[name=option1]:checked").val();
    if (decision1 === "1") {
      $("#decision-2a").fadeToggle().delay(1000);
      $("#decision1").hide();
      $("#chill").hide();
      $("#happy").show();
    } else if (decision1 === "2") {
      $("#decision-2b").fadeToggle().delay(1000);
      $("#decision1").hide();
      $("#chill").hide();
      $("#sad").show();
    }
    if (specialItem === "lucky-rock") {
      $("#luckyRock").show();
    } else if (specialItem === "locket") {
      $("#locket").show();
    } else if (specialItem === "mini-sewing-kit") {
      $("#sewingKit").show();
    }
  $("form#decision2a-form").submit(function(event) {
    event.preventDefault();
    var decision2a = $("input:radio[name=option2a]:checked").val();
    if (decision2a === "1") {
      $("#decision-3a").fadeToggle().delay(1000);
      $("#decision-2a").hide();
      $("#happy").hide();
      $("#sad").show();
    } else if (decision2a === "2") {
      $("#result1").show(3000);
      $("#happy").hide();
      $("#sad").show();
      $("#reset").fadeToggle().delay(1000);
      $("#decision-2a").hide();
    }
  });
  $("form#decision2b-form").submit(function(event) {
    event.preventDefault();
    var petType = $("select#player-pet").val();
    var decision2b = $("input:radio[name=option2b]:checked").val();
    if (decision2b === "1") {
      if ((specialItem=== "lucky-rock") && (petType === "lizard")) {
        $("#reset").fadeToggle().delay(1000);
        $("#result9").show(20);
        $("#magicLizard").show();
        $("#magicLizard").delay(2000).fadeOut(2000);
        $("#dad").delay(4002).fadeIn(4000);
        $("#decision-2b").hide();
      } else {
        $("#result2").show(3000);
        $("#decision-2b").hide();
        $("#reset").fadeToggle().delay(1000);
      }
    } else if (decision2b === "2") {
      $("#segway-2b").fadeToggle().delay(1000);
      $("#decision-2b").hide();
    }
  });
  $("#segway2b-btn").click(function() {
    $("#decision-3b").fadeToggle().delay(1000);
    $("#segway-2b").hide();
  })
  $("form#decision3a-form").submit(function(event) {
    event.preventDefault();
    var decision3a = $("input:radio[name=option3a]:checked").val();
    $("#happy").show();
    $("#sad").hide();
    if (decision3a === "1") {
      if (specialItem === "mini-sewing-kit") {
        $("#result8").show(3000);
        $("#reset").fadeToggle().delay(1000);
        $("#decision-3a").hide();
      } else {
        $("#result3").show(3000);
        $("#reset").fadeToggle().delay(1000);
        $("#decision-3a").hide();
      }
    } else if (decision3a === "2") {
      $("#result5").show(3000);
      $("#reset").fadeToggle().delay(1000);
      $("#decision-3a").hide();
      $("#happy").hide();
      $("#sad").show();
    }
  });
  $("form#decision3b-form").submit(function(event) {
    event.preventDefault();
    var decision3b = $("input:radio[name=option3b]:checked").val();
    if (decision3b === "1") {
      $("#decision-3c").fadeToggle().delay(1000);
      $("#decision-3b").hide();
    } else if (decision3b === "2") {
      if (specialItem === "locket") {
        $("#result7").show(3000);
        $("#reset").fadeToggle().delay(1000);
        $("#decision-3b").hide();
      } else {
        $("#result6").show(3000);
        $("#reset").fadeToggle().delay(1000);
        $("#decision-3b").hide();
      }
    }
  });
  $("form#decision3c-form").submit(function(event) {
    event.preventDefault();
    var decision3c = $("input:radio[name=option3c]:checked").val();
    if (decision3c === "1") {
      $("#result4").show(3000);
      $("#reset").fadeToggle().delay(1000);
      $("#decision-3c").hide();
    } else if (decision3c === "2") {
      $("#decision-2a").fadeToggle().delay(1000);
      $("#decision-3c").hide();
    }
  });
  $(".btn-reset").click(function(){
    $(".intro-page").fadeToggle().delay(1000);
    $("#reset").hide();
    $("#result-total").fadeToggle().delay(1000);
    for (var possibleResults = 1; possibleResults <10; possibleResults ++) {
      if ($("#result" + possibleResults).css("display") != "none") {
        resultArray.unshift(possibleResults);
      }
    }
    function compare(resultArray) {
      var displayArray = [], prev;
      resultArray.sort();
      for (var i = 0; i < resultArray.length; i ++ ) {
          if ( resultArray[i] !== prev ) {
              displayArray.push(resultArray[i]);
          }
          prev = resultArray[i];
      }
      return displayArray;
    }
    var endings = compare(resultArray);
    $("#result-sidebar").text(endings.length);
    $("#decision1, #decision-2a, #decision-2b,#segway-2b, #result1, #result2, #result3, #result4, #result5, #result6, #result7, #result8, #result9, #decision-3a, #decision-3b, #decision-3c, #reset, #sidebar, #result-total, #dad, .dogPet, .catPet, .lizardPet, .personality-shy, .personality-calm, .personality-angry, #happy, #sad, #chill").hide();
  });
  });
});
