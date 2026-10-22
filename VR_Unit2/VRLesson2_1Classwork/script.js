window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
      let scene = document.querySelector("a-scene");
    
  //Challenge 2: Create a variable for <a-dodecahedron> and create it.
      let dodecahedron = document.createElement("a-dodecahedron");
      let octahedron = document.createElement("a-octahedron");

  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
      dodecahedron.setAttribute("position", "2 0 2");
      dodecahedron.setAttribute("radius", "2 0 2");
      dodecahedron.setAttribute("color", "pink");

      octahedron.setAttribute("position", "6 0 2");
      octahedron.setAttribute("radius", "2 0 2");
      octahedron.setAttribute("color", "purple");

  //Challenge 4: Add the <a-dodecahedron> to the scene
      scene.append(dodecahedron);
      scene.append(octahedron);

  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
  
})