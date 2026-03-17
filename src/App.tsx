import { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./Navbar"

// --- TIPOS ---
type Usuario = {
  nombre: string
}

type Movie = {
  title: string
  duration: number
}

type InstaPost = {
  id: string
  media_url: string
  permalink: string
}

// --- COMPONENTE: TARJETA DE PELÍCULA ---
function MovieCard({ title, duration }: Movie) {
  return (
    <div className="movie-card-cyber">
      <div className="movie-poster-wrapper">
        <img 
          src="https://i1.sndcdn.com/artworks-w4PvArKB7h6hzLou-qNnn7g-t500x500.jpg" 
          alt={title} 
        />
        <div className="scanline"></div>
      </div>
      <div className="movie-info-cyber">
        <h4>{title}</h4>
        <div className="tag-container">
          <span className="duration-tag">{duration} MIN</span>
          <span className="tech-tag">CINE_AMERICA_PROJ</span>
        </div>
      </div>
    </div>
  )
}

// --- COMPONENTE PRINCIPAL: APP ---
function App() {
  const [count, setCount] = useState(0)
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [movies, setMovies] = useState<Movie[]>([])
  const [instaPosts, setInstaPosts] = useState<InstaPost[]>([])

  useEffect(() => {
    // 1. Fetch de Usuario
    fetch("http://localhost:8080/api/usuario")
      .then(r => r.json())
      .then(setUsuario)
      .catch(() => console.log("Modo Invitado: Conexión local no encontrada"))

    // 2. Fetch de Películas (Cartelera)
    fetch("http://localhost:8080/movies")
      .then(r => r.json())
      .then(setMovies)
      .catch(() => {
        // Mock de respaldo para que no se vea vacío
        setMovies([
          { title: "YOUR NAME", duration: 106 },
          { title: "AKIRA", duration: 124 },
          { title: "GHOST IN THE SHELL", duration: 83 },
          { title: "PERFECT BLUE", duration: 81 },
          { title: "METROPOLIS", duration: 108 }
        ])
      })

    // 3. Fetch de Instagram (Simulado con imágenes reales del perfil)
    // Cuando tengas tu API Key de Behold.so o similar, pega la URL en el fetch
    const fetchInstagram = async () => {
      try {
        // Sustituir por: fetch("https://behold.so/api/v1/u/TU_ID_AQUI")
        // Aquí simulamos la llegada de los últimos 4 posts
        const mockInsta = [
          { id: "1", media_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XfG_qWl3_2O5Gk1lD5bXGZ3B-wN7v3_h_Q&s", permalink: "https://instagram.com/p/1" },
          { id: "2", media_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-4MhW9Hh1t8qXW3-4k6m-o_p_q7-mB_pGg&s", permalink: "https://instagram.com/p/2" },
          { id: "3", media_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-6R-P5R_6Fz-6k-Y_m_m-o_p_q7-mB_pGg&s", permalink: "https://instagram.com/p/3" },
          { id: "4", media_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6-R-P5R_6Fz-6k-Y_m_m-o_p_q7-mB_pGg&s", permalink: "https://instagram.com/p/4" },
        ]
        setInstaPosts(mockInsta)
      } catch (err) {
        console.error("No se pudo sincronizar con Instagram")
      }
    }
    fetchInstagram()
  }, [])

  return (
    <>
      <Navbar />

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="main-content-layout">
        
      {/* --- HERO LAYOUT (BANNER + INSTAGRAM) --- */}
      <div className="hero-layout-wrapper">
        <header className="hero-cyber">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="tech-tag" style={{ color: 'var(--cyber-pink)' }}>● EN CARTELERA</span>
            <h1 className="glitch-text" data-text="CINE AMÉRICA">CINE AMÉRICA</h1>
            
            {usuario && <h2 className="user-welcome">» BIENVENIDO: {usuario.nombre}</h2>}
            
            <p className="hero-description">
              Cine Club Santa Fe: Difundiendo el séptimo arte con tecnología de vanguardia y una curaduría única desde el corazón de la ciudad.
            </p>
            
            <div className="hero-btns">
              <button className="btn-cyber">VER CARTELERA</button>
              <button className="btn-outline-cyber">SOCIOS_INFO</button>
            </div>
          </div>

          {/* Botón de Play Central (Referencia original) */}
          <div className="play-button-center">
            <div className="play-icon"></div>
          </div>
        </header>

        {/* --- SIDEBAR: INSTAGRAM FEED --- */}
        <aside className="instagram-sidebar">
          <div className="insta-header">
            <span className="insta-dot pulse"></span>
            <a 
              href="https://www.instagram.com/cineclub_sf.cine_america/" 
              target="_blank" 
              rel="noreferrer"
            >
              @cineclub_sf.cine_america
            </a>
          </div>
          
          <div className="insta-feed-grid">
            {instaPosts.map(post => (
              <a 
                key={post.id} 
                href={post.permalink} 
                target="_blank" 
                rel="noreferrer" 
                className="insta-post"
              >
                <img src={post.media_url} alt="Cine América Post" />
                <div className="insta-overlay"><span>VIEW</span></div>
              </a>
            ))}
          </div>

          <button className="btn-follow-insta" onClick={() => window.open('https://www.instagram.com/cineclub_sf.cine_america/')}>
            FOLLOW_SYSTEM
          </button>
        </aside>
      </div>
        {/* Like System */}
        <div className="like-container-cyber">
          <button className="like-btn" onClick={() => setCount(count + 1)}>
            <span className="heart">❤️</span>
            <span className="count-text">USER_REACTIONS: {count}</span>
          </button>
        </div>

        {/* Sección: Hoy */}
        <section className="section-cyber">
          <h3 className="section-title"><span>//</span> HOY EN SALA</h3>
          <div className="carousel-wrapper">
            <div className="carousel-track">
              {movies.map((m, i) => (
                <MovieCard key={i} {...m} />
              ))}
            </div>
          </div>
        </section>

        {/* Sección: Próximamente */}
        <section className="section-cyber upcoming-section">
          <h3 className="section-title"><span>//</span> PRÓXIMAMENTE</h3>
          <div className="upcoming-container">
            <ul className="upcoming-list-cyber">
              <li><span className="bullet"></span> Evangelion: 3.0+1.0 Thrice Upon a Time</li>
              <li><span className="bullet"></span> Paprika: El detective de los sueños</li>
              <li><span className="bullet"></span> Cowboy Bebop: Knockin' on Heaven's Door</li>
              <li><span className="bullet"></span> Redline: Máxima Velocidad</li>
            </ul>
          </div>
        </section>

      </main>

      {/* Decoración de fondo estilo scanline / glitch */}
      <div className="global-noise"></div>
    </>
  )
}

export default App