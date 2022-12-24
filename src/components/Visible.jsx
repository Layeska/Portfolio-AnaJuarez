import React from 'react'
import { useState } from 'react'
import Proyect from './Proyects';

const Visible = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button className='visibleBtn' onClick={() => setIsVisible(!isVisible)}>Mostrar {isVisible ? "menos" : "mas"} Más Proyectos</button>
            {isVisible && <Proyect/>}
        </div>
    )
}


export default Visible