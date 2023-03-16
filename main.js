Webcam.set({
    width:300,
    height:310,
    image_format:"png",
    png_quality:90
} );

Webcam.attach("#camera");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML='<img id="snaps" src="'+data_uri+'"/>'
    })
}

modal = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Oowrhusla/model.json", modelLoaded);

function check(){
    img = document.getElementById("snaps");
modal.classify(img, gotResult);
}

function modelLoaded(){
    console.log("Model Loaded!!!!!!!!!!!!!!!");
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("prediction").innerHTML=results[0].label;
}
}

