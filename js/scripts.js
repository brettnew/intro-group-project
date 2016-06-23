//Business Logic
var resultArray = [];
/////Audio Files
var dangerousLove = new Audio("sound/dangerous_love.wav");
var dreamy = new Audio ("sound/dreamy.wav");
var exciting = new Audio ("sound/exciting.wav");
var romanticDramatic = new Audio ("sound/romanticdramatic.wav");
var romanticSweet = new Audio ("sound/romanticsweet.wav");
var paradise = new Audio ("sound/paradise.wav");
/////Character Constructor
function Character(name, petName) {
  this.nameCharacter = name;
  this.petName = petName;
  this.resultArray = [];
};


//User Interface Logic
$(document).ready(function() {
  var name;
  var petType;
  var inputtedPetName;
  var personalityType;
  var specialItem;
  $("input#player1").click(function() {
    dangerousLove.loop = true;
    dangerousLove.play();
  });
/////Intro Form
  $("form#intro-form").submit(function(event){
    event.preventDefault();
    name = $("input#player1").val();
    petType = $("select#player-pet").val();
    inputtedPetName = $("input#pet-name").val();
    var newCharacter = new Character(name, inputtedPetName);
    personalityType = $("#player-personality").val();
    $(".intro-page").hide();
    $("#sidebar").slideDown(2000);
    $(".player-name").text(newCharacter.nameCharacter);
    $(".petsName").text(newCharacter.petName);
    $("#decision1").slideDown(2000);
    $("#chill").show();
    $("#special-item").val("");
/////Pet & Personality Statements
    if (petType === "dog") {
      $(".dogPet").show();
      $("#dogIcon").show();
    } else if (petType === "cat") {
      $(".catPet").show();
      $("#catIcon").show();
    } else if (petType === "lizard") {
      $(".lizardPet").show();
      $("#lizardIcon").show();
    }
    if (personalityType === "shy") {
      $(".personality-shy").show();
    } else if (personalityType === "calm") {
      $(".personality-calm").show();
    } else if (personalityType === "angry") {
      $(".personality-angry").show();
    }
    window.scrollTo(0,0);
  });
  $("select#special-item").click(function() {
    dangerousLove.pause();
    exciting.loop = true;
    exciting.play();
  });
/////Decision 1 Page
  $("form#decision-form").submit(function(event) {
    event.preventDefault();
    specialItem = $("select#special-item").val();
    var decision1 = $("input:radio[name=option1]:checked").val();
    if (decision1 === "1") {
      $("#decision-2a").fadeIn().delay(1000);
      $("#decision1").hide();
      $("#chill").hide();
      $("#happy").show();
      exciting.pause();
      romanticSweet.loop = true;
      romanticSweet.play();
    } else if (decision1 === "2") {
      $("#decision-2b").fadeIn().delay(1000);
      $("#decision1").hide();
      $("#chill").hide();
      $("#sad").show();
    }
/////Special Items Statements
    if (specialItem === "lucky-rock") {
      $("#luckyRock").show();
      $("#locket").hide();
      $("#sewingKit").hide();
    } else if (specialItem === "locket") {
      $("#locket").show();
      $("#luckyRock").hide();
      $("#sewingKit").hide();
    } else if (specialItem === "mini-sewing-kit") {
      $("#sewingKit").show();
      $("#luckyRock").hide();
      $("#locket").hide();
    }
    window.scrollTo(0,0);
/////Decision 2a Page
  $("form#decision2a-form").submit(function(event) {
    event.preventDefault();
    var decision2a = $("input:radio[name=option2a]:checked").val();
    if (decision2a === "1") {
      $("#decision-3a").fadeIn().delay(1000);
      $("#decision-2a").hide();
      $("#happy").hide();
      $("#sad").show();
      romanticSweet.pause();
      exciting.loop = true;
      exciting.play();
    } else if (decision2a === "2") {
      $("#result1").show(3000);
      $("#happy").hide();
      $("#sad").show();
      $("#reset").show().delay(1000);
      $("#decision-2a").hide();
      romanticSweet.pause();
      dreamy.loop = true;
      dreamy.play();
    }
    window.scrollTo(0,0);
  });
/////Decision 2b Page
  $("form#decision2b-form").submit(function(event) {
    event.preventDefault();
    petType = $("select#player-pet").val();
    var decision2b = $("input:radio[name=option2b]:checked").val();
    if (decision2b === "1") {
      if ((specialItem === "lucky-rock") && (petType === "lizard")) {
        $("#reset").show().delay(1000);
        $("#sad").hide()
        $("#happy").show();
        $("#result9").show(20);
        $("#magicLizard").show();
        $("#magicLizard").delay(2000).fadeOut(2000);
        $("#dad").delay(4002).fadeIn(4000);
        $("#decision-2b").hide();
        exciting.pause();
        romanticSweet.loop = true;
        romanticSweet.play()
      } else {
        $("#result2").show(3000);
        $("#decision-2b").hide();
        $("#reset").show().delay(1000);
        exciting.pause();
        dreamy.loop = true;
        dreamy.play();
      }
    } else if (decision2b === "2") {
      $("#decision-3b").hide();
      $("#segway-2b").fadeIn().delay(1000);
      $("#decision-2b").hide();
    }
    window.scrollTo(0,0);
  });
/////Segway Page
  $("#segway2b-btn").click(function() {
    $("#decision-3b").fadeIn().delay(1000);
    $("#segway-2b").hide();
    $("#sad").hide();
    $("#chill").show();
    window.scrollTo(0,0);
  });
/////Decision 3a Page
  $("form#decision3a-form").submit(function(event) {
    event.preventDefault();
    var decision3a = $("input:radio[name=option3a]:checked").val();
    $("#happy").show();
    $("#sad").hide();
    if (decision3a === "1") {
      if (specialItem === "mini-sewing-kit") {
        $("#result8").show(3000);
        $("#reset").show().delay(1000);
        $("#decision-3a").hide();
        exciting.pause();
        dreamy.loop = true;
        dreamy.play();
      } else {
        $("#result3").show(3000);
        $("#reset").show().delay(1000);
        $("#decision-3a").hide();
        exciting.pause();
        paradise.loop = true;
        paradise.play();
      }
    } else if (decision3a === "2") {
      $("#result5").show(3000);
      $("#reset").show().delay(1000);
      $("#decision-3a").hide();
      $("#happy").hide();
      $("#sad").show();
      exciting.pause();
      dangerousLove.loop = true;
      dangerousLove.play();
    }
    window.scrollTo(0,0);
  });
/////Decision 3b Page
  $("form#decision3b-form").submit(function(event) {
    event.preventDefault();
    var decision3b = $("input:radio[name=option3b]:checked").val();
    if (decision3b === "1") {
      $("#decision-3c").fadeIn().delay(1000);
      $("#decision-3b").hide();
      $("#chill").hide();
      $("#happy").show();
      exciting.pause();
      romanticSweet.loop = true;
      romanticSweet.play();
    } else if (decision3b === "2") {
      if (specialItem === "locket") {
        $("#chill").hide();
        $("#happy").show();
        $("#result7").show(3000);
        $("#reset").show().delay(1000);
        $("#decision-3b").hide();
        exciting.pause();
        paradise.loop = true;
        paradise.play();
      } else {
        $("#chill").hide();
        $("#sad").show();
        $("#result6").show(3000);
        $("#reset").show().delay(1000);
        $("#decision-3b").hide();
        exciting.pause();
        dreamy.loop = true;
        dreamy.play();
      }
    }
    window.scrollTo(0,0);
  });
/////Decision 3c Page
  $("form#decision3c-form").submit(function(event) {
    event.preventDefault();
    var decision3c = $("input:radio[name=option3c]:checked").val();
    if (decision3c === "1") {
      romanticSweet.pause();
      dangerousLove.loop = true;
      dangerousLove.play();
      $("#result4").show(3000);
      $("#reset").show().delay(1000);
      $("#decision-3c").hide();
    } else if (decision3c === "2") {
      $("#decision-2a").fadeIn().delay(1000);
      $("#decision-3c").hide();
    }
    window.scrollTo(0,0);
  });
/////Try Again/Reset Btn
  $(".btn-reset").click(function() {
    specialItem = "";
    petType = "";
    personalityType = "";
    $(".intro-page").show().delay(1000);
    $("#reset").hide();
    $("#result-total").show().delay(1000);
/////Tracking Results Functions
    for (var possibleResults = 1; possibleResults <10; possibleResults ++) {
      if ($("#result" + possibleResults).css("display") != "none") {
        resultArray.unshift(possibleResults);
      }
    }
    function compare(resultArray) {
      var displayArray = [], prev;
      resultArray.sort();
      for (var resultArrayElements = 0; resultArrayElements < resultArray.length; resultArrayElements ++ ) {
          if ( resultArray[resultArrayElements] !== prev ) {
              displayArray.push(resultArray[resultArrayElements]);
          }
          prev = resultArray[resultArrayElements];
      }
      return displayArray;
    }
    var endings = compare(resultArray);
    $("#result-sidebar").text(endings.length);
    $("#decision1, #decision-2a, #decision-2b,#segway-2b, #result1, #result2, #result3, #result4, #result5, #result6, #result7, #result8, #result9, #decision-3a, #decision-3b, #decision-3c, #sidebar, #dad, .dogPet, .catPet, .lizardPet, .personality-shy, .personality-calm, .personality-angry, #happy, #sad, #chill, #luckyRock, #locket, #sewingKit, #dogIcon, #lizardIcon, #catIcon").hide();
/////Audio Files
    dangerousLove.loop = true;
    dangerousLove.play();
    dreamy.pause();
    exciting.pause();
    romanticDramatic.pause();
    romanticSweet.pause();
    paradise.pause();
  });
  });
});
