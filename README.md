# Battleship

This is a modern version of the classic board game, Battleship. It was was built using _HTML_, _CSS_ (scss) and _Javascript_ (Webpack, Babel, Jest, Eslint). To play, visit https://jozef-hudec-27.github.io/battleship/.

## Getting started

To get started, install all dependencies using the command `npm install`. Then, start developing locally by running `npm start` to launch the development server. For a production-ready build, run `npm run build`. Also, there's a command to run the tests, `npm test`.

## Game

At the beginning of the game, ships are placed automatically to each board. A player posseses 10 ships in total, combined taking 20 squares of the 10x10 board. The ships are of sizes 4, 3, 3, 2, 2, 2, 1, 1, 1, 1. Then, the players will take turns attacking each other's boards. Players will be notified if a ship has been hit or sunk, and the first player to sink all of their opponent's ships will be declared the winner.

The game is played against an AI and includes 3 different levels of difficulty.
