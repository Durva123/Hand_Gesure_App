prediction_1="";
prediction_2="";

Webcam.set({
 width:350,
 height:300,
 image_format:"png",
 png_quality:98
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function snapshot(){
 Webcam.snap(function(data_uri){
     document.getElementById("picture").innerHTML='<img id="captured_image"src="'+data_uri+'">'
 });
}

console.log("ml5 version" , ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UEoH_KPaH/model.json",  modelLoaded);
function modelLoaded(){
    console.log("Your code's working, Kid!");
}

function check(){
   img=document.getElementById("captured_image");
   classifier.classify(img,gotResult);
}

function gotResult(error, results){
if (error){
    console.error(error);
}
else{
console.log(results);
document.getElementById("emotion_name_1").innerHTML=results[0].label;
document.getElementById("emotion_name_2").innerHTML=results[1].label;

prediction_1=results[0].label;
prediction_2=results[1].label;

speak();

if (results[0].label=="Victory"){
document.getElementById("emoji_1").innerHTML="&#9996";
}

if (results[0].label=="Thumbs Up"){
    document.getElementById("emoji_1").innerHTML="&#128077";
    }

if (results[0].label=="Nice"){
    document.getElementById("emoji_1").innerHTML="&#128076";
     }

if (results[1].label=="Victory"){
    document.getElementById("emoji_2").innerHTML="&#9996";
    }

if (results[1].label=="Thumbs Up"){
    document.getElementById("emoji_2").innerHTML="&#128077";
         }

if (results[1].label=="Nice"){
    document.getElementById("emoji_2").innerHTML="&#128076";
         }}}

function speak(){
var synth=window.speechSynthesis;
speak_1="The first prediction is"+prediction_1;
speak_2="  And The second prediction is"+prediction_2;
var utter=new SpeechSynthesisUtterance(speak_1+speak_2);
synth.speak(utter);
}






















