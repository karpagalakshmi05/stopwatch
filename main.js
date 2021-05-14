const minutes=document.getElementById("divMin");
const seconds=document.getElementById("divSec");
const miliseconds=document.getElementById("divMsec");
const start=document.getElementById("btnStart");
const pause=document.getElementById("btnPause");
const resume=document.getElementById("btnResume");
const reset=document.getElementById("btnReset");

let min=0,sec=0,msec=0,counter;

btnStart.onclick=()=>{
    btnStart.style.display="none";
    btnPause.style.display="block";
    startStopwatch();
};

btnPause.onclick=()=>{
    btnPause.style.display="none";
    btnResume.style.display="block";
    btnReset.style.display="block";
    clearInterval(counter);
};

btnResume.onclick=()=>{
    btnResume.style.display="none";
    btnReset.style.display="none";
    btnPause.style.display="block";
    startStopwatch();

};

btnReset.onclick=()=>{
    min=0;
    sec=0;
    msec=0;
    minutes.innerText=SetTimer(min, 2);
    seconds.innerText=SetTimer(sec, 2);
    miliseconds.innerText=SetTimer(msec, 3);
    btnResume.style.display="none";
    btnReset.style.display="none";
    btnStart.style.display="block";
};


function  startStopwatch() {
    counter = setInterval(() => {
      msec += 50;
      if (msec === 1000) {
        msec = 0;
        sec += 1;
      }
      if (sec === 60) {
        sec = 0;
        min += 1;
      }
    minutes.innerText=SetTimer(min, 2);
    seconds.innerText=SetTimer(sec, 2);
    miliseconds.innerText=SetTimer(msec, 3);
    }, 50);
  }
  
  function SetTimer(digit, len) {
    const str = String(digit);
    if (str.length === len) {
      return str;
    }
    if (len === 3) {
      if (str.length === 1) {
        return "00" + str;
      } else if (str.length === 2) {
        return "0" + str;
      }
    }
    if (len === 2) {
      if (str.length === 1) {
        return "0" + str;
      }
    }
  }





