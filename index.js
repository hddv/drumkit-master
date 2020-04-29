// alert("hello")
let drumButton = document.querySelectorAll(".drum");

drumButton.forEach(button => {
  button.addEventListener("click", function(){
    //change the text color of the clicked button
    // this.classList.add("white");

    let arraySounds = {
      s: "sounds/tom-1.mp3",
      d: "sounds/tom-2.mp3",
      f: "sounds/tom-3.mp3",
      g: "sounds/tom-4.mp3",
      j: "sounds/snare.mp3",
      k: "sounds/crash.mp3",
      l: "sounds/kick-bass.mp3"
    }

    //get the letter matchs with the sound
    let letterButton = this.innerHTML;
  
    //play the matched sound 
    (new Audio(arraySounds[letterButton])).play();
  
    
  })
});
