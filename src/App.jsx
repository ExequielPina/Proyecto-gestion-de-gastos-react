import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import ListadoGastos from './components/ListadoGastos';
import Gasto from './components/Gasto';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';


function App() {
    
  const [presupuesto, setPresupuesto] = useState('');
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  {/*** State que almacena todos los gastos del formulario ***/}
  const [gastos, setGastos] = useState([])

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ) {
      setModal(true)
      
    setTimeout(() =>{
      setAnimarModal(true)
    }, 600);
    }
  }, [ gastoEditar ])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() =>{
      setAnimarModal(true)
    }, 600);
  }

  const guardarGasto = gasto => {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
      {/*** Función que elimina modal una vez leídos los datos ***/}
      setAnimarModal(false)
      setTimeout(() =>{
          setModal(false)       
      }, 600);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto= {presupuesto}
        setPresupuesto= {setPresupuesto}
        isValidPresupuesto= {isValidPresupuesto}
        setIsValidPresupuesto= {setIsValidPresupuesto}
        

      />

    {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
                gastos={gastos}
                setGastoEditar={setGastoEditar}
            />        
          </main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto} 
                  alt="icono nuevo gasto"
                  onClick={handleNuevoGasto}
            />
          </div>
        </>
     )}
     {/*** Mostrar y ocultar modal   ***/}
     {modal && <Modal setModal={setModal}
                      animarModal={animarModal} 
                      setAnimarModal={setAnimarModal} 
                      guardarGasto = {guardarGasto}
                      gastoEditar={gastoEditar}
                />}
                      
     
   </div>
    
     
    
  )
}

export default App
