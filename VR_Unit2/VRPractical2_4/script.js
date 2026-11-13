let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  rocket = new Rocket(0, 0, 10);
  loop();
})

function loop(){
  rocket.launch();
  
  window.requestAnimationFrame( loop );
}
