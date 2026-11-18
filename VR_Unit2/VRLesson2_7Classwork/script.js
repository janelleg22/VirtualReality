let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  dude = new Dude(0, 1, -5);

  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  dude.jump();

  window.requestAnimationFrame( loop );
}