// playing sound on a click
for (var i = 0; i < 9; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    animation(buttonInnerHtml);

  });
}
// playing sound on keyboard press
document.addEventListener("keypress",function (event) {
  makeSound(event.key);
  animation(event.key);
});

function makeSound(key){
  switch (key) {
    case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;
    case "e":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
      break;
    case "v":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
      break;
    case "y":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
      break;
    case "a":
    var stick = new Audio("sounds/stick.wav");
    stick.play();
      break;
    case "n":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
      break;
    case "s":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
      break;
    case "h":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;
    case "i":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
      break;
    default: console.log(innerHTML);

  }
}
// adding animation
function animation(currentKey){
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);

}
