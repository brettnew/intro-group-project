// Back-end
function Character(name){
  this.nameCharacter = name;
};




// Front-end
$(document).ready(function(){
  $("#---").submit(function(event){
    event.preventDefault();
    var name = $("input#---").val();

    var newCharacter = new Character(name);

    $("#---").show();
    $("#---").text(newCharacter.nameCharacter);



  });
});
