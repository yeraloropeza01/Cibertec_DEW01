import "./MainElige.css"

function ParteMainElige (){
  
    const marcas = [
      {nombre: "Volkswager", imagen: "volkswagen.png"},
      {nombre: "Mercedes", imagen: "mercedez.png"},
      {nombre: "nissan", imagen: "nissan.png"},
      {nombre: "mazda", imagen: "mazda.png"},
      {nombre: "honda", imagen: "honda.png"},
      {nombre: "lexus", imagen: "lexus.png"},
      {nombre: "lambohini", imagen: "lamboghini.png"},
      {nombre: "bwm", imagen: "bmw.png"}
      
    ]
    return(
    <main class="mainM">
        <div>
          <h2 className="titul">Elige tu Marca</h2>
          <section className="sectionM">
            <article className="articuloM">
              <div className="unoM">
                {
                  marcas.map((m) => {
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

