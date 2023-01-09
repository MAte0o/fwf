var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var p = document.getElementById("textbox");
function start(){
p.innerHTML="";
recognition.start();    
}
recognition.onresult=function(l){
console.log (l);
var countent =l.results[0][0].transcript;
p.innerHTML=countent;
console.log(countent);
if (countent == "Selfie"){
    console.log("toma mi selfie en 4 segundos")
    speak();
}

}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Tomando tu Selfie en 4 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 4000);
}
camera=document.getElementById("camera");
Webcam.set({
 width:375,height:350,image_format:"png",png_quality:110
 });
 function take_selfie(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });

   
 }
 function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
 }