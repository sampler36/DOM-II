// Your code goes here
const eventList = [
  "mouseover", // done
  "mousemove", // done
  "drag", // done
  "wheel", // done
  "keydown",
  "keyup",
  "load",
  "resize", // done
  "scroll",
  "focus",
  "dblclick" // done
];
let busimg = document.querySelector(".busimg");
busimg.addEventListener("mouseover", function() {
  this.style.border = "2px solid green";
});

let letsgo = document.querySelector(".letsgo");
letsgo.addEventListener("mousemove", (event) => {
  event.target.style.color = "green";
});

let pull = document.querySelector(".d");
pull.addEventListener("drag", (event) => {
  event.target.style.size = "3px";
});
let head = document.querySelector(".head");
head.addEventListener("dblclick", (event) => {
  event.target.style.fontSize = "38px";
});

let dontleave = document.querySelector(".bigBtn");
        if (dontleave.addEventListener) {
        dontleave.addEventListener("wheel", myFunction);
        } else if (dontleave.attachEvent) {
            dontleave.attachEvent("focus", myFunction);
        }
              function myFunction() {
               alert("Sign Up below");
        }

