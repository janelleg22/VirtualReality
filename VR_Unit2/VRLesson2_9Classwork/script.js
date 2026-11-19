let maze = [
  "xxxxxxxxxxxxxxxxxxxxxx",
  "x-------x-T-x-x-----xx",
  "x--xxxx-x---x-x--xx--x",
  "x--x-ox-xx-xxo---Tx--x",
  "x--xx-x-----=--xxxxo-x",
  "x--ox---x---x-x--oxx--",
  "x--xxxxxxxx-xxx-xxxx--",
  "x-----ox---xxox----x-x",
  "x--xx-xx-T-x--xxx--x-x",
  "x--ox-x---xxx-xox-xx-x",
  "x--xo---x----------x-x",
  "x--xxxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})