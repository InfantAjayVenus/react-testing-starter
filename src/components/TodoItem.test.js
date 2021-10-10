import { fireEvent, render } from "@testing-library/react";
import TodoItem from "./TodoItem";


const setupTests = (todoData) => {
  const toggleHandler = jest.fn();
  const deleteHandler = jest.fn();
  const element = render(
    <TodoItem
      todo={todoData}
      markComplete={toggleHandler}
      delTodo={deleteHandler}
    />
  );

  return {
    toggleHandler,
    deleteHandler,
    element,
  };
};

test("empty object", () => {
  const { element } = setupTests({});

  expect(element.container).toBeEmptyDOMElement();
});

test("toggle complete", () => {
  const { element, toggleHandler } = setupTests({
    id: 0,
    title: "complete testing today",
    completed: false,
  });

  fireEvent.click(element.getByRole("checkbox"));
  expect(toggleHandler).toBeCalled();
});

test("item decoration", () => {
  const { element } = setupTests({
    id: 0,
    title: "complete testing today",
    completed: true,
  });

  expect(element.getByRole('listitem')).toHaveStyle("text-decoration: line-through");
});

test("delete item", () => {
  const { element, deleteHandler } = setupTests({
    id: 0,
    title: "complete testing today",
    completed: true,
  });

  fireEvent.click(element.getByRole('button'));
  expect(deleteHandler).toHaveBeenCalled();
})
