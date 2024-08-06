var numberOfDrumButton = document.querySelectorAll(".drum").length;  //To get number of drum button

//to access every button and changing each button index
for (var i =0; i<numberOfDrumButton; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        //to get the property in the inner Html
        var buttonInnerHTML = this.innerHTML;    

       sound(buttonInnerHTML);
    });
}

//When key board is pressed
document.addEventListener("keydown", function(event){

var keyboad = event.key;

sound(keyboad);

});

//fuction to take in the key or action 
function sound(key){
 //cases for each inner htm key
 switch(key){
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    //asdjkl
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
     case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break; 
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default: console.log(buttonInnerHTML);
}
}


//adding animation function
function buttonAnimation(key){

var activeButton = document.querySelectorAll("."+key);

//adding the class
activeButton.classList.add("pressed");

//removing the class after being pressed
setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);

}