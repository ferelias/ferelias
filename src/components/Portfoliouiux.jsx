import React from 'react'
import cine from '../img/cine.png';
import pizza from '../img/pizza.png';
import toulouse from '../img/toulouse.png';
import clima from '../img/climaferel.png';
import frc from '../img/lcf.png';
import { NavLink } from 'react-router-dom';

const Portfoliouiux = () => {
  return (
    <div className="contenedor-titulo">

        <div className="titulo ">
            <div className="regresar">
                <NavLink to="/uiux"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3333 16H12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.1667 30.3333C23.9907 30.3333 30.3333 23.9907 30.3333 16.1667C30.3333 8.34263 23.9907 2 16.1667 2C8.34263 2 2 8.34263 2 16.1667C2 23.9907 8.34263 30.3333 16.1667 30.3333Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.1667 10.5L10.5 16.1667L16.1667 21.8333" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </NavLink>
            </div>
            <h1>UI/UX</h1>
        </div>

        <div className="contenido margintop">
            <div className="imagen">
                <img className='img-uiux' src={frc} alt="" />
            </div>
        </div>

        <div className="contenido margintop">
            <div className="imagen">
                <img className='img-uiux' src={cine} alt="" />
            </div>
        </div>

        <div className="contenido margintop">
            <div className="imagen">
                <img className='img-uiux' src={toulouse} alt="" />
            </div>
        </div>

        <div className="contenido margintop">
            <div className="imagen">
                <img className='img-uiux' src={pizza} alt="" />
            </div>
        </div>

        <div className="contenido margintop">
            <div className="imagen">
                <img className='img-uiux' src={clima} alt="" />
            </div>
        </div>
    </div>
  );
}

export default Portfoliouiux
