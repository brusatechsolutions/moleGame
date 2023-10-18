const mole = document.querySelectorAll(".mole");

let isHungry = true;
let nextTime = Date.now();
let interval = 0;
function next() {
  if (Date.now() > nextTime) {
    if (isHungry) {
        console.log(mole[interval].querySelector('img'))
      //mole[interval].querySelector('img').src = "./assets/king-mole-hungry.png";
    } else {
        console.log(mole[interval].querySelector('img'))
      //mole[interval].querySelector('img').src = "./assets/king-mole-leaving.png";
    }
    isHungry = !isHungry;
    nextTime = Date.now() + 1000;
  }
  interval ++;
  requestAnimationFrame(next);
}
next();
