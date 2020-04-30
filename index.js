// alert("hello")

const arraySounds = {
  s: "sounds/tom-1.mp3",
  d: "sounds/tom-2.mp3",
  f: "sounds/tom-3.mp3",
  g: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3"
};


let drumButton = document.querySelectorAll(".drum");

//Detecting button press and associating with sound
drumButton.forEach(button => {
  button.addEventListener("click", function(){
    //change the text color of the clicked button
    // this.classList.add("white");

    //get the letter matchs with the sound
    let letterButton = this.innerHTML;
  
    //play the matched sound
    makeSound(letterButton, arraySounds);
  
    
  })
});

//Detecting keyboard press and associating with sound
document.addEventListener("keydown", (event)=>{
  const keyName = event.key.toLowerCase();

  if(arraySounds.hasOwnProperty(keyName)){
    makeSound(keyName, arraySounds);
  }
});


//function
function makeSound(keyString, arraySounds){
  const soundPath = arraySounds[keyString];
  (new Audio(soundPath)).play();
}