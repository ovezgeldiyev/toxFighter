// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end


var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  let hour = document.querySelector("#hour");
  let minute = document.querySelector("#minute");
  let second = document.querySelector("#second");

  var c = 3620; //Initially set to 1 hour
  function myClock() {
    --c;
    var seconds = c % 60; // Seconds that cannot be written in minutes
    var secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
    var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
    var hours = (secondsInMinutes - minutes) / 60;
    // Now in hours, minutes and seconds, you have the time you need.
    console.clear();
    console.log(hours + ":" + minutes + ":" + seconds);
    console.log(hours.toString(), minutes)
    let myHour = hours.toString()
    let myMinute = minutes.toString()
    let mySecond = seconds.toString()
    if(myHour.length === 1) {
      hour.innerText = `0${myHour}`;
    }
    else {
      hour.innerText = myHour;
    }
    if(myMinute.length === 1) {
      minute.innerText = `0${myMinute}`;
    }
    else {
      minute.innerText = myMinute;
    }
    if(mySecond.length === 1) {
      second.innerText = `0${mySecond}`;
    }
    else {
      second.innerText = mySecond;
    }

    if (c == 0) {
      clearInterval(myTimer);
    }
  }
}

clock();


