// Your code goes here
const eventList = [
  "mouseover",
  "mousemove",
  "drag",
  "wheel",
  "keydown",
  "keyup",
  "load",
  "resize",
  "scroll",
  "focus",
  "dblclick"
];
let busimg = document.querySelector(".busimg");
busimg.addEventListener("mouseover", function() {
  this.style.border = "3px solid grey";
});

let letsgo = document.querySelector(".letsgo");
letsgo.addEventListener("mousemove", (event) => {
  event.target.style.color = "green";
});

let head = document.querySelector(".head");
head.addEventListener("dblclick", (event) => {
  event.target.style.fontSize = "38px";
});

let dontleave = document.querySelector(".dontleave");
        if (dontleave.addEventListener) {
        dontleave.addEventListener("wheel", myFunction);
        } else if (dontleave.attachEvent) {
            dontleave.attachEvent("focus", myFunction);
        }
              function myFunction() {
               alert("Sign Up below");
        }

