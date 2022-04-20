song = "";

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
   canvas = createCanvas(600,500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();


}

function draw()
{
 image(video, 0, 0, 600, 500);
}

function Play_song()
{
    song.setVolume(1);
    song.play()
    song.rate(1)

}

function modelLoaded()
{
    console.log('Model has been Initiated');
}