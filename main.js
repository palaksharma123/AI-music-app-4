song1="";
song2="";
scoreLeftWrist="0";
status="";
leftWristX="0";
leftWristY="0";

function preload(){
 song1=loadSound("song1.mp3");
 song2=loadSound("song2.mp3");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist= "+scoreLeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
     
    }
}
function draw(){
    image(video,0,0,300,300);

    song1="song1.isPlaying()";

    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(song1==false){
            document.getElementById("song").innerHTML="PeterPan";
        }
        else{
            document.getElementById("song").innerHTML="Harry Potter-Theme Song";
        }
    }
}
function modelLoded(){
    console.log("modelLoded");
}
