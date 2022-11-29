import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

export const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ? (
          <p>Control de presupuesto</p>
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
