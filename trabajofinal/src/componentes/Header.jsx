import React,{useState, useEffect} from "react";
import "./Header.css"
import logo from "../imagenes/logo1.png"
/*Imagen baner carrusel*/ 
import banner from "../imagenes/banner_1.webp";
import banner1 from "../imagenes/tres.jpeg"
import banner2 from "../imagenes/tres.jpeg"

const Header = ({mostrarPagina}) =>{
    // Array de imágenes del carrusel
    const images = [banner, banner1,banner2];

    // Estado para controlar qué imagen se muestra
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // useEffect con intervalo para cambiar imágenes automáticamente
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
    }, [images.length]); 

    // Funciones para cambiar imagen
    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleSelect = (index) => {
      setCurrentIndex(index);
    };

    return(
      
    <div>
      <header className="header">
        <div className='contenedor1080px'>
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <nav className="nav ">
            <ul>
              <li>
                  <button onClick={ () => {mostrarPagina('')}} className="link-button">
                    INICIO
                  </button>
              </li>
              <li>
                  <button onClick={ () => {mostrarPagina('marcas')}} className="link-button">
                    MARCAS
                  </button>
              </li>
              <li>
                  <button onClick={ () => {mostrarPagina('servicios')}} className="link-button">
                    SERVICIOS
                  </button>
              </li>
              <li>
                <button onClick={ () => {mostrarPagina('promos')}} className="link-button">
                    PROMOCIONES
                  </button>
              </li>
              

            </ul>
          </nav>
        </div>
      </header>
    
   <main className="main">
      <section className="section">
        <article>
            <div className="contenedor_img">
              {/* Flechas */}
              <button className="arrow left" onClick={handlePrev}>
                &#10094;
              </button>
              <img
                key={currentIndex} // importante para transición
                className="banner_1"
                src={images[currentIndex]}
                alt={`Banner ${currentIndex + 1}`}
              />
              <button className="arrow right" onClick={handleNext}>
                &#10095;
              </button>

              {/* Puntos debajo */}
              <div className="dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => handleSelect(index)}
                  ></span>
                ))}
              </div>
            </div>
      </article>
    </section>
  </main>
</div>
  );
};
export default Header;