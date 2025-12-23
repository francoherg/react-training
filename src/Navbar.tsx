import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          EPICARDIUM
        </div>

        <ul className="navbar-links">
          <li>Inicio</li>
          <li>Cartelera</li>
          <li>Próximamente</li>
          <li>Contacto</li>
        </ul>

        <button className="navbar-cta">
          Comprar entradas
        </button>
      </div>
    </nav>
  )
}

export default Navbar
