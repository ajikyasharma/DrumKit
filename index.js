// for getting the message when first button got clicked.

// document.querySelector("button").addEventListener("click", handleclick);

// function handleclick(){
//     alert("I got clicked!");
// }


// code for everybutton to get message when they got clicked.

var limit= document.querySelectorAll(".drum").length;

for(var i=0;i<limit;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        //  var audio = new Audio("sounds/tom-1.mp3");
        //  audio.play();

        // this.style.color="white";
        var InnerHTML= this.innerHTML;
         
        makesound(InnerHTML);

        buttonAnimation(InnerHTML);
       
    });
}


document.addEventListener("keypress",function(event){
         
    makesound(event.key);

    buttonAnimation(event.key);

});


function makesound(key){
    switch(key){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a" :
            var crash =new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "s" :
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "d" :
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "j" :
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "k" :
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "l" :
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        
        default:
            console.log(this.innerHTML);

    }
}


function buttonAnimation(currentkey){

    var activeButton= document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");
     
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);

}







