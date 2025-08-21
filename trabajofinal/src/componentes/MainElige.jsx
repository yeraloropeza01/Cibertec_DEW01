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
    <main class="main">
        <div>
          <section className="section">
            <article className="articulo">
            <div className="articulo1">
                <div className="imagen">
                  <img src={Volkswagen} alt=""/>
                </div>
                <button className='boton'>
                  <span>Volkswagen</span>
                </button>
            </div>
            <div className="articulo2">
                <div className="imagen">
                  <img src={MercedezBenz} alt=""/>
                </div>
                <button className='boton'>
                  <span>MercedezBenz</span>
                </button>
            </div>
            <div className="articulo2">
                <div className="imagen">
                  <img src={Nisan} alt=""/>
                </div>
                <button className='boton'>
                  <span>Nisan</span>
                </button>
            </div>
            <div className="articulo2">
                <div className="imagen">
                  <img src={Mazda} alt=""/>
                </div>
                <button className='boton'>
                  <span>Mazda</span>
                </button>
            </div>
            <div className="articulo2">
                <div className="imagen">
                  <img src={Honda} alt=""/>
                </div>
                <button className='boton'>
                  <span>Honda</span>
                </button>
            </div>
            <div className="articulo2">
                <div className="imagen">
                  <img src={Lexus} alt=""/>
                </div>
                <button className='boton'>
                  <span>Lexus</span>
                </button>
            </div>
            <div className="articulo2">
                <div className="imagen">
                  <img src={Lamborghini} alt=""/>
                </div>
                <button className='boton'>
                  <span>Lamborghini</span>
                </button>
            </div>
            <div className="articulo2">
                <div className="imagen">
                  <img src={BMW} alt=""/>
                </div>
                <button className='boton'>
                  <span>BMW</span>
                </button>
            </div>
            </article>
          </section>
        </div>
    </main> 
    );
}
export default ParteMainElige;

