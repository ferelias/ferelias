import React from 'react';
import toulouse from '../img/toulouse.png';
import clima from '../img/climaferel.png';
import skate from '../img/skate.png';
import fox from '../img/fox.png';
import { NavLink } from 'react-router-dom';

const Portfoliofrontend = () => {
  return (
    <div className="contenedor-titulo">
        <div className="titulo ">
            <div className="regresar">
                <NavLink to="/frontend"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3333 16H12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.1667 30.3333C23.9907 30.3333 30.3333 23.9907 30.3333 16.1667C30.3333 8.34263 23.9907 2 16.1667 2C8.34263 2 2 8.34263 2 16.1667C2 23.9907 8.34263 30.3333 16.1667 30.3333Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.1667 10.5L10.5 16.1667L16.1667 21.8333" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </NavLink>
            </div>
            <h1>front end</h1>
        </div>

        <div className="contenido margintop">
            <div className="info">
                <div className="nombre">
                    <p>Toulouse Esspreso</p>
                </div>
                <div className="descripcion">
                    <p className='des-proyect'>Este proyecto consiste en crear el diseño y desarrollo de una página web de una cafetería, utilizando herramientas de UI/UX como Figma, así como herramientas web como HTML, CSS y JavaScript.</p>
                </div>
                <div className="ver-mas">
                    <a href="https://ferelias.github.io/Cafe-Toulouse/" className="enlace-workpage" target="_new">Abrir</a>
                </div>
            </div>
            
            <div className="imagen">
                <img className='img-front' src={toulouse} alt="" />
            </div>
        </div>

        <div className="contenido margintop">
            <div className="info">
                <div className="nombre">
                    <p>Clima Ferel</p>
                </div>
                <div className="descripcion">
                    <p className='des-proyect'>Clima Ferel, una aplicación diseñada con React. Clima Ferel te permite obtener información precisa y actualizada sobre el clima en cualquier ciudad del mundo.</p>
                </div>
                <div className="ver-mas">
                    <a href="https://ferelias.github.io/clima-ferel/build/" className="enlace-workpage" target="_new">Abrir</a>
                </div>
            </div>
            
            <div className="imagen">
                <img className='img-front' src={clima} alt="" />
            </div>
        </div>

        <div className="contenido margintop">
            <div className="info">
                <div className="nombre">
                    <p>Random Fox</p>
                </div>
                <div className="descripcion">
                    <p className='des-proyect'>Este es un proyecto que utiliza la API RandomFox para mostrar imágenes aleatorias de zorros en una página web. Las cuáles se muestran y se borran de pantalla por medio de un botones.

Para mejorar la velocidad de carga de la página, se ha implementado la técnica de lazy loading en las imágenes. De esta manera, se retrasa la carga de las imágenes hasta que el usuario las necesita o las solicita explícitamente, lo que mejora significativamente el tiempo de carga de la página..</p>
                </div>
                <div className="ver-mas">
                    <a href="https://ferelias.github.io/lazy-loanding/" className="enlace-workpage" target="_new">Abrir</a>
                </div>
            </div>
            
            <div className="imagen">
                <img className='img-front' src={fox} alt="" />
            </div>
        </div>

        <div className="contenido margintop">
            <div className="info">
                <div className="nombre">
                    <p>Galeria de Skate</p>
                </div>
                <div className="descripcion">
                    <p className='des-proyect'>Este código es un ejercicio de promesas y async/await para crear una animación que muestra y oculta diferentes divs con un tiempo de espera aleatorio.</p>
                </div>
                <div className="ver-mas">
                    <a href="https://ferelias.github.io/Galeria-de-divs/" className="enlace-workpage" target="_new">Abrir</a>
                </div>
            </div>
            
            <div className="imagen">
                <img className='img-front' src={skate} alt="" />
            </div>
        </div>

    </div>      
  )
}

export default Portfoliofrontend
