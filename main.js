

screenWidth = 0;
screenHeight = 0;

apple = "";

speakData = "";
toNumber = '';

x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();



function preload() {
  apple = loadImage("apple.png");
  
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 

 recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    toNumber = Number(content);

  if(Number.isInteger(toNumber) == true) {
    document.getElementById("status").innerHTML = "Started Drawing Apple ";
    draw_apple = "set";
  }
  else {
    document.getElementById("status").innerHTML = "The speech has not recognized a number ";
  }

   console.log(draw_apple) ;
}


function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height-250);
    canvas.position(0, 250);
}

function draw() {
  if(draw_apple == "set")
  {
    for (let i = 1; i <= toNumber; i++) {
      x = Math.floor(Math.random() * 1600);
      y = Math.floor(Math.random() * 450);
      image(apple, x, y, 50, 50);
      document.getElementById("status").innerHTML = toNumber + " Apples Drawn";
      speak();
    }
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speak_data = "";
}
