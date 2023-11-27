/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  var sidenav = document.getElementById("mySidenav");
  var mainContent = document.getElementById("main");
  
  if (sidenav.style.width === "250px") {
      // If the navigation is open, close it
      sidenav.style.width = "0";
      mainContent.style.marginLeft = "0";
  } else {
      // If the navigation is closed, open it 
      sidenav.style.width = "250px";
      mainContent.style.marginLeft = "250px";
  }
}
 
  document.getElementById("inputSubmit").style.display = "none";
  document.getElementById("hintButt").style.display = "none";



  function startButton() {
    
    var hideInput = document.getElementById("inputSubmit");
    var startButt = document.getElementById("start");

    document.getElementById("score").style.backgroundColor = 'rgba(128, 128, 128, 0.135)';
    hideInput.style.display = "block";
    document.getElementById("hintButt").style.display = "flex";
    

   
    document.getElementById("score").innerHTML = "Score: 0" + "<br><br>Previous Highscore: " + storedHS;


  if (startButt.style.display === "none") {
    startButt.style.display = "flex";
  } else {
    startButt.style.display = "none";
  }
  /*
  if (hideInput.style.display === "hidden") {
    hideInput.style.display = "block";
  } else {
    hideInput.style.display = "none";
  } */
  

  document.getElementById("flag1").src = randomImageURL; //will do the entire process again

   /* document.getElementById("lol").setAttribute("src", "555603.png");
    document.getElementById("lol").style.display="flex";
    */
    
  }

  
  let flagImage = [
    "flags/jp.png",
    "flags/ph.png",
    "flags/sk.png",
    "flags/sg.png",
    "flags/th.png",
    "flags/ch.png",
    "flags/hk.png",
    "flags/ml.png",
    
  ];
  let flagName = ["Japan", "Philippines", "South Korea", "Singapore", "Thailand","China", "Hong Kong", "Malaysia"];
    

  var randomIndex = Math.floor(Math.random() * flagImage.length);

  var randomImageURL = flagImage[randomIndex];

  var inputGuess = flagName[randomIndex];
  
  var inputBox = document.getElementById("flagGuess");
  var counter = 0;
  var highscore = 0;

  var storedHS = localStorage.getItem('storedHS');
  if (storedHS === null) {
    storedHS = 0;
  }
  let modifiedImage = flagImage.slice();
  let modifiedName = flagName.slice();
  function submit() {

    
  
  console.log("Random Index:", randomIndex); 

    if (inputBox.value.trim().toLowerCase() === inputGuess.toLowerCase()) {
      counter = counter + 1;
      alert("Correct!");
      inputBox.value = '';
      flagImage.splice(randomIndex, 1);

      flagName.splice(randomIndex, 1);

      console.log("Flag Image after splice:", flagImage); 
      console.log("Flag Name after splice:", flagName);    
      console.log("counter",counter);

      if (flagImage.length > 0) {
      randomIndex = Math.floor(Math.random() * flagImage.length);
      
      randomImageURL = flagImage[randomIndex];
      inputGuess = flagName[randomIndex]; //updates

      
      if (highscore < counter) {
        highscore = counter;
        localStorage.setItem('storedHS', highscore); 
        document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Previous Highscore: " + storedHS;
         
      }

      document.getElementById("flag1").src = randomImageURL;
      document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Previous Highscore: " + storedHS;
      

      } else {
       alert("all items used")
      }
    //document.getElementById("output").innerHTML = "Correct"
  
  } else {
    alert("Try again!")
    //document.getElementById("output").innerHTML = "Try again!"
  }


}

function giveUp() {

counter = 0;
flagImage = modifiedImage.slice();
flagName = modifiedName.slice();  
console.log("Flag Image after slice:", flagImage); 
console.log("Flag Name after slice:", flagName); 


document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Previous Highscore: " + storedHS;

}


function toggleDark() {
  var element = document.body;
  element.classList.toggle("moonMode");
  var animatedBox = document.getElementById('earth');
      

if (animatedBox.classList.contains('earth')) {
  animatedBox.classList.remove('earth');
  void animatedBox.offsetWidth; 
  animatedBox.classList.add('moon');

} else {
  animatedBox.classList.remove('moon');
  void animatedBox.offsetWidth; 
  animatedBox.classList.add('earth');

 
}
}

function inputClick() { // if input key is pressed, you can press enter and itll submit 
document.body.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      submit(); 
      flagGuess.removeEventListener("keyup", handleEnter);
  }
  });
  flagGuess.addEventListener("keyup", handleEnter);
}


function normalMode() {

    
  let timer = "5";
  

  const interval = setInterval(() => {
    document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Streak: " + highscore + "<br><br>Timer:" + timer;
      console.log(timer);
      timer--;
        
      if (timer < 0 ) {
        clearInterval(interval);
      }
    }, 1000);
}



  