import CellSimulator from './CellSimulator';
import 'jest-styled-components'
import { render, screen } from '@testing-library/react';

test('renders CellSimulator- 36 cells', () => {
  render(<CellSimulator/>)
  let element = screen.getAllByTestId('cell-container-itemid')
  expect(element.length).toBe(36);
});




