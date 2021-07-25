import {IUpdateStatusinGridProps, TCellGrid} from "./Util.d"

/*Genrate all dead/ false grid cells */
export const generateNewGrid = (x:number,y:number):TCellGrid =>{
    let xGrid=[];
    for(let i=0;i<x;i++){
        let yGrid =[];
        for(let j=0;j<y;j++){
            yGrid.push(false)
        }//end j
        xGrid.push(yGrid);
    }//end i

    return xGrid;

}

/*Update status in grid to dead or alive based on the current status */
export const updateStatusinGrid = ({gridArr,currentStatus,gridPos}:IUpdateStatusinGridProps):TCellGrid=> {
    return gridArr.map((row:Array<boolean>,i:number)=> 
                        i===gridPos.x?row.map((col:boolean,j:number)=>j===gridPos.y?!currentStatus:col):row);
}

/*Count the neighbours, right,left,above,below and all diagonals are considered*/
export function countAliveNeighbours(
    xPos: number, 
    yPos: number, 
    grid: TCellGrid
  ): number {
    let neighbours = 0
    const xMax = grid.length-1;
    const yMax = grid[0].length-1;
  
    for (let x = xPos - 1; x <= xPos + 1; x++) {
      for (let y = yPos - 1; y <= yPos + 1; y++) {

         if (x < 0 || y < 0) continue
         if (x > xMax || y > yMax) continue
         if (x === xPos && y === yPos) continue
         if (grid[x][y]){
           neighbours++
         } 
      }
    }
    return neighbours
  }

/*
* A Cell with fewer than two live neighbours dies of under-population.
* A Cell with 2 or 3 live neighbours lives on to the next generation.
* A Cell with more than 3 live neighbours dies of overcrowding.
* An empty Cell with exactly 3 live neighbours "comes to life".
* A Cell who "comes to life" outside the board should wrap at the other side of the board.
*/
export const executeGenRules = (cell: boolean, aliveNeighboursCount: number): boolean =>
{
  
    if (cell && aliveNeighboursCount < 2) return false;
    if (cell && (aliveNeighboursCount === 2 || aliveNeighboursCount === 3)) return true;
    if (cell && aliveNeighboursCount > 3) return false;
    if (!cell && (aliveNeighboursCount === 3)) return true;
    
    return false;   
}



/*A function to generate a new generation, including wrapping of numbers*/
export function generateNextGen(grid:TCellGrid): TCellGrid {
    const columns = grid[0].length
    const rows = grid.length
    const nextGrid = generateNewGrid(rows, columns)    
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < columns; y++) {
        nextGrid[x][y] = executeGenRules(
          grid[x][y],
          countAliveNeighbours(x,y,grid)
        )
      }
    }

    for (let x = -1; x < rows + 1; x++) {
      for (let y = -1; y < columns + 1; y++) {
        const isWrapReq = (x < 0 || y < 0 || x >= rows || y >= columns)
        if (isWrapReq) {
          const nextCellState = executeGenRules(
            false,
            countAliveNeighbours(x, y, grid)
          ) 
          if (nextCellState) {
            const wrappedX = findWrapNumber(x, 0, rows - 1)
            const wrappedY = findWrapNumber(y, 0, columns - 1)
            nextGrid[wrappedX][wrappedY] = true
          }
        }
      }
    }
    return nextGrid
  }
  
  export const findWrapNumber = (num: number, min: number, max: number) => {
    if (num < min) return max
    if (num > max) return min
  
    return num
  }
