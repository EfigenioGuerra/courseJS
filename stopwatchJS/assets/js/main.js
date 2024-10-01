function createTime(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    })
}

const stopwatch = document.querySelector('.stopwatch');
const start     = document.querySelector('.start');
const pause     = document.querySelector('.pause');
const clear     = document.querySelector('.clear');

let seconds = 0;
let timer;

function startStopwatch() {
    timer = setInterval(() => {
        seconds++;
        stopwatch.innerHTML = createTime(seconds);
    }, 1000);
}

document.addEventListener('click', (e)=>{
    const el = e.target;

    if(el.classList.contains('start')){
        stopwatch.classList.remove('paused');
        clearInterval(timer);
        startStopwatch();
    }
    if(el.classList.contains('pause')){
        stopwatch.classList.add('paused');
        clearInterval(timer);
    }
    if(el.classList.contains('clear')){
        stopwatch.classList.remove('paused');
        clearInterval(timer);
        stopwatch.innerHTML = '00:00:00'
        seconds = 0;
    }
})
