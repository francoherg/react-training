import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS_GY6XUi8wNKWCd_dqIo0zzl9vGL5D6KCw&s" 
            alt="Cine América Logo" 
            className="logo-img"
          />
          <span className="logo-text" style={{ lineHeight: '1.2', fontSize: '1.2rem' }}>CINECLUB <br></br> SANTA FE</span>
        </div>

        <ul className="navbar-links">
          <li className="active">Inicio</li>
          <li>Cartelera</li>
          <li>Próximamente</li>
          <li>Contacto</li>
        </ul>

        <div className="navbar-actions">
          <button className="navbar-cta sub-variant">
            SUSCRIPCIÓN
          </button>
          <button className="navbar-cta">
            COMPRAR ENTRADAS
          </button>

          <div className="user-menu-container">
            <div className="user-avatar-hex">
              <div className="inner-hex">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
              </div>
            </div>
            <div className="user-dropdown">
              <div className="dropdown-header">IDENTIDAD_DETECTADA</div>
              <ul>
                <li>Mi Perfil</li>
                <li>Mis Tickets</li>
                <li className="logout">Desconectarse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-bottom-line"></div>
    </nav>
  )
}

export default Navbar