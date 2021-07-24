# Cell Simulator App

This is a Cell Simulator game.  This is the game of cells where they care about their cardinal neighbors -- those to the North,
East, West and South and diagonal neighbors too.

| ![Screenshot of the game](https://i.imgur.com/jDzJNPT.png) |
| :-----------------------------------------: |
|         _A screenshot of the game_          |

[Try the live version on Vercel →](https://cell-simulator-app.vercel.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- At initial state, User should see an empty board.
- User can make Cells "alive".
- User can make Cells "dead".
- User can trigger "next generation".
- User can trigger a "reset" to the initial state.

### Next generation

- When the next generation is running:
  - A Cell with fewer than two live neighbours dies of under-population.
  - A Cell with 2 or 3 live neighbours lives on to the next generation.
  - A Cell with more than 3 live neighbours dies of overcrowding.
  - An empty Cell with exactly 3 live neighbours "comes to life".
  - A Cell who "comes to life" outside the board should wrap at the other side of the board.
- Once the next generation is done, User can trigger "next generation" again.

** Note: neighbors in this scenario are the cells directly North, East, South and West and diagonals too. **

## Features

This app does many things including:

- Animated cellular automata
- Reset button to clear the board
- Next generation button to start the cell simulation
- Sample stages of the Cell simulation below:

First Generation 
![](https://i.imgur.com/snk68gV.png)

Next Generation 
![](https://i.imgur.com/khSZNBf.png)

Next Generation 
![](https://i.imgur.com/5UVaUmU.png)

Next Generation 
![](https://i.imgur.com/khSZNBf.png)


## Improvements roadmap

Here's some things that should be improved further:

- [ ] More comprehensive tests
- [ ] Custom input from user for number of rows and columns 
- [ ] Better responsive design with CSS-grid implementation
- [ ] Error Boundaries to stop the whole app crashing if there's a localised error

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test -u`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  