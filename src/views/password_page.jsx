import { useState } from 'react';

import hash from '../hash.json'
import bcryptjs from 'bcryptjs';


function PasswordPage({ setPassword }) {
  const [passFail, setPassFail] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    const password = e.target.elements['password'].value.toLowerCase()
    if (bcryptjs.compareSync(password, hash.hash)) {
      console.log("SUCCESS")
      localStorage.setItem('aAndBPass', password)
      setPassword(password)
    } else {
      console.log("FAIL")
      setPassFail(true)
    }

  }
  return (
    <div className='password-page'>
      <div className="password__welcome">
        <h2>Welcome to our wedding website</h2>
        <p>We're so happy to have you here. Please find the password on the back of the save the date or invitation.</p>
      </div>
      <form className='password__form' onSubmit={onSubmit}>
        <div className='password__input'>
          <input name='password' type='password' placeholder='Password' />
          {passFail && <sub className='validation'>Incorrect password, please try again</sub>}
        </div>
        <div className='password__button'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>

  );
}

export default PasswordPage;
