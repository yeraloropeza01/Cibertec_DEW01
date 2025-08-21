import "./Footer.css";

function ParteFooter() {
  return (
    <footer>
      <div className="footer-contenedor">
        <div className="footer-col">
          <h3>Modelos</h3>
          <ul>
            <li><a href="#!">Sedanes</a></li>
            <li><a href="#!">SUV</a></li>
            <li><a href="#!">AMG</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Servicios</h3>
          <ul>
            <li><a href="#!">Postventa</a></li>
            <li><a href="#!">Financiamiento</a></li>
            <li><a href="#!">Promociones</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <ul>
            <li><a href="#!">Sobre nosotros</a></li>
            <li><a href="#!">Atención al cliente</a></li>
            <li><a href="#!">Ubicaciones</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Mercedes-Benz Perú. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default ParteFooter;
