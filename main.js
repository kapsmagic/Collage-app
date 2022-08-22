var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
    speak()
} 
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});


function speak(){

    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "image 1";
        takeSnapShot();
        speak_data = "Taking your next Selfie in 10 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    },10000);
    setTimeout(function()
    {
        img_id = "image 2";
        takeSnapShot();
        speak_data = "Taking your next Selfie in 8 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    },8000);
    setTimeout(function()
    {
        img_id = "image 3";
        takeSnapShot();
        speak_data = "Taking your next Selfie in 5 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    },5000);
}



function takeSnapShot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri)
    {
        if(img_id=="image 1"){
        document.getElementById("result1").innerHTML = '<img style="width:50%;" id="image 1" src="'+data_uri+'"/>';
    }
        if(img_id=="image 2"){
        document.getElementById("result2").innerHTML = '<img style="width:50%;" id="image 2" src="'+data_uri+'"/>';
    }
        if(img_id=="image 3"){
        document.getElementById("result3").innerHTML = '<img id="image 3" style="width:50%;" src="'+data_uri+'"/>';
    }
    });
}

