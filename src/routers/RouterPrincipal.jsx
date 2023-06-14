import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Contacto from '../components/Contacto'
import Diseñador from '../components/Diseñador'
import Frontend from '../components/Frontend'
import Sotware from '../components/Sotware'
import Arte from '../components/Arte'
import Portfoliouiux from '../components/Portfoliouiux'
import Portfoliofrontend from '../components/Portfoliofrontend'

const RouterPrincipal = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="menu">
          <div className="inicio">
            <NavLink to="/inicio">FERNANDO ELIAS</NavLink>
          </div>

          <div className="redesSociales">
            <a href="https://www.instagram.com/ferel.studio/" target="_new">
              <svg
                className="svg"
                width="73"
                height="73"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="36.5"
                  cy="36.5"
                  r="35"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="3"
                />
                <path
                  d="M45.5 19H28.5C23.8056 19 20 22.8056 20 27.5V44.5C20 49.1944 23.8056 53 28.5 53H45.5C50.1944 53 54 49.1944 54 44.5V27.5C54 22.8056 50.1944 19 45.5 19Z"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.7995 34.9291C44.0093 36.344 43.7677 37.7889 43.1089 39.0585C42.4502 40.328 41.4079 41.3575 40.1303 42.0006C38.8527 42.6436 37.4049 42.8675 35.9928 42.6402C34.5806 42.413 33.2761 41.7463 32.2648 40.7349C31.2534 39.7236 30.5867 38.419 30.3594 37.0069C30.1322 35.5948 30.356 34.147 30.9991 32.8694C31.6421 31.5918 32.6716 30.5495 33.9412 29.8908C35.2108 29.232 36.6557 28.9903 38.0705 29.2001C39.5137 29.4142 40.8498 30.0866 41.8814 31.1183C42.913 32.1499 43.5855 33.486 43.7995 34.9291Z"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.3503 26.6501H46.3614"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="https://github.com/ferelias" target="_new">
              <svg
                width="73"
                height="73"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="36.5"
                  cy="36.5"
                  r="35"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="3"
                />
                <path
                  d="M32.2051 49.4313C23.4872 52.0467 23.4872 45.0724 20 44.2006M44.4103 54.6621V47.9144C44.4757 47.083 44.3633 46.2472 44.0807 45.4626C43.7982 44.6779 43.3518 43.9624 42.7713 43.3636C48.2462 42.7534 54 40.6785 54 31.1585C53.9996 28.7242 53.0632 26.3832 51.3846 24.62C52.1794 22.4903 52.1232 20.1361 51.2277 18.0467C51.2277 18.0467 49.1703 17.4365 44.4103 20.6272C40.414 19.5441 36.2014 19.5441 32.2051 20.6272C27.4451 17.4365 25.3877 18.0467 25.3877 18.0467C24.4921 20.1361 24.4359 22.4903 25.2308 24.62C23.5397 26.3962 22.6023 28.7584 22.6154 31.2108C22.6154 40.6611 28.3692 42.7359 33.8441 43.4159C33.2705 44.0087 32.828 44.7156 32.5457 45.4907C32.2633 46.2657 32.1473 47.0916 32.2051 47.9144V54.6621"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="https://twitter.com/?lang=es" target="_new">
              <svg
                width="73"
                height="73"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="36.5"
                  cy="36.5"
                  r="35"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="3"
                />
                <path
                  d="M55 22.0155C53.52 23.0595 51.8814 23.8579 50.1473 24.3801C49.2165 23.3099 47.9795 22.5513 46.6036 22.2071C45.2277 21.8628 43.7792 21.9494 42.4541 22.4552C41.129 22.9609 39.9912 23.8614 39.1946 25.0349C38.398 26.2084 37.981 27.5982 38 29.0164V30.5619C35.2841 30.6323 32.5929 30.03 30.1661 28.8085C27.7393 27.587 25.6523 25.7843 24.0909 23.561C24.0909 23.561 17.9091 37.4701 31.8182 43.6519C28.6354 45.8124 24.8438 46.8957 21 46.7428C34.9091 54.4701 51.9091 46.7428 51.9091 28.9701C51.9077 28.5396 51.8663 28.1102 51.7855 27.6874C53.3627 26.1318 54.4758 24.1679 55 22.0155Z"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/inicio" element={<Home />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/uiux" element={<Diseñador />}></Route>
          <Route path="/frontend" element={<Frontend />}></Route>
          <Route path="/sotware" element={<Sotware />}></Route>
          <Route path="/artedigital" element={<Arte />}></Route>
          <Route path="/portfoliouiux" element={<Portfoliouiux />}></Route>
          <Route
            path="/portfolifrontend"
            element={<Portfoliofrontend />}
          ></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterPrincipal


