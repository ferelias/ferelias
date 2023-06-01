import React from 'react';
import frontend from '../img/frontend.png';
import '../../public/css/portfolio.css';
import { NavLink } from 'react-router-dom';


const Frontend = () => {
  return (
    <div className="contenedor">
      <div className='cont-img'>
        <img className='img-front' src={frontend} alt="" />
      </div>
      <div className='cont-des'>
        <p>
        Como desarrollador frontend, mi trabajo es darle vida a los diseños de UI/UX, convirtiéndolos en sitios web y aplicaciones móviles totalmente funcionales. Utilizando herramientas en programación como HTML, CSS y JavaScript. 
        </p>
        <NavLink to="/portfolifrontend" className='enlace-work'  href="">
          <div className='btn-work'>
            <p>Explorar Trabajo</p>
            <h1>></h1>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Frontend
