import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom/extend-expect';

describe('MyForm', () => {
  test('should submit the form when the button is clicked', () => {
    render(<MyForm />);

    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    // Simulate user input and click event
    // ...

    expect(submitButton).toBeEnabled();
  });
});

function MyForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" />

      <button type="submit">Submit</button>
    </form>
  );
}