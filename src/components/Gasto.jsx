

const Gasto = ({gasto}) => {

  const { categoria, nombre, cantidad, id } = gasto;  
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="nombre-gasto">{cantidad}</p>
            </div>
        </div>
    </div>
  )
}


export default Gasto