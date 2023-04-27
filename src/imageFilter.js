import React from "react";
import { IconoTema } from "./Components/UI"
import alimentacion from '../src/assets/images/alimentacion.svg';
import utilidades from '../src/assets/images/utilidades.svg';
import salud from '../src/assets/images/salud.svg';
import transporte from '../src/assets/images/transporte.svg';
import otros from '../src/assets/images/otros.svg';

export default (type) => {
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
        Utilidades: <IconoTema src={utilidades} alt="Utilidades" />,
        Salud: <IconoTema src={salud} alt="Salud" />,
        Transporte: <IconoTema src={transporte} alt="Transporte" />,
        Default: <IconoTema src={otros} alt="Otros" />
    }
    return Images[type] || Images["Default"]; 
}