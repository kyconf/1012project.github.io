

  let flagImage = [];

  const loadCountryAPI = () => {


      fetch('https://restcountries.com/v3.1/independent?status=true')
      .then(res => res.json())
      .then(data => {
      
          flagImage = data;
      
       
          console.log(data);
          console.log(flagImage);
        })

      }



const displayCountries = countries => {
    console.log(countries)
    const countriesHTML= countries.map(country => getCountry(country))
}



/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  var sidenav = document.getElementById("mySidenav");
  var mainContent = document.getElementById("main");
  var flagPic = document.getElementById("flagPicture");
  var leaderboard = document.getElementById("leaderboard");
  var earth = document.getElementById("earth");
  var moon = document.getElementById("moon");
  
  if (sidenav.style.width === "250px") {
      // If the navigation is open, close it
      sidenav.style.width = "0";
      mainContent.style.marginLeft = "0";
      earth.style.marginLeft = "0";
      earth.style.transition = 'margin-left 0.5s';
      earth.style.padding = '20px';
      leaderboard.style.marginLeft = "0";
  

  } else {
      // If the navigation is closed, open it 
      sidenav.style.width = "250px";
      mainContent.style.marginLeft = "250px";
      earth.style.marginLeft = "-150px";
      earth.style.transition = 'margin-left 0.5s';
      earth.style.padding = '20px';
  
      leaderboard.style.marginLeft = "250px";
      earth.style.transition = 'margin-left 0.5s';
      earth.style.padding = '20px';
      
  }
}
 
  document.getElementById("inputSubmit").style.display = "none";
  document.getElementById("hintButt").style.display = "none";
  document.getElementById("gamemodes").style.display = "none";
  document.getElementById("score").style.display ="none";






function startButton() {
  document.getElementById("gamemodes").style.display = "flex";
  document.getElementById("leaderboard").style.display = "none";
  var startButt = document.getElementById("start");
  if (startButt.style.display === "none") {
    startButt.style.display = "flex";
  } else {
    startButt.style.display = "none";
  }
}




randomIndex = Math.floor(Math.random() * flagImage.length);

function everything() {
  console.log(randomIndex);
  randomIndex = Math.floor(Math.random() * flagImage.length);
  randomImageURL = flagImage[randomIndex].flags.png;
  randomName = flagImage[randomIndex].name.common;
  languages = flagImage[randomIndex].languages;
  population = flagImage[randomIndex].population;
  alt = flagImage[randomIndex].flags.alt;
  capital = flagImage[randomIndex].capital;
  subregion = flagImage[randomIndex].subregion;
  timezone = flagImage[randomIndex].timezones;
    console.log(randomImageURL);
    console.log(randomName);
}


  function playMode() {

    document.getElementById("gamemodes").style.display = "none";
    document.getElementById("leaderboard").style.display = "block";
    document.getElementById("score").style.display = 'flex';
    everything();

  var hideInput = document.getElementById("inputSubmit");
  var startButt = document.getElementById("start");

    document.getElementById("score").style.backgroundColor = 'rgba(19,19,19,255)';
    document.getElementById("leaderboard").style.backgroundColor = 'rgba(19,19,19,255)';
    hideInput.style.display = "block";
    document.getElementById("hintButt").style.display = "flex";
    

  
    document.getElementById("score").innerHTML = "Score: 0" + "<br><br>Previous Highscore: " + highscore;
    



  document.getElementById("flag").src = randomImageURL;
  document.getElementById("test").innerHTML = randomName + "<br><br>Located in " + subregion + ". Timezone: " + timezone + "<br><br>The capital of this country is " + capital + ". The official language spoken here is " + flagImage[randomIndex].languages[Object.keys(flagImage[randomIndex].languages)[0]
    ] + ". " + alt + " With a population of: " + population;
    
} 



var inputBox = document.getElementById("flagGuess");
var counter = 0;
var highscore = 0;
var storedHS = 0;
function submit() {

    //randomNam e = inputGuess array
    //randomImageURL = flagImage array
  
  console.log("Random Index:", randomIndex); 

    if (inputBox.value.trim().toLowerCase() === randomName.toLowerCase()) {
      counter = counter + 1;
      var audio = document.getElementById('myAudio');
      audio.play();
      inputBox.value = '';

      document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Previous Highscore: " + highscore;
      flagImage.splice(randomIndex, 1);


      console.log("Flag Image after splice:", flagImage.length); 
       
      console.log("counter",counter);
      if (highscore < counter) {
        highscore = counter;
        localStorage.setItem('storedHS', highscore); 
        document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Previous Highscore: " + highscore;
         
      }
      if (flagImage.length > 0) {
      randomIndex = Math.floor(Math.random() * flagImage.length);

      
    everything();

      document.getElementById("flag").src = randomImageURL;
  document.getElementById("test").innerHTML = randomName + "<br><br>Located in " + subregion + ". Timezone: " + timezone + "<br><br>The capital of this country is " + capital + ". The official language spoken here is " + flagImage[randomIndex].languages[Object.keys(flagImage[randomIndex].languages)[0]
    ] + ". " + alt + " With a population of: " + population;
    
    
     /* if (highscore < counter) {
        highscore = counter;
        localStorage.setItem('storedHS', highscore); 
        document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Previous Highscore: " + storedHS;
         
      }

      document.getElementById("flag1").src = randomImageURL;
      document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Previous Highscore: " + storedHS;
      
*/
      } else {
       alert("all items used")
      }
    //document.getElementById("output").innerHTML = "Correct"
  
  } else {
   

 var animatedBox = document.getElementById('flagGuess');

  animatedBox.classList.remove('invalidAnim');
  
 
  void animatedBox.offsetWidth;
  
  setTimeout(function () {
    animatedBox.classList.add('invalidAnim');
  }, 10);
    //document.getElementById("output").innerHTML = "Try again!"
  }




}


//function submitScore() {}
//give an option to submit score and name!





function toggleDark() {
  var element = document.body;
  element.classList.toggle("moonMode");
  var animatedBox = document.getElementById('earth');
      

if (animatedBox.classList.contains('earth')) {
  animatedBox.classList.remove('earth');
  void animatedBox.offsetWidth; 
  animatedBox.classList.add('moon');
  document.getElementById("score").style.backgroundColor = 'black';

  
  


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
      flagGuess.removeEventListener("keyup", inputClick);
  }
  });
  flagGuess.addEventListener("keyup", inputClick);
}


function normalMode() {

  playMode();
    
  let timer = "60";
  

  const interval = setInterval(() => {
    document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Streak: " + highscore + "<br><br>Timer:" + timer;
      console.log(timer);
      timer--;
        
      if (timer < 0 ) {
        clearInterval(interval);
      }
    }, 1000);
}



loadCountryAPI();




//UPDATE LEADERBOARD
//started 7:03 pm
function updateLeaderboard(leaderboard) {

  const leaderboardID = document.getElementById("leaderboard");
  

  leaderboardID.innerHTML = "Leaderboard";
  
  leaderboard.forEach((entry, index) => {
    leaderboardID.innerHTML += `<p id="entries">${index + 1}. ${entry.name}: ${entry.score}</p>`;
  
  });
}


function update() {

  fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => {
    
      updateLeaderboard(data.leaderboard);
    })
    .catch(error => {
      console.error('Error retrieving leaderboard:', error);
    });
}


var highscore = 0;

//give up then give the highscore to the server
function giveUp() {
  // get the name 
  var name = prompt("Please input a name: ");
  

  fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ highscore, name }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Server Response:', data.message);

      update();
    })
    .catch(error => {
      console.error('Error updating leaderboard:', error);
    });

  // reset it again after u give up counter
  counter = 0;

  document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Previous Highscore: " + highscore;

  playMode();
}

//display it once page loads
update();
//ended 11:39 pm

const container = document.getElementById('leaderboard');

  const scrollSpeed = 1.5; 

  function scroll4me() {
    container.scrollTop += scrollSpeed;
    
  }

setInterval(scroll4me, 50); 
