import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

export const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ? (
          <ControlPresupuesto
              presupuesto={presupuesto}
           />        
        ) : (
          <NuevoPresupuesto
          presupuesto= {presupuesto}
          setPresupuesto= {setPresupuesto}
          setIsValidPresupuesto= {setIsValidPresupuesto}
          />
        )}

       
    </header>
    
  )
}
