const timeLeft = document.querySelector('#time-left')

const birthday = new Date('05/25/2021')
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; //this is in milliseconds 
let timerId


// console.log(birthday);


function countDown() {
    const today = new Date(); //getting todays date
    const timeSpan = birthday - today;
    // console.log(timeSpan)

    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Hope you had a nice birthday"
        clearInterval(timerId)
        return
    }

    if (timeSpan <= 0) { //if its my bday
        timeLeft.innerHTML = "HAPPY BIRTHDAY!!!"
        let body = document.querySelector('body')
        body.style.backgroundColor = "pink" 
        clearInterval(timerId)
        return;
    }
    //display the time left in hour, minutes and so on..
    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    timeLeft.innerHTML = `${days} DAYS ${hours} HOURS ${minutes} MINUTES AND ${seconds} SECONDS ` 
}

timerId = setInterval(countDown, second)