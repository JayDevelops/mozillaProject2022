let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";


let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let player;
function onYouTubePlayerAPIReady() {
    player = new YT.player('player', {
        videoID: 'iUVNspaiBAo',
        playersVars: {
            'playsinline': 1,
            'height': 390,
            'width': 640,
            'mute': 0,
            'autoplay': 1
        },
    events: {
    }
    });
}