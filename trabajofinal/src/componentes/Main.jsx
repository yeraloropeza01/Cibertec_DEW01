import Vende from '../imagenes/v1.jpg';
import Compra from '../imagenes/compra_4.jpg';
import "./Main.css";

function ParteMain(){
   return (
    <main class="main">
        <div className='arri'>
          <h1 className="titulo">¿Qué desea realizar?</h1>
        </div>
        <div className='aba'>
          <section className="section">
            <article className="articulo">
            <div className="articulo1">
                <div className="imagen">
                  <img src={Vende} alt=""/>
                </div>
                <button className='boton'>
                  <span>¿Quieres vender?</span>
                </button>
            </div>
            <div className="articulo2">
                <div className="imagen">
                  <img src={Compra} alt=""/>
                </div>
                <button className='boton'>
                  <span>¿Quieres comprar?</span>
                </button>
            </div>
            </article>
          </section>
        </div>
    </main> 
   );
}
export default ParteMain;