import React from 'react';
// import { redirect, useActionData } from "react-router-dom"

const Contact = () => {

    
    return (
        <div className='create'>
            <h2>Contact Me</h2>

            <form method='post' action='/contact'>
                <label>
                <input type="email" name="email" required placeholder='Your email'/>
                </label>
                <label>
                <textarea name="message" required placeholder='Your message'></textarea>
                </label>
                <button>Submit</button>

              
            </form>
          
        </div>
    );
}

export default Contact;


export const contactAction = async ({request}) => {

    const data = await request.formData()

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    // if (submission.message.length < 10) {
    //     return{error: 'Message must be 10 chars long'}
    // }

    // return redirect('')
}