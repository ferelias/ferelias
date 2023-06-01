import React from 'react'
import line from '../img/line.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
<>
    

    <section className="main">
        <div className="presentacion">
            <div className="nom">
                <p>fernando Elias</p>
            </div>
        </div>

        <div className="habilidades">
            <div className="habilidades">
                <p className="phab">habilidades</p>
                <NavLink to="/sotware" className="btnHab">Sotware</NavLink>
            </div>
        </div>

        <div className="line">
            <img src={line} alt="" />
        </div>

        <div className="disciplinas">
            <div className="biografia">
                <p className="bioText">¡Hola! Soy Fernando un apasionado del diseño, el desarrollo web y el arte digital. Me encanta crear interfaces únicas y atractivas que sean fáciles de usar. Me considero un artista digital y un desarrollador creativo, siempre buscando formas de aterrizar la creatividad en interfaces funcionales y efectivas.</p>
                <div className="contactar">
                    <NavLink to="/contacto" className="btnBio">Contactar</NavLink>
                </div>
            </div>

            <div className="disbtn none">
                <NavLink to="/uiux" className="btnDis">Diseño UI-UX</NavLink>
                <NavLink to="/frontend" className="btnDis">Desarrollo Front End</NavLink>
                <NavLink to="/artedigital" className="btnDis">Arte digital</NavLink>
            </div>
        </div>
    </section>
</>
  )
}

export default Home

