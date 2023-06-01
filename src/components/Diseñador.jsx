import React from 'react';
import uiux from '../img/uiux.png';
import '../../public/css/description.css'
import { NavLink } from 'react-router-dom';

const Diseñador = () => {
  return (
    <div className='contenedor'>
      <div className='cont-img'>
        <img className='img-diseñador' src={uiux} alt="" />
      </div>
      <div className='cont-des'>
        <p>
                    Como diseñador UI/UX, mi enfoque principal es ayudarte a crear experiencias de usuario intuitivas, eficientes y atractivas para tus aplicaciones web y móviles.
                    Mi trabajo implica la creación de wireframes, prototipos y diseños finales.
        </p>
        <NavLink to="/portfoliouiux" className='enlace-work' href="">
          <div className='btn-work'>
            <p className='txt-explorar'>Explorar Trabajo</p>
            <h1>></h1>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Diseñador
