import "./MainElige.css"

function ParteMainElige (){
  
    const marcasUno = [
      {nombre: "Volkswagen", imagen: "volkswagen.png"},
      {nombre: "Mercedes", imagen: "mercedez.png"},
      {nombre: "Nissan", imagen: "nissan.png"},
      {nombre: "Mazda", imagen: "mazda.png"},
    
    ]
    const marcasDos = [
      {nombre: "honda", imagen: "honda.png"},
      {nombre: "lexus", imagen: "lexus.png"},
      {nombre: "lamborghini", imagen: "lamboghini.png"},
      {nombre: "bmw", imagen: "bmw.png"}
      
    ]
    return(
    <main class="mainM">
        <div>
          <h2 className="titul">Elige tu Marca</h2>
          <section className="sectionM">
            <article className="articuloM">
              <div className="unoM">
                {
                  marcasUno.map((m) => {
                    return (
                    <div className="articulo1M">
                    <div className="imagenM">
                      <img src={`/marcas/${m.imagen}`} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>{m.nombre}</span>
                    </button>
                    </div>)
                  } ) 
                }
              </div>
              <div className="dosM">
                {
                  marcasDos.map((m) => {
                    return (
                    <div className="articulo1M">
                    <div className="imagenM">
                      <img src={`/marcas/${m.imagen}`} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>{m.nombre}</span>
                    </button>
                    </div>)
                  } ) 
                }
              </div>
            </article>
          </section>
        </div>
    </main> 
    );
}
export default ParteMainElige;

