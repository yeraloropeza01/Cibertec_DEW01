import React from "react";
import "../componentes/Promociones.css";

const Promociones = () => {
  return (
    <main className="promos-main">
  <div className="promos-titulo">
    <h1>Promociones</h1>
  </div>

    <section className="promos-section">
      {/* Fila 1 */}
      <article className="promos-articulo">
        <div className="promos-articulo1">
          
          <div className="promos-texto">
            <p>
                <h3>Publica tu auto GRATIS por 30 días</h3>
              <div className="pregunta">
                ¿Quieres vender tu auto rápido y sin gastar nada? <br />
              </div>
                Aprovecha nuestra promoción y publica tu vehículo totalmente <b>gratis durante 30 días</b>. 
                Llega a miles de compradores interesados y aumenta tus posibilidades de cerrar la venta en tiempo récord.
            </p>
         </div>
        </div>
      </article>

    {/* Fila 2 */}
    <article className="promos-articulo">
      <div className="promos-articulo2">
        <div className="promos-texto-izq">
          <p>
            <h3>¡Financia tu auto usado sin intereses el primer mes!</h3>
           <div className="pregunta">
               Con nuestra promoción especial podrás financiar tu auto usado y disfrutar de <b>0% de interés durante el primer mes</b>
           </div>
            ✅ Cuotas cómodas y accesibles<br />
            ✅ Sin pagos extra ocultos<br/>
            ✅ Aprobación rápida y segura
          </p>
        </div>
      </div>
    </article>

    {/* Fila 3 */}
    <article className="promos-articulo">
      <div className="promos-articulo3">
        <div className="promos-texto">
          <p>
            <h3>¡Obtén hasta $500 DE DESCUENTO en tu primer auto!</h3>
              <div className="pregunta">
                  Aprovecha nuestra oferta exclusiva y recibe un <b>descuento de hasta $500</b> en la compra de tu primer auto.<br />
              </div>
                 Dar tu primer paso hacia la conducción nunca fue tan fácil, por eso tenemos un descuento especial solo por ser tu primera compra, con un trámite sencillo y rápido<br />
           </p>
        </div>
     </div>
   </article>
</section>
</main>
  )
}
export default Promociones;