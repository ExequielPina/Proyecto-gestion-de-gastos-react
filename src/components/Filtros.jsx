import { useState, useEffect } from "react"

  const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className="campo">
                <label>Filtrar gastos</label>
                <select value={filtro} onChange={e => setFiltro(e.target.value) }>
                    <option value="">-- Seleccione una categoría --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="hogar">Hogar</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="facturas">Facturas</option>
                </select>
            </div>
        </form>
    </div>
  )
}




export default Filtros