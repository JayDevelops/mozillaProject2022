const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const musicPlayer = document.getElementById('music-container');
const clock = document.getElementById('clockContainer');
const playList = document.getElementById('playlist-container');
const quoteContainer = document.getElementById('quoteContainer');
const actionButtons = document.getElementsByClassName('action-btn');

toggle.addEventListener('click',function() {
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        // Toggle light mode below
        body.style.background = '#f0efeb';
        musicPlayer.style.backgroundColor = '#ffffff';
        clock.style.color = '#000000';
        playList.style.color = '#000000';
        playList.style.backgroundColor = '#ffffff';
        playList.style.boxShadow = '0 5px 20px rgba(252, 169, 169, 0.6)';
        quoteContainer.style.color = '#000000';
        Array.from(actionButtons).forEach(button => button.style.backgroundColor = '#ffffff');

        //  Transitions below
        body.style.transition ='2s';
        clock.style.transition = '2s';
        musicPlayer.style.transition = '2s';
        playList.style.transition = '2s';
        quoteContainer.style.transition = '2s';

        Array.from(actionButtons).forEach(button => button.style.transition = '2s');
    } else{
        // Toggle dark mode below
        body.style.background = '#264653';
        clock.style.color = '#ffffff';
        musicPlayer.style.backgroundColor = '#000000';
        playList.style.backgroundColor = '#000000';
        playList.style.color = '#ffffff';
        playList.style.boxShadow = '0 5px 20px rgba(255, 255, 255, 0.6)';
        quoteContainer.style.color = '#ffffff';

        Array.from(actionButtons).forEach(button => button.style.backgroundColor = '#000000');

        //  Transitions below
        body.style.transition ='2s';
        clock.style.transition = '2s';
        musicPlayer.style.transition = '2s';
        playList.style.transition = '2s';
        quoteContainer.style.transition = '2s';

        Array.from(actionButtons).forEach(button => button.style.transition = '2s');
    }

})