import "./Footer.css";
function ParteFooter() {
  const developers = [
    "Gerber Pacheco",
    "Jheraldo Anconeira",
    "Yhuber Anconeira",
    "Tony Astete",
  ]
  return (
    <footer>
      <div className="footer-contenedor contenedor1080px">
        <div className="footer-iz">
          <ul>
            <li><a href="#!"><h3>Servicios</h3></a></li>
            <li><a href="#!">Financiamiento</a></li>
            <li><a href="#!">Repuestos y accesorios</a></li>
            <li><a href="#!">Garantía extendida</a></li>
          </ul>
        </div>
        <div className="footer-ce">
          <ul>
            <li><a href="#!"><h3>Atención al cliente</h3></a></li>
            <li><a href="#!">Sobre nosotros</a></li>
            <li><a href="#!">Centros de servicio</a></li>
            <li><a href="#!">Preguntas frecuentes</a></li>
          </ul>
        </div>
        <div className="footer-de">
          <ul>
            <li><a href="#!"><h3>Contactos</h3></a></li>
            <li><a href="#!">📞 Teléfono: +51 01 234 5678</a></li>
            <li><a href="#!">✉️ Email: contacto@autoperu.com</a></li>
            <li><a href="#!">Dirección: Av. Jesus Sideral Carrion 1234, Lima - Perú</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Desarrollado por {
          developers.map((d) => {
            return `${d}` 
          }).join(",")
        }
      </div>
    </footer>
  );
}
export default ParteFooter;
