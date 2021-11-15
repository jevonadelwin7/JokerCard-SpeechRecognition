var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()


var textbox = $("#textbox")
var textbox1 = $("#textbox1")

var instructions = $("#status")


var content = ''
recognition.lang = 'en-US';
recognition.continous = true

recognition.onstart = function(){
    instructions.text("voice recognition is on")
    document.getElementById("play").src = "stop-fill.svg";

}

recognition.onspeechend = function(){
    instructions.text("No Activity")
    document.getElementById("start-btn").className ="btn btn-success btn-block mr-2 visually-hidden";
    recognition.stop();
}

recognition.onerror = function(){
    instructions.text("try again")
    document.getElementById("play").src = "play-fill.svg";

}

recognition.onresult = function(event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    content += transcript;

    textbox.val(content);

    if (transcript.toLowerCase() =='1.|1|one')
    {
    textbox1.val("You Find JOKER")
    document.getElementById("satu").src = "joker.png";
    document.getElementById("dua").src = "as.png";
    document.getElementById("tiga").src = "as.png";
    document.getElementById("textbox1").className ="form-control text-light bg-success text-center";
    document.getElementById("start-btn").className ="btn btn-success btn-block mr-2 visually-hidden";
    }
    else if(transcript.toLowerCase()==='2.'){
    textbox1.val("He is not here..")
    document.getElementById("dua").src = "as.png";
    document.getElementById("textbox1").className ="form-control text-light bg-danger text-center";
    document.getElementById("start-btn").className ="btn btn-success btn-block mr-2 visually-hidden";
    }

    else if(transcript.toLowerCase() === '3.'){
    textbox1.val("He is not here..")
    document.getElementById("tiga").src = "as.png";
    document.getElementById("textbox1").className ="form-control text-light bg-danger text-center";
    document.getElementById("start-btn").className ="btn btn-success btn-block mr-2 visually-hidden";
    }
}


$("#start-btn").click(function(event){
    if(content.length){
        content += ''
    }

    recognition.start()
})

function eraseText(){
    document.getElementById("textbox").value = "";
    document.getElementById("textbox1").value = "";

}
