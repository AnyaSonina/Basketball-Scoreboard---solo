let homeScore = document.getElementById("home_num")
let guestScore = document.getElementById("guest_num")

let firstHomeSum = document.getElementById("first_summand")
let secondHomeSum = document.getElementById("second_summand")
let thirdHomeSum = document.getElementById("third_summand")

let firstGuestSum = document.getElementById("first_guest_sum")
let secondGuestSum = document.getElementById("second_guest_sum")
let thirdGuestSum = document.getElementById("third_guest_sum")
let period = document.getElementById("period")

let caretLeft = document.getElementById("fa-caret-left")
let caretRight = document.getElementById("fa-caret-right")
let timer = document.getElementById("timer")
let options = document.getElementsByClassName("options")

const startBtn = document.querySelector("#start_btn")
const resetBtn = document.getElementById("reset_btn")


let scoreHome = 0
let scoreGuest = 0


for(let option of options) {
  for(let btn of option.children){
    btn.disabled = true
  }
}

function sum(e) {
  if(e.target.parentNode.id == "home_options") {
    scoreHome += Number(e.target.innerText.replace(/\D/g, ''))
    homeScore.textContent = scoreHome

  }else if(e.target.parentNode.id == "guest_options") {
    scoreGuest += Number(e.target.innerText.replace(/\D/g, ''))
    guestScore.textContent = scoreGuest

  }
  /*Styling*/
  scoreHome > scoreGuest ? caretLeft.style.color = "red" : caretLeft.style.color = "white"   
  scoreHome < scoreGuest ?  caretRight.style.color = "red" :  caretRight.style.color = "white"
  
}

    

firstHomeSum.addEventListener("click", sum)
secondHomeSum.addEventListener("click", sum)
thirdHomeSum.addEventListener("click", sum)

firstGuestSum.addEventListener("click", sum)
secondGuestSum.addEventListener("click", sum)
thirdGuestSum.addEventListener("click", sum)



/*CountDown timer*/

let set
let periods
let num = 0

function startTimer(duration, display) {

  let start = Date.now(),
      diff,
      minutes,
      seconds;
  let periodNum = 4
  let periodTime = (duration/60 / periodNum) * 60000
  
    set = setInterval(function() {
      
      diff = duration - (((Date.now() - start) / 1000) | 0);

      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds; 
      
     
      if (diff <= 0) {
        isRunning = false
         display.textContent = "Game Over"
         clearInterval(set)
         clearInterval(periods)

          
      }
      
  }, 1000)
  
  
  period.innerHTML = `<h2>${num}</h2> <h3>Period</h3>`
  periods = setInterval(function(){
    num ++
    period.innerHTML = `<h2>${num}</h2> <h3>Period</h3>`
  }, periodTime)
 
  startBtn.disabled = true
   
}


startBtn.addEventListener("click", function() { 
  for(let option of options) {
    for(let btn of option.children){
      btn.disabled = false
    }
  
  }
 
 num = 1
 homeScore.textContent = scoreHome
 guestScore.textContent = scoreGuest
  let setMinutes = 60 * 48,
  display = timer
  startTimer(setMinutes, display)
 
})


resetBtn.addEventListener("click", function() {
  
  startBtn.disabled = false
  for(let option of options) {
    for(let btn of option.children){
      btn.disabled = true
    }
  }
  clearInterval(set)
  clearInterval(periods)
  scoreHome = 0
  scoreGuest = 0
  num = 0
  homeScore.textContent = scoreHome
  guestScore.textContent = scoreGuest
  period.innerHTML = `<h2>${num}</h2> <h3>Period</h3>`
  timer.textContent = "48:00"
  caretRight.style.color = "white"
  caretLeft.style.color = "white"
 
})


 