const hourEL = document.querySelector(".hour")
const minutesEL = document.querySelector(".minutes")
const secondsEL = document.querySelector(".seconds")


function updateClock() {
   const currentDate = new Date()
  /* setTimeout (()=>{},1000)*/
     
    const hour = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    const hourDeg = (hour / 12)*360
 hourEL.style.transform = `rotate(${hourDeg}deg)`
 const minutesDeg = (minutes / 60) * 360
 minutesEL.style.transform = `rotate(${minutesDeg}deg)` 
   const secondsDeg = (seconds / 60 )*360
  secondsEL.style.transform = `rotate(${secondsDeg}deg)`
  /*setTimeout(updateClock , 1000)*/
}
setInterval(updateClock , 1000)