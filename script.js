const video = document.getElementById("video");

const rangeTime = document.querySelector(".range_time");
rangeTime.max = video.duration;
rangeTime.min = 0;
rangeTime.oninput = function () 
{
    video.currentTime = rangeTime.value;
}

const playbackRate = document.getElementById("playbackRate");
playbackRate.innerText = video.playbackRate;

document.getElementById("volume_stop").onclick = function () 
{
    if (video.muted) 
    {
        video.muted = false;
        this.src = "images/voice.png";
    } 
    
    else 
    {
        video.muted = true;
        this.src = "images/no-audio.png";
    }
}

document.getElementById("play").onclick = function () 
{
    if (video.paused) 
    {
        video.play();
        this.src = "images/pause.png";
    } 
    
    else 
    {
        video.pause();
        this.src = "images/play.png";
    }
}

document.getElementById("slower").onclick = function () 
{
    if (video.playbackRate <= 0.25) 
    {
        video.playbackRate = 0;
    } 

    else 
    {
        video.playbackRate -= 0.25;
    }

    playbackRate.innerText = video.playbackRate;
}

document.getElementById("faster").onclick = function () 
{
    if (video.playbackRate >= 2) 
    {
        video.playbackRate = 2;
    } 
    
    else 
    {
        video.playbackRate += 0.25;
    }

    playbackRate.innerText = video.playbackRate;
}

document.getElementById("back").onclick = function () 
{
    video.currentTime -= 3;

    if (video.currentTime < 0) 
    {
        video.currentTime = 0;
    }
}

document.getElementById("next").onclick = function () 
{
    video.currentTime += 3;

    if (video.currentTime > video.duration) 
    {
        video.currentTime = video.duration;
    }
}

document.getElementById("full").onclick = function () 
{
    video.requestFullscreen();
}


var videoEl = document.getElementsByTagName('video')[0],
    volumeControl = document.getElementById('volume'),
    range = document.getElementById('range'),
    timePicker = document.getElementById('timer');

    volumeControl.value = 1;


range.setAttribute("min", 0);
range.setAttribute("max", 30);
range.addEventListener('input', function () 
{
    videoEl.currentTime = range.value;
}, false);

volumeControl.addEventListener('input', function () 
{
    videoEl.volume = volumeControl.value;
    if (videoEl.volume == 0) document.getElementById("volume_stop").src = "images/no-audio.png";
    else document.getElementById("volume_stop").src = "images/voice.png";
}, false);

videoEl.addEventListener('ended', function () 
{
    videoEl.currentTime = 0;
}, false);

videoEl.addEventListener('timeupdate', function () 
{
    timePicker.innerHTML = secondsToTime(videoEl.currentTime);
}, false);


function secondsToTime(time) 
{
    if (video.duration == video.currentTime) document.getElementById("play").src = "images/reset.png";
    range.value = video.currentTime;

    var h = Math.floor(time / (60 * 60)),
        dm = time % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        s = Math.ceil(ds);

    if (s === 60) 
    {
        s = 0;
        m = m + 1;
    }

    if (s < 10) 
    {
        s = '0' + s;
    }

    if (m === 60) 
    {
        m = 0;
        h = h + 1;
    }

    if (m < 10) 
    {
        m = '0' + m;
    }

    if (h === 0) 
    {
        fulltime = m + ':' + s;
    } 
    
    else 
    {
        fulltime = h + ':' + m + ':' + s;
    }

    return fulltime;
}