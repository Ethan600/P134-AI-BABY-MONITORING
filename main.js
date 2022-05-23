status1 = "";
objects = [];

function preload(){
    alarm = loadSound("alarm_r.mp3");
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting object..";
}

function modelLoaded(){
    status1 = true;
    console.log("Model loaded successfully .. ");
}

function draw(){
    image(video, 0, 0, 380, 380);
    if(status1 != ""){
        r = random(255);
        g = random(255);
        b = random(255);

        objectDetector.detect(video, gotPoses);
        for(i = 0; i < objects.length; i++){
        if(status1 != ""){
            document.getElementById("Baby_Monitor").innerHTML = "Baby found!";
            alarm.stop();
        }

        else{
            document.getElementById("Baby_Monitor").innerHTML = "Baby not found..";
            alarm.play();
        }

    }

    if(objects < 0){
        document.getElementById("Baby_Monitor").innerHTML = "Baby not found..";
        alarm.play();
    }
        
    }
}

function gotPoses(error, results){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
        objects = results
    }
}