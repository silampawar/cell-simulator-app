import Cell from './Cell';
import 'jest-styled-components'
import { render, screen } from '@testing-library/react';

test('renders Cell component link- alive cell', () => {
  render(<Cell isAlive={true} updateStatus={jest.fn()} currentPos={{x:2,y:3 }}/>)
  let element = screen.getAllByTestId('cell-container-itemid')
  expect(element.length).toBe(1);

  expect(screen.getByTestId('cell-container-itemid')).toHaveStyle(`background-color: green`)

});

test('renders Cell component link- dead cell', () => {
  render(<Cell isAlive={false} updateStatus={jest.fn()} currentPos={{x:2,y:3 }}/>)
  expect(screen.getByTestId('cell-container-itemid')).toHaveStyle(`background-color: grey`)

});

