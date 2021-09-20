import {fireEvent, render} from '@testing-library/react';
import AddTodo from './AddTodo';

test('empty input', ()=> {
  const handleClick = jest.fn();
  const {getByRole} = render(<AddTodo addTodo={handleClick}/>)
  expect(getByRole('textbox')).toBeEmptyDOMElement();
  expect(getByRole('button')).toBeDisabled();

  fireEvent(getByRole('button'), new MouseEvent('click'))
  expect(handleClick).toHaveBeenCalledTimes(0);
})

test('add input', () => {
  const handleClick = jest.fn();
  const {getByRole} = render(<AddTodo addTodo={handleClick}/>);

  fireEvent.change(getByRole('textbox'),{target: {value:"t"}});
  expect(getByRole('textbox').value).toEqual("t")
  expect(getByRole("button")).toBeEnabled();
})

test('blank input', ()=> {
  const handleClick = jest.fn();
  const {getByRole} = render(<AddTodo addTodo={handleClick}/>);
  const testInput = "   ";

  fireEvent.change(getByRole('textbox'), {target: {value: testInput}})
  expect(getByRole('textbox').value).toEqual("")
  expect(getByRole('button')).toBeDisabled();
})

test('submit input', () => {
  const testInput = "This is a text for testing input";
  const handleClick = jest.fn();
  const {getByRole} = render(<AddTodo addTodo={handleClick}/>);

  fireEvent.change(getByRole("textbox"), {target: {value: testInput}})
  fireEvent.submit(getByRole('button'));

  expect(handleClick).toHaveBeenCalledWith(testInput);
})

