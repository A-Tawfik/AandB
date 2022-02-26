import { useState } from "react";
import bcryptjs from 'bcryptjs';

import hash from './hash.json'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  Home,
  Contact,
  Details,
  RSVP,
  Registry
} from './views'

import Header from './components/header'
import NavBar from './components/nav-bar'

const App = () => {
  const [password, setPassword] = useState(localStorage.getItem('aAndBPass') || '')

  return (
    <BrowserRouter>
      {bcryptjs.compareSync(password, hash.hash) ?
        <>     <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/contact" element={<Contact />} />
          </Routes></> :
        <form onSubmit={(e) => {
          e.preventDefault()
          localStorage.setItem('aAndBPass', e.target.elements['password'].value)
          setPassword(e.target.elements['password'].value)
        }}>
          <input name='password' type='password' placeholder='Find the password on the invitation/save the date' />
          <button type="submit">Submit</button>
        </form>

      }
    </BrowserRouter>
  );
}

export default App;