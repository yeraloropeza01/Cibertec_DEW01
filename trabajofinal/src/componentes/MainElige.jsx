import "./MainElige.css"

function ParteMainElige (){
  
    const marcasUno = [
      {nombre: "Volkswagen", imagen: "volkswagen.png"},
      {nombre: "Mercedes", imagen: "mercedez.png"},
      {nombre: "Nissan", imagen: "nissan.png"},
      {nombre: "Mazda", imagen: "mazda.png"},
      {nombre: "honda", imagen: "honda.png"},
      {nombre: "lexus", imagen: "lexus.png"},
      {nombre: "lamborghini", imagen: "lamboghini.png"},
      {nombre: "bmw", imagen: "bmw.png"}
    ]
    return(
    <main class="contenedor1080px">
        <div>
          <h2 className="titul">Elige tu Marca</h2>
          <section className="marcas">
            {
              marcasUno.map((m) => {
                return (
                <div className="marca">
                <div className="imagenM">
                  <img src={`/marcas/${m.imagen}`} alt=""/>
                </div>
                <button className='botonM'>
                  <span>{m.nombre}</span>
                </button>
                </div>)
              } ) 
            }
          </section>
        </div>
    </main> 
    );
}
export default ParteMainElige;

