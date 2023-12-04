let flagImage = [];

const loadCountryAPI = () => {


    fetch('https://restcountries.com/v3.1/independent?status=true')
    .then(res => res.json())
    .then(data => {
        // Assuming the response data is an array
        flagImage = data;
    
        // Now you can use the dataArray as needed
        console.log(data);
        console.log(flagImage);
      })

    }



const displayCountries = countries => {
    console.log(countries)
    const countriesHTML= countries.map(country => getCountry(country))
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



function startButton() {

  everything();

  var hideInput = document.getElementById("inputSubmit");
    var startButt = document.getElementById("start");

    document.getElementById("score").style.backgroundColor = 'rgba(128, 128, 128, 0.135)';
    document.getElementById("leaderboard").style.backgroundColor = 'rgba(128, 128, 128, 0.135)';
    hideInput.style.display = "block";
    document.getElementById("hintButt").style.display = "flex";
    

   
    document.getElementById("score").innerHTML = "Score: 0" + "<br><br>Previous Highscore: ";
    document.getElementById("leaderboard").innerHTML = "Leaderboard:"

  if (startButt.style.display === "none") {
    startButt.style.display = "flex";
  } else {
    startButt.style.display = "none";
  }


  document.getElementById("flag").src = randomImageURL;
  document.getElementById("test").innerHTML = randomName + "<br><br>Located in " + subregion + ". Timezone: " + timezone + "<br><br>The capital of this country is " + capital + ". The official language spoken here is " + flagImage[randomIndex].languages[Object.keys(flagImage[randomIndex].languages)[0]
    ] + ". " + alt + " With a population of: " + population;
    
} 



var inputBox = document.getElementById("flagGuess");
var counter = 0;
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
      /*flagImage.splice(randomIndex, 1);

      flagName.splice(randomIndex, 1);

      console.log("Flag Image after splice:", randomImageURL); 
      console.log("Flag Name after splice:", flagName);    
      console.log("counter",counter);*/

      if (flagImage.length > 0) {
      randomIndex = Math.floor(Math.random() * flagImage.length);

      
    everything();

      document.getElementById("flag").src = randomImageURL;
  document.getElementById("test").innerHTML = randomName + "<br><br>Located in " + subregion + ". Timezone: " + timezone + "<br><br>The capital of this country is " + capital + ". The official language spoken here is " + flagImage[randomIndex].languages[Object.keys(flagImage[randomIndex].languages)[0]
    ] + ". " + alt + " With a population of: " + population;
    document.getElementById("score").innerHTML = "Score: " + counter + "<br><br>Previous Highscore: " + storedHS;
    
    
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

 

const getCountry = (country) => {
    console.log(country)
    return `
        <div>
        <h2>${country.name.common}</h2> 
        <h2>${country.flags.png}
        </div>
    
    `
}

//call func
loadCountryAPI()

//Figure out how to place the rest of the flags
/* Figure out how to do education mode, e.g.
be able to 
https://restcountries.com/v3.1/all?fields=name,flags`
*/

function clickMe() {
  var sidenav = document.getElementById("myInfo");
  var mainContent = document.getElementById("main");

  if (sidenav.style.width === "650px") {
  
      sidenav.style.width = "0";
      mainContent.style.marginRight = "0";
      
  } else {
    
      sidenav.style.width = "650px";
      mainContent.style.marginRight = "250px";
  }
}

function openNav() {
  var sidenav = document.getElementById("mySidenav");
  var mainContent = document.getElementById("main");
  
  if (sidenav.style.width === "250px") {
  
   
      sidenav.style.width = "0";
      mainContent.style.marginLeft = "0";
  } else {
      // If the navigation is closed, open it 
      sidenav.style.width = "250px";
      mainContent.style.marginLeft = "250px";
  }
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
        flagGuess.removeEventListener("keyup", inputClick);
    }

    });
    flagGuess.addEventListener("keyup", inputClick);
  }
  
  
  function normalMode() {
  
    startButton();
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
  
  
  
    