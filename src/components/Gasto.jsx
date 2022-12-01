import { formaterFecha } from "../helpers";

import Icono1 from '../img/icono_ahorro.svg'
import Icono2 from '../img/icono_casa.svg'
import Icono3 from '../img/icono_comida.svg'
import Icono4 from '../img/icono_gastos.svg'
import Icono5 from '../img/icono_ocio.svg'
import Icono6 from '../img/icono_salud.svg'
import Icono7 from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro: Icono1,
    comida: Icono3,
    hogar: Icono2,
    ocio: Icono5,
    salud: Icono6,
    facturas: Icono7
}

const Gasto = ({gasto}) => {

  const { categoria, nombre, cantidad, id, fecha } = gasto;  
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <img
                src= {diccionarioIconos[categoria]}
            />
            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>            
                <p className="fecha-gasto">Agregado el: {''} <span>{formaterFecha(fecha)}</span></p>
            </div>       
        </div>
        <p className="cantidad-gasto">{cantidad}€</p>
    </div>
  )
}


export default Gasto