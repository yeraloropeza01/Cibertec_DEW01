import React from "react";
import  "../componentes/Promociones.css";
import promo from "../imagenes/promo1.png"
import promo2 from "../imagenes/promo2.jpg"
import promo4 from "../imagenes/promo4.png"
const Promociones = () => {
  return (
    <main className="sombra contenedor1080px">
            <div className='arri'>
                <h1 className="titulo">Promociones</h1>
            </div>

          <section className="promos-section">
                  {/* Fila 1 */}
                    <article className="promos-articulo">
                        <div className="promos-articulo1">
                               <img className="promo-img" src={promo} alt="" />
                            <div className="promos-texto">
                               <div>
                                    <h3>Publica tu auto GRATIS por 30 días</h3>
                                    <div className="pregunta">
                                        ¿Quieres vender tu auto rápido y sin gastar nada? <br />
                                    </div>
                                        Aprovecha nuestra promoción y publica tu vehículo totalmente <b>gratis durante 30 días</b>. 
                                        Llega a miles de compradores interesados y aumenta tus posibilidades de cerrar la venta en tiempo récord.
                               </div> 
                         </div>
                       </div>
                    </article>

                  {/* Fila 2 */}
                    <article className="promos-articulo">
                    <div className="promos-articulo2">
                          <img className="promo-img" src={promo2} alt="" />
                        <div className="promos-texto-izq">
                            <div>
                                  <h3>¡Financia tu auto usado sin intereses el primer mes!</h3>
                                <div className="pregunta">
                                    Con nuestra promoción especial podrás financiar tu auto usado y disfrutar de <b>0% de interés durante el primer mes</b>
                                </div>
                                    Cuotas cómodas y accesibles<br />
                                    Sin pagos extra ocultos<br/>
                                    Aprobación rápida y segura
                            </div>
                        </div>
                    </div>
                    </article>

                  {/* Fila 3 */}
                    <article className="promos-articulo">
                      <div className="promos-articulo3">
                        <img className="promo-img" src={promo4} alt="" />
                        <div className="promos-texto">
                          <div>
                            <h3>¡Obtén hasta $500 DE DESCUENTO en tu primer auto!</h3>
                              <div className="pregunta">
                                  Aprovecha nuestra oferta exclusiva y recibe un <b>descuento de hasta $500</b><br /> en la compra de tu primer auto.<br />
                              </div>
                                Dar tu primer paso hacia la conducción nunca fue tan fácil, por eso tenemos un descuento especial solo por ser tu primera compra, con un trámite sencillo y rápido<br />
                          </div>
                        </div>
                      </div>
                    </article>
          </section>
     </main>
  )
}
export default Promociones;