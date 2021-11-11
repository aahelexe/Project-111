Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90});
camera=document.getElementById("camera");
Webcam.attach('camera');
function takeSnapshot()
{
    navigator.mediaDevices.getUserMedia({ video: true});
    Webcam.snap(function(data_uri){
        snapshot= '<img id="captured_image" src="'+data_uri+'"/>';
        document.getElementById("result").innerHTML=snapshot;
    });
}
console.log("ml5 version:", ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6pNjx6PiZ/model.js", modelReady);
function modelReady(){
    console.log("Model Ready!");
}
function speak()
{
    var synth= window.speechSynthesis;
    speak_data1= "The first prediction is"+prediction1;
    speak_data2= "The second prediction is"+prediction2;
    var utterThis= new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}
