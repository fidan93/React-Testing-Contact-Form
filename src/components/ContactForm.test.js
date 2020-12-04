import React from 'react';
import {screen,render} from "@testing-library/react";
import ContactForm from './ContactForm';
import userEvent  from "@testing-library/user-event"

test("example test",() => {
render(<ContactForm />)
})

test("input test", async()=>{
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText(/Edd/i);
    const lnameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const textInput = screen.getByLabelText("Message")
    const submit = screen.getByRole('button')

    
    userEvent.type(nameInput,"fid");
    userEvent.type(lnameInput,"novr")
    userEvent.type(emailInput,"fidan@m.cm");
    userEvent.type(textInput,"hello");
    
    userEvent.click(submit)

    expect(emailInput).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()

    const firstNameRender = await screen.findByText(/novr/);
    expect(firstNameRender).toBeInTheDocument();
    
})