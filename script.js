const resetbtn = document.getElementById("resetbtn");
const startbtn = document.getElementById("startbtn");
const pausebtn = document.getElementById("pausebtn");

startbtn.addEventListener("click",start);
resetbtn.addEventListener("click", reset);
pausebtn.addEventListener("click", pause);

let interval=null;
let millisec=0;
let seconds=0;
let minutes=0;
let hours=0;

function start(){

  changeBtnColor('start');

  if(interval) return; // Prevent multiple intervals
  interval= setInterval(()=>{
  millisec++;
if(millisec>99){
  millisec=0;
  seconds++;
}
if(seconds>59){
  seconds=0;
  minutes++;
}
if(minutes>59){
  minutes=0;
  hours++;
}
 updateDisplay();
  },10);
}

function reset(){
   changeBtnColor('reset');
clearInterval(interval);
  millisec=0;
  seconds=0;
  minutes=0;
  hours=0;
  interval=null; // Clear the interval reference
  updateDisplay();

}

function pause(){
   changeBtnColor('pause');
  clearInterval(interval);
  interval=null; // Clear the interval reference
}

function updateDisplay(){
  document.getElementById("millisecond").textContent=millisec<10? "0"+millisec :millisec;
   document.getElementById("second").textContent=seconds<10? "0"+seconds :seconds;
    document.getElementById("minute").textContent=minutes<10? "0"+minutes :minutes;
     document.getElementById("hour").textContent=hours<10? "0"+hours :hours;
}

function changeBtnColor(btnColor){

  resetbtn.classList.remove('activebtn');
  startbtn.classList.remove('activebtn');
  pausebtn.classList.remove('activebtn');
document.getElementById(btnColor + 'btn').classList.add('activebtn');
}