import React,{useState} from 'react';
import Mantenimiento from '../imagenes/mantenimiento.jpg';
import Repuestos from '../imagenes/repuestos.jpg';
import Garantia from '../imagenes/garantia.png';
import "./Servicios.css";

function Servicios() {
    const [activo, setActivo] = useState({
    mantenimiento: false,
    repuestos: false,
    garantia: false,
    });

  
    const toggleTexto = (tipo) => {
    setActivo(prev => ({
      ...prev,
      [tipo]: !prev[tipo]
    }));
  };
    return(
    <main class="mainS">
        <div className='arri'>
          <h1 className="tituloS">Servicios</h1>
        </div>
        <div className='aba'>
          <section className="sectionS">
            <article className="articuloS">
            <div className="articulo1S"
                 onClick={() => toggleTexto("mantenimiento")}
            >
                <div className="imagen">
                  <img src={Mantenimiento} alt=""/>
                </div>
                <button className='botonS'> 
                  <span>MANTENIMIENTO</span>
                </button>
                 <p className={`textoOculto ${activo.mantenimiento ? 'visible' : ''}`}>
                  Tu auto merece lo mejor. Con nuestro servicio de mantenimiento preventivo y correctivo, garantizamos el máximo rendimiento y la seguridad que necesitas en cada viaje. Nuestro equipo de técnicos especializados trabaja con equipos de última generación para prolongar la vida útil de tu vehículo y mantenerlo siempre como nuevo.
                </p>
            </div>
            <div className="articulo2S"  
                  onClick={() => toggleTexto("repuestos")}
            >
                <div className="imagen">
                  <img src={Repuestos} alt=""/>
                </div>
                <button className='botonS'> 
                  <span>REPUESTOS</span>
                </button>
                <p className={`textoOculto ${activo.repuestos ? 'visible' : ''}`}>
                  Encuentra los repuestos originales y de alta calidad que tu vehículo necesita. Contamos con un amplio stock de piezas certificadas que aseguran un desempeño óptimo, mayor durabilidad y total compatibilidad con tu auto. Con nosotros, cada detalle importa y tu inversión está siempre protegida.
                </p>
            </div>
            <div className="articulo3S"
                onClick={() => toggleTexto("garantia")}
            >
                <div className="imagen">
                  <img src={Garantia} alt=""/>
                </div>
                <button className='botonS'> 
                  <span>GARANTIA</span>
                </button>
                <p className={`textoOculto ${activo.garantia ? 'visible' : ''}`}>
                  Conduce sin preocupaciones. Todos nuestros vehículos y repuestos cuentan con garantía oficial respaldada tanto por tiempo como por kilometraje recorrido. De esta manera, disfrutas de tu auto con la seguridad de que cualquier inconveniente estará cubierto, ya sea por desgaste, fallas técnicas o uso continuo. Nuestro servicio postventa está siempre listo para responder de forma rápida y eficiente.
                </p>
            </div>
            </article>
          </section>
        </div>
    </main> 
    );
}
export default Servicios;
