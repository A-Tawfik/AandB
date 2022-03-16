import { useState } from 'react'

import isaac from '../images/isaac.jpeg'
import isaac2 from '../images/Isaac-2.jpeg'


function Contact() {
  const [buttonDisabled, setButtonDisabled] = useState(true);//true
  const [formDisabled, setFormDisabled] = useState(false);//false
  const [postingData, setPostingData] = useState(false);//false
  const [formSuccess, setFormSuccess] = useState(false);//fasle
  const [formData, setFormData] = useState({ name: '', message: '', email: '' });

  const updateFormData = (e) => {
    setButtonDisabled(false)
    const elName = e.target.name
    const elValue = e.target.value
    const newFormData = { ...formData, [elName]: elValue }
    setFormData(newFormData)
    setButtonDisabled(!Object.values(newFormData).every(x => x))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormDisabled(true)
    setPostingData(true)

    setTimeout(() => {
      try {
        postFormData(formData)
        setPostingData(false)
        setFormSuccess(true)

      } catch (e) {
        console.error(e)
        setButtonDisabled(true)
        setFormDisabled(false)
        setFormSuccess(false)
        setPostingData(false)
      }
    }, 2000)
  }
  return (
    <section className='contact'>
      <div className="flex-split">
        <div className="flex-item description">
          {formSuccess ? <h2 className="empty" /> : <h2>Contact Us</h2>}
          <p>Feel free to reach out with any questions and our furry assistant will get back to you soon.</p>
          {!formSuccess && <img className="rounded margin-top-25" src={isaac} alt="isaac-typing" />}
        </div>
        {formSuccess ?
          <div className='flex-item thankyou-message'>
            <h2>THANK YOU! ❤️</h2>
            <p>We will reply to any questions as soon as possible!</p>

          </div> :
          <div className={`flex-item contact-form ${postingData && 'loading'}`}>
            <div className="loading-overlay">
              <div className="lds-heart">
                <div />
              </div>
            </div>
            <form onSubmit={handleSubmit} onChange={updateFormData}>
              <div className='field-group'>
                <label htmlFor="name">Name</label>
                <input disabled={formDisabled} id="name" name="name" placeholder="Full name / Party name" />
              </div>


              <div className='field-group'>
                <label htmlFor="message">Message</label>
                <textarea disabled={formDisabled} id="message" name="message" rows="10"
                  placeholder="Tell us what's on your mind..."></textarea>


              </div>

              <div className='field-group'>
                <label htmlFor="email">Email</label>
                <input disabled={formDisabled} id="email" name="email" type="email"
                  required placeholder="your.name@email.com" />
              </div>
              <button disabled={formDisabled || buttonDisabled}>
                Send
              </button>

            </form>
          </div>}
      </div>
      {formSuccess && <div className="flex-split">
        <div className="flex-item">
          <img className="rounded" src={isaac} alt="isaac-typing" />
        </div>
        <div className="flex-item">
          <img className="rounded" src={isaac2} alt="isaac-happy" />
        </div>
      </div>}
    </section>
  );
}

export default Contact;


const postFormData = (formData) => {
  const url = 'https://script.google.com/macros/s/AKfycbzUWz4luN9OVc0YvitpwQvanCK9LwOPa5aiMy7bBaTTVBcobMoiSLAA65ztuSFL6Rw1/exec'
  const settings = {
    method: 'POST',
    mode: 'no-cors',
    redirect: 'follow',
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  };
  const queryParams = Object.keys(formData).map(key => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`
  }).join('&')

  return fetch(`${url}?${queryParams}`, settings).then((res) => res).then((rep) => rep).catch(e => console.error(e))

}