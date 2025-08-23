import "./MainElige.css"
import Volkswagen from '../imagenes/volkswagen.png';
import MercedezBenz from '../imagenes/mercedez.png';
import Nisan from '../imagenes/nissan.png';
import Mazda from '../imagenes/mazda.png';
import Honda from '../imagenes/honda.png';
import Lexus from '../imagenes/lexus.png';
import Lamborghini from '../imagenes/lamboghini.png';
import BMW from '../imagenes/bmw.png';

function ParteMainElige (){
    return(
    <main class="mainM">
        <div>
          <h2 className="titul">Elige tu Marca</h2>
          <section className="sectionM">
            <article className="articuloM">
              <div className="unoM">
                <div className="articulo1M">
                    <div className="imagenM">
                      <img src={Volkswagen} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>Volkswagen</span>
                    </button>
                </div>
                <div className="articulo1M">
                    <div className="imagenM">
                      <img src={MercedezBenz} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>MercedezBenz</span>
                    </button>
                </div>
                <div className="articulo1M">
                    <div className="imagenM">
                      <img src={Nisan} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>Nisan</span>
                    </button>
                </div>
                <div className="articulo1M">
                    <div className="imagenM">
                      <img src={Mazda} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>Mazda</span>
                    </button>
                </div>
              </div>
              <div className="dosM">
                <div className="articulo2M">
                    <div className="imagenM">
                      <img src={Honda} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>Honda</span>
                    </button>
                </div>
                <div className="articulo2M">
                    <div className="imagenM">
                      <img src={Lexus} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>Lexus</span>
                    </button>
                </div>
                <div className="articulo2M">
                    <div className="imagenM">
                      <img src={Lamborghini} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>Lamborghini</span>
                    </button>
                </div>
                <div className="articulo2M">
                    <div className="imagenM">
                      <img src={BMW} alt=""/>
                    </div>
                    <button className='botonM'>
                      <span>BMW</span>
                    </button>
                </div>
              </div>
            </article>
          </section>
        </div>
    </main> 
    );
}
export default ParteMainElige;

