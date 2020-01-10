# memory-card-game
## Welcome to my first ever React App!

The objective of the game is to click all the images once! If you click an image twice the game is over!Each time you click the images will reposition to random locations.

## How it work
    * Json File is imported into my App.js File where it is stored in the state then mapped into JSX components!
    * When These components are clicked they active a click event that pushes its ID into the Clicked array in State!
    * Conditionals in Event Handler look out for ID's already "included" in state or if the state array is full you win!