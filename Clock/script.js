const clockHandSecond = document.querySelector(".hand_second");
const clockHandMinute = document.querySelector(".hand_minute");
const clockHandHour = document.querySelector(".hand_hour");

const CLOCK_HAND_SECOND = clockHandSecond;
const CLOCK_HAND_MINUTE = clockHandMinute;
const CLOCK_HAND_HOUR = clockHandHour;

setInterval(() => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    

    updateClockHand(CLOCK_HAND_SECOND, seconds);
    updateClockHand(CLOCK_HAND_MINUTE, minutes);
    updateClockHand(CLOCK_HAND_HOUR, hours);
}, 1000);

function updateClockHand(clockHand, currentTime){
    switch(clockHand){
        case CLOCK_HAND_SECOND:
            if (clockFullCycle(CLOCK_HAND_SECOND, currentTime)){
                resetClockHand(CLOCK_HAND_SECOND, currentTime);
            }
            else moveClockHand(CLOCK_HAND_SECOND, currentTime);
            break;
        case CLOCK_HAND_MINUTE:
            if (clockFullCycle(CLOCK_HAND_MINUTE, currentTime)){
                resetClockHand(CLOCK_HAND_MINUTE, currentTime);
            }
            else moveClockHand(CLOCK_HAND_MINUTE, currentTime);
            break;
        case CLOCK_HAND_HOUR:
            if (clockFullCycle(CLOCK_HAND_HOUR, currentTime)){
                resetClockHand(CLOCK_HAND_HOUR, currentTime);
            }
            else moveClockHand(CLOCK_HAND_HOUR, currentTime);
            break;
        default:
            console.log(`An error occured in updateClockHand function`);
            break;
    }
}

function clockFullCycle(clockHand, currentTime){
    let time = 60;
    if (clockHand === clockHandHour) time = 24;
    if (currentTime * (360/time) === 0) return true;
}

function resetClockHand(clockHand, currentTime){
    let time = 60;
    if (clockHand === clockHandHour) time = 24;
    clockHand.style.transition = `transform 0s ease`;
    clockHand.style.transform = `rotate(${(360/time) * currentTime}deg)`;
}

function moveClockHand(clockHand, currentTime){
    let time = 60;
    if (currentTime !== 0) clockHand.style.transition = `transform 0.5s ease`;
    if (clockHand === clockHandHour) time = 24;
    clockHand.style.transform = `rotate(${(360/time) * currentTime}deg)`;
}