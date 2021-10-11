import {fireEvent, render, } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App'

it('should modify page on route', () => {
  const element = render(<App/ >, {wrapper: MemoryRouter});

  fireEvent.click(element.getByText(/about/i))
  expect(element.getByText(/This is the TodoList app v1.0.0. It is part of a React crash course/i)).toBeInTheDocument();
})
