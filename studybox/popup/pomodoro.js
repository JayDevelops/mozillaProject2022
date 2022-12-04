// variables

let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00";

// display

window.onload = () => {
    document.getElementById('minutes').textContent = String(workTime);
    document.getElementById('seconds').textContent = seconds;

    workTitle.classList.add('active');
}

// starting timer

function start() {
    //change the time
    seconds=59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    let breakCount = 0;

    // countdown

    let timerFunction = () => {

        document.getElementById('minutes').textContent = workMinutes;
        document.getElementById('seconds').textContent = seconds;

        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++

                    // changing the painel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                }else {
                    // continue work
                    workMinutes = workTime;
                    breakCount++

                    // changing the painel
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }
            seconds = 59;
    }
    setInterval(timerFunction, 1000);
}

}
