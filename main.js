import './style.css'
import './style.css'
let man = document.querySelector('#man'); 
let frame = 0; 
let nframes =4; 
let size = 60;
let sframes =8;
let sstart =4;
function showNextFrame () {
  frame = (frame + 1) % nframes;
  let offset = frame * size;
  man.style.backgroundPosition = `0 -${offset}px`;
}
function sshowNextFrame () {
  frame = (frame + 1) % sframes;
  let offset = (frame+sstart) * size;
  man.style.backgroundPosition = `0 -${offset}px`;
  if (frame<7) {
    setTimeout(sshowNextFrame,200)

  }
    
}
let manx = 10;
/*setInterval( 
  showNextFrame,
  1000 / 10
)*/
function forward(event){
if (event.key=="d"){
  manx += 5
  showNextFrame(
  )
  
 man.style.left = `${manx}px`;
   man.style.transform = "rotateY(0deg)"
  }
}
window.addEventListener(
  "keypress",
  forward 
)

function back(event){
if (event.key=="a"){
  manx += -5
 man.style.left = `${manx}px`;
  man.style.transform = "rotateY(180deg)"
    showNextFrame(
  )
  }
}
window.addEventListener(
  "keypress",
  back
)




//function jump(event){
//if (event.key=="w"){
//  manx += -1
// man.style.top = `${manx}px`;
//  }
//}
//window.addEventListener(
//  "keypress",
//  jump
//)