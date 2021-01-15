import React from 'react'
import ContactForm from './ContactForm';
import {screen,render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

test("renders",() => {
 render(<ContactForm />)
}) 

test("form errors",async()=>{
    render(<ContactForm />)
    const firstname = screen.getByPlaceholderText(/edd/i);
    const lastname = screen.getByPlaceholderText(/burke/i);
    const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    console.log(firstname)

    userEvent.type(firstname,"fid");
    userEvent.type(lastname,"novruz");
    userEvent.type(email,"fidan@gm.llu") 
    
    const submit = screen.getByRole("button")

    userEvent.click(submit)
  
    //const error =  await screen.findByText(/error/i)
    //expect(error).toBeInTheDocument()
    const name = await screen.findByText(/fid/i)
    expect(name).toBeInTheDocument()

})