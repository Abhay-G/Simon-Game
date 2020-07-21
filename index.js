var buttonColors = ["red","blue","green","yellow"];
var gamePattrn = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function()
{
if(!started)
{
$("#level-title").text("Level " + level);
  nextSequence();
  started = true;
}


});

$(".btn").click(function()
{

  var userChosenColor = $(this).attr("id");
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  check(userClickedPattern.length-1);


});

function check(currentLevel)
{
 if(gamePattrn[currentLevel] === userClickedPattern[currentLevel])
   {
     if (userClickedPattern.length === gamePattrn.length)
     {
      setTimeout(function () {
          nextSequence();
                              }, 1000);
    }

}
else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);


    }
  }


function nextSequence()
{
   userClickedPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
    $("#level-title").text("Level " + level);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattrn.push(randomChosenColor);
    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
     playSound(randomChosenColor);
     level++;


}
function playSound(name)
{
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColor)
{
  $("#"+currentColor).addClass("pressed");
setTimeout(function()
{
  $("#"+currentColor).removeClass("pressed");
},100);
}
function startOver()
{
  level = 0;
  gamePattrn = [];
  started = false;
}
