import React,{useState, useEffect} from "react";

import "./Header.css"
import logo from "../imagenes/logo1.png"
/*Imagen baner carrusel*/ 
import banner from "../imagenes/banner_1.webp";
import banner1 from "../imagenes/tres.jpeg"


const Header_menu = () =>{
    // Array de imágenes del carrusel
    const images = [banner, banner1];

    // Estado para controlar qué imagen se muestra
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect con intervalo para cambiar imágenes automáticamente
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval); // Limpieza del intervalo
    }, [images.length]);

   
    return(
       <div>
        <header className="header">
      <div>
        <div>
         <img className="logo" src={logo} alt="" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#mazda">MODELOS</a></li>
            <li><a href="#dae">SERVICIOS</a></li>
            <li><a href="#wasa">MAZDA LIFE</a></li>
            <li><a href="#dasd">SUCURSALES</a></li>
            <li><a href="#">LLAMADO A REVISIÓN</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main className="main">
        <section className="section">
          <article>
            <div>
              <img
                className="banner_1"
                src={images[currentIndex]}
                alt={`Banner ${currentIndex + 1}`}
              />
            </div>
            <div>
              <h1 className="titulo">¿Qué desea realizar?</h1>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};
export default Header_menu;