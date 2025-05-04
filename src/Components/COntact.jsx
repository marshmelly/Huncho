import React from 'react'
import fb from './fb.jpeg'
import CardShadowForm from './CardShadowForm'

const Contact = () => {
  return (
    <div>
     <CardShadowForm>
     <h1>Contacts</h1>
      <h4>Want to get more new haircuts? Subscribe to our channel</h4>
      <form action="">
        <input type="text" placeholder='Enter email' className="form-control" /> <br />
        <button type='submit'className='btn btn-outline-success bg-dark text-white'>Subscribe</button>
      </form><br />
     </CardShadowForm>

      <p>You can find us on multiple social media platforms</p>
      <img src={fb} alt="social media" />


    
      

    </div>
  )
}

export default Contact
