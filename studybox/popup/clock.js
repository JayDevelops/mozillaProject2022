function displayTime(){
    const dateTime = new Date();
    let hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const session = document.getElementById('session');

    if(hrs >= 12){
        session.textContent = 'PM';
    }else{
        session.textContent = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').textContent = hrs;
    document.getElementById('minutes').textContent = min;
    document.getElementById('seconds').textContent = sec;
}
setInterval(displayTime, 10);