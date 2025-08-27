import Vende from '../imagenes/v1.jpg';
import Compra from '../imagenes/compra_4.jpg';
import "./Main.css";
function Main({mostrarPagina}){
   return (
    <main className="main contenedor1080px sombra">
        <div className='arri'>
            <h1 className="titulo">Bienvenido a Get Jyu Car</h1>
        </div>
        <div className='aba'>
          <section className="section">
            <article className="articulo">
            <div className="articulo1" onClick={ () => mostrarPagina('registro')} >
                <div className="imagen">
                  <img src={Vende} alt=""/>
                </div>
                <button  className='boton'>
                  <span>¿Quieres vender?</span>
                </button>
            </div>
            <div className="articulo2" onClick={ () => mostrarPagina('marcas')}>
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
export default Main;