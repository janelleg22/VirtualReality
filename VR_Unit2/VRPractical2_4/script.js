let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [], ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(-10,-1);
    let z = rnd(-20,20);

    let rocket = new Rocket(x,y,z);
    rockets.push(rocket);
  }

   for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(5,25);
    let z = rnd(-20,20);
    let ufo = new UFO(x,y,z);
    ufos.push(ufo);
  }
   loop();

});

   
function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }  

  for(let ufo of ufos){
    ufo.invade();
  }
  window.requestAnimationFrame( loop );
}
