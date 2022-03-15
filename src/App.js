import { useState } from "react";
import bcryptjs from 'bcryptjs';

import hash from './hash.json'

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  Home,
  Contact,
  Details,
  RSVP,
  Registry,
  PasswordPage
} from './views'

import Header from './components/header'
import NavBar from './components/nav-bar'
import FooterCard from "./components/footer_card";

const App = () => {
  const [password, setPassword] = useState(localStorage.getItem('aAndBPass') || '')

  return (
    <HashRouter>
      {bcryptjs.compareSync(password, hash.hash) ?
        <>
          <NavBar />
          <Header />
          <div className='content-wrapper'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
              <Route path="/registry" element={<Registry />} />
              <Route path="/rsvp" element={<RSVP />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <FooterCard />
        </> :
        <PasswordPage setPassword={setPassword} />
      }
    </HashRouter>
  );
}

export default App;