rushe = "";
despacito = "";
song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("RUSH_E[EagleConverter.com].mp3");
    song2 = loadSound("Luis-Fonsi-ft-Daddy-Yankee-Despacito-(BeatzJam.com).mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log('Posenet is initialised');
}

function gotPoses()
{
    
}



