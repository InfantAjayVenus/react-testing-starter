import {render, screen} from '@testing-library/react';
import AddTodo from './AddTodo';

test('empty input', ()=> {
  const {container, getByRole} = render(<AddTodo addTodo={()=>{}}/>)
  expect(getByRole('textbox')).toBeEmptyDOMElement();
  //screen.debug(getByRole('textbox'))
})
