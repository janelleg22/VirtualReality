/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/
let maze = [
  "xxxxxxxxxxxxxxxxxxxxxx",
  "---cxk--xc------c----x",
  "x--xxxx-x---x-x--xx--x",
  "x-------xx-xx----kx--x",
  "x--xx-x-----c--xxxxxxx",
  "xxxk--x-----x----xc--x",
  "xc-xx-xxxx-xxx-xxxx--x",
  "xx----c--x-xx--x-----x",
  "x--xx-xx-x-xk-xxx--x-x",
  "x--x--x---xxx-xc--xx-x",
  "x--c--x---kx------xk-x",
  "xxxxxxxxxxxxxxxxxxxx-x",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene, keys=[], coins=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let r = 0; r < maze.length; r++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    let row = maze[r];
    let cols = row.split("");

    for(let c = 0; c < cols.length; c++){
      let spot = cols[c];

    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
         if(spot == "x"){
        new Wall(c, 1, r);
      }
      else if(spot == "c"){
        let coin = new Coin(c, 1, r);
        coins.push(coin);
      }
      else if(spot == "k"){
        let key =new Key(c, 1, r);
        keys.push(key);
      }
    }

  }
  loop();  

})
function loop(){
  for(let i = 0; i < keys.length; i++){
    keys[i].jump();
  }
  for(let i = 0; i < coins.length; i++){
    coins[i].spin();
  }
  window.requestAnimationFrame( loop );
}