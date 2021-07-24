
import { TCellGrid } from "./Util.d";
import { executeGenRules, findWrapNumber, generateNextGen } from "./Util";
import {countAliveNeighbours, generateNewGrid, updateStatusinGrid} from "./Util"



test('Test Util functions - generateNewGrid - all dead -initial state', () => {
        const gridArr:Readonly<TCellGrid> = generateNewGrid(2,2);
        const deadCellCount = gridArr.map(cell=>cell.filter((item)=>!item).length).reduce((i,j)=>i+j)
        expect(gridArr.length).toBe(2);
        expect(deadCellCount).toBe(4);
})

test('Test Util functions - updateStatusinGrid - update status after clicking on the cell', () => {
    const gridArr:Readonly<TCellGrid> = generateNewGrid(2,2);
   let updatedCellGrid = updateStatusinGrid({gridArr,currentStatus:gridArr[1][1],gridPos:{x:1,y:1} })
   expect(updatedCellGrid[1][1]).toBe(true);

    updatedCellGrid = updateStatusinGrid({gridArr:updatedCellGrid,currentStatus:updatedCellGrid[1][1],gridPos:{x:1,y:1} })
   expect(updatedCellGrid[1][1]).toBe(false);

})

test('Test Util functions - countAliveNeighbours - count of alive neigbhours', () => {
    const gridArr:Readonly<TCellGrid> = [ 
          [true,true,true,false,false,true], 
          [false,false,false,false,false,true], 
          [false,false,false,false,false,true], 
          [true,false,false,false,false,false], 
          [true,false,false,false,false,false], 
          [true,false,false,true,true,true]  ];
    const count = countAliveNeighbours(0,1,gridArr);
    expect(count).toBe(2);
    expect(countAliveNeighbours(3,4,gridArr)).toBe(1);
})

test('Test Util functions - executeGenRules', () => {
    
    /*Only one active neighbour and a live cell*/
          let isValid:boolean = executeGenRules(true,1);
    expect(isValid).toBe(false);

     /*two actives neighbour and a live cell*/
      isValid = executeGenRules(true,2);
     expect(isValid).toBe(true);

     /*three actives neighbour and a live cell*/
     isValid = executeGenRules(true,3);
     expect(isValid).toBe(true);

     /*three actives neighbour and a dead cell*/
     isValid = executeGenRules(false,3);
     expect(isValid).toBe(true);

     /*three actives neighbour and a dead cell*/
     isValid = executeGenRules(false,4);
     expect(isValid).toBe(false);
})
test('Test Util functions - generateNextGen', () => {
const option1: Readonly<TCellGrid> = [ 
      [true,true,true,false,false,true],
      [false,false,false,false,false,true], 
      [false,false,false,false,false,true], 
      [true,false,false,false,false,false], 
      [true,false,false,false,false,false], 
      [true,false,false,true,true,true]  
    ]
  
    const option2: Readonly<TCellGrid> = [
      [false,true,false,false,true,false], 
      [true,true,false,false,true,true],
      [false,false,false,false,false,false], 
      [false,false,false,false,false,false],
      [true,true,false,false,true,true], 
      [false,true,false,false,true,false] 
    ]
  
    expect(generateNextGen(option1)).toStrictEqual(option2);

})

test('Test Util functions - ', () => {
    expect(findWrapNumber(-1, 0, 5)).toBe(5)
    expect(findWrapNumber(0, 0, 5)).toBe(0)
    expect(findWrapNumber(1, 0, 5)).toBe(1)
    expect(findWrapNumber(2, 0, 5)).toBe(2)
    expect(findWrapNumber(3, 0, 5)).toBe(3)
    expect(findWrapNumber(4, 0, 5)).toBe(4)
    expect(findWrapNumber(5, 0, 5)).toBe(5)
    expect(findWrapNumber(6, 0, 5)).toBe(0)
  })