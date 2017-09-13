(function() {

  let myAudio = new Audio("assets/javascript/dogsound.mp3")

  //Reset DOM Info
  let resetButton = document.querySelector("#reset");
    console.log("resetButton");
  let numResets = document.querySelector("#num-resets");
    console.log("numResets");

  //Reset Functionality
  resetButton.addEventListener("click", function(){
    console.log("button clicked");
    numResets.innerHTML = parseInt(numResets.innerHTML) + 1;
    //T1 & T2 Goal Reset logic
    t1Shots.innerHTML= 0;
    t1Goals.innerHTML = 0;
    t2Shots.innerHTML = 0;
    t2Goals.innerHTML = 0;

    function switchBackground() {
      let body = document.querySelector("body")
      let defaultBackground = document.querySelector("body").style.background
      setInterval(function() {
        body.style.background = "red"
        setInterval(function() {
          body.style.background = defaultBackground
        }, 250)
      }, 250)
    }
    switchBackground()

  })

  //Team 1 Dom Info
  let t1Click = document.querySelector("#teamone-shoot");
    console.log("t1Click");
  let t1Shots = document.querySelector("#teamone-numshots");
    console.log("t1Shots");
  let t1Goals = document.querySelector("#teamone-numhits");
    console.log("t1Goals");

  //Count Functionality
  t1Click.addEventListener("click", function(){
    console.log("button clicked");
      t1Shots.innerHTML = parseInt(t1Shots.innerHTML) + 1;
      myAudio.play();
  //If scoring logic
        if (Math.random()>.4) { t1Goals.innerHTML = parseInt(t1Goals.innerHTML) + 1;
        }
  })

  //Team 2 Dom Info
  let t2Click = document.querySelector("#teamtwo-shoot");
    console.log("t1Click");
  let t2Shots = document.querySelector("#teamtwo-numshots");
    console.log("t2Shots");
  let t2Goals = document.querySelector("#teamtwo-numhits");
    console.log("t2Goals");

  t2Click.addEventListener("click", function(){
    console.log("button clicked");
      t2Shots.innerHTML = parseInt(t2Shots.innerHTML) + 1;
  //If scoring logic
      if (Math.random()>.33) { t2Goals.innerHTML = parseInt(t2Goals.innerHTML) + 1;
      }
})
})()
