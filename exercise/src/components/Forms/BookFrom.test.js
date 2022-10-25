import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from 'react';
import BookForm from "./BookForm";

test('it should call the parent function when Add Book is clicked', () => {
  const onSubmit = jest.fn();
  const { getByText } = render(<BookForm addBook = {onSubmit}/>);
  fireEvent.click(getByText(/Add Book/i));
  expect(onSubmit).toBeCalled();
});

test('it should allow users to enter a title', () => {
    const onSubmit = jest.fn();
    const input = "Avengers";
    const { getByText } = render(<BookForm addBook = {onSubmit}/>);
    userEvent.type(screen.getByLabelText(/Title:/i), input);
    expect(screen.getByLabelText(/Title:/i)).toHaveValue(input);
});

test('it should allow users to enter a author', () => {
  const onSubmit = jest.fn();
  const input = "Stan Lee";
  const { getByText } = render(<BookForm addBook = {onSubmit}/>);
  userEvent.type(screen.getByLabelText(/Author:/i), input);
  expect(screen.getByLabelText(/Author:/i)).toHaveValue(input);
});