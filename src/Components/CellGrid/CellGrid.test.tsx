import CellGrid from './CellGrid';
import 'jest-styled-components'
import {render, screen} from '@testing-library/react'
import { TCellGrid } from '../../Utils/Util.d';

test('renders Cell component link', () => {
  
  const option1: Readonly<TCellGrid> = [
    [false,true,false,false,true,false], 
    [true,true,false,false,true,true],
    [false,false,false,false,false,false], 
    [false,false,false,false,false,false],
    [true,true,false,false,true,true], 
    [false,true,false,false,true,false] 
  ]
  

  render(<CellGrid grid={option1} updateStatus={jest.fn()} />)
  let element = screen.getAllByTestId('cellgrid-id1')
  expect(element.length).toBe(1);

   
  element = screen.getAllByTestId('cellgrid-id2')
  expect(element.length).toBe(6);

  element = screen.getAllByTestId('cell-anchore-itemid')
  expect(element.length).toBe(36);

  

});
