import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./css/main.css";
// import Header from './view/templates/Header';
import SignInPage from './view/pages/SignInPage';
import HomePage from './view/pages/HomePage';
import SignUpPage from './view/pages/SignUpPage';
import SplashPage from './view/pages/SplashPage';
import Footer from './view/templates/Footer';
import MessagePage from './view/pages/MessagePage';
import PeoplePage from './view/pages/PeoplePage';
import ProfilePage from './view/pages/ProfilePage';

export default function App() {
  const [login, setLogin] = useState(true);
  const [splash, setSplash] = useState(true);

  useEffect(() => {

  }, [setLogin]);

  // useEffect(() => {
  //   let timer = setTimeout(() => { setSplash(true) }, 2000);
  // }, []);

  return (
    <BrowserRouter>
      {/* {
        splash ? (<>
          {login ? <Header /> : null}
        </>) : null
      } */}
      <Routes>
        
        {
          splash ? (
            <>
              {
                login ? (<>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/msg' element={<MessagePage />} />
                  <Route path='/ppl' element={<PeoplePage />} />
                  <Route path='pf' element={<ProfilePage />} />
                </>) : (<>
                  <Route path='/' element={<SignInPage />} />
                  <Route path='/signup' element={<SignUpPage />} />
                </>)
              }
            </>
          ) : (
            <Route path='*' element={<SplashPage />} />
          )
        }
      </Routes>
      {
        splash ? (<>
          {login ? <Footer /> : null}
        </>) : null
      }
    </BrowserRouter>
  )
}
