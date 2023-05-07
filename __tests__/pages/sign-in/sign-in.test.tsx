import { render, screen } from '@testing-library/react';
import SignIn from '../../../pages/sign-in/index';
import React from 'react';


describe('SignIn component', () => {
  it('renders the email and password fields', () => {
    render(<SignIn />);

    // const emailInput = screen.getByLabelText('Email Address');
    // const passwordInput = screen.getByLabelText('password');
    // const passwordInput = screen.getByRole('textbox', { name: 'password' });
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  // it('calls the submit function when the form is submitted', () => {
  //     const handleSubmitMock = jest.fn();
  //     render(<SignIn handleSubmit={handleSubmitMock} />);
  //     // render(<SignIn />);
  
  //     const emailInput = screen.getByTestId('email');
  //     const passwordInput = screen.getByTestId('password');
  //     const submitButton = screen.getByRole('button', { name: /Sign In/i });
  
  //     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  //     fireEvent.change(passwordInput, { target: { value: 'password' } });
  //     fireEvent.click(submitButton);
  
  //     expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  //     expect(handleSubmitMock).toHaveBeenCalledWith({
  //       email: 'test@example.com',
  //       password: 'password',
  //     });
  //   });
});

// describe('SignIn component', () => {
//     it('renders the email and password fields', () => {
//       render(<SignIn />);
  
//       const emailInput = screen.getByLabelText('Email Address');
//       const passwordInput = screen.getByLabelText('Password');
  
//       expect(emailInput).toBeInTheDocument();
//       expect(passwordInput).toBeInTheDocument();
//     });
  
//     it('calls the submit function when the form is submitted', () => {
//       const handleSubmitMock = jest.fn();
//       // render(<SignIn handleSubmit={handleSubmitMock} />);
  
//       const emailInput = screen.getByLabelText('Email Address');
//       const passwordInput = screen.getByLabelText('Password');
//       const submitButton = screen.getByRole('button', { name: /Sign In/i });
  
//       fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//       fireEvent.change(passwordInput, { target: { value: 'password' } });
//       fireEvent.click(submitButton);
  
//       expect(handleSubmitMock).toHaveBeenCalledTimes(1);
//       expect(handleSubmitMock).toHaveBeenCalledWith({
//         email: 'test@example.com',
//         password: 'password',
//       });
//     });
//   });