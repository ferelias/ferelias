import React from 'react'
import javas from '../iconos/js.svg';
import jhtmll from '../iconos/html.svg';
import jccss from '../iconos/css.svg';
import sass from '../iconos/sass.svg';
import res from '../iconos/re.svg';
import three from '../iconos/three.svg';
import figma from '../iconos/figma.svg';
import xd from '../iconos/xd.svg';
import photo from '../iconos/photo.svg';
import illustrator from '../iconos/illustrator.svg';
import after from '../iconos/after.svg';
import light from '../iconos/light.svg';
import premiere from '../iconos/premiere.svg';
import blender from '../iconos/blender.svg';
import maya from '../iconos/maya.svg';

const Sotware = () => {
  return (
    <div className="skills">
        <div className="librerias">
            <div className="caja">
                <div className="c">
                    <img src={javas} alt="" />
                    <p>js</p>
                </div>
                <div className="c">
                    <img src={jhtmll} alt="" />
                    <p>HTML</p>
                </div>
                <div className="c">
                    <img src={jccss} alt="" />
                    <p>CSS</p>
                </div>
                <div className="c">
                    <img src={sass} alt="" />
                    <p>SASS</p>
                </div>
                <div className="c">
                    <img src={res} alt="" />
                    <p>REACT</p>
                </div>
                <div className="c">
                    <img src={three} alt="" />
                    <p>Three.js</p>
                </div>
                <div className="c">
                    <img src={figma} alt="" />
                    <p>figma</p>
                </div>
                <div className="c">
                    <img src={xd} alt="" />
                    <p>adobe xd</p>
                </div>
                <div className="c">
                    <img src={photo} alt="" />
                    <p>photoshop</p>
                </div>
                <div className="c">
                    <img src={illustrator} alt="" />
                    <p>illustrator</p>
                </div>
                <div className="c">
                    <img src={after} alt="" />
                    <p>after effects</p>
                </div>
                <div className="c">
                    <img src={light} alt="" />
                    <p>lightroom</p>
                </div>
                <div className="c">
                    <img src={premiere} alt="" />
                    <p>premiere</p>
                </div>
                <div className="c">
                    <img src={blender} alt="" />
                    <p>blender</p>
                </div>
                <div className="c">
                    <img src={maya} alt="" />
                    <p>maya</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sotware
