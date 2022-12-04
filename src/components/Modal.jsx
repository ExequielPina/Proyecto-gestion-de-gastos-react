import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarModal from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar}) => {
    
    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    
    useEffect(() => {
        if( Object.keys(gastoEditar).length > 0 ) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
          }
    }, []);
    
    const ocultarModal = () => {  
        setAnimarModal(false)
        setTimeout(() =>{
            setModal(false)       
        }, 600);
    }

    const andleSubmit = e => {
        e.preventDefault();
        {/*** Validación del formulario ***/}
        if ([ nombre, cantidad , categoria ].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(()=> {
                setMensaje('')
            }, 2000)
            return;
        }

        guardarGasto({nombre, cantidad, categoria})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={CerrarModal} 
                alt="cerrar-modal"
                onClick={ocultarModal}
            />
        </div>

            <form onSubmit={andleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className="campo">
                    <label htmlFor='nombre'>Nombre del gasto</label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder="Añade el nombre del gasto"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor='nombre'>Cantidad</label>

                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del gasto: ej. 300€'
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value) )}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoría</label>

                    <select id="categoria"
                            value={categoria}
                            onChange={ e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione una categoría --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="hogar">Hogar</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="facturas">Facturas</option>
                    </select>

                </div>

                <input
                    type="submit"
                    value="Añadir gasto"
                />
            </form>
        </div>
    
  )
}




export default Modal