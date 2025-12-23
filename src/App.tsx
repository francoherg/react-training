import { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./Navbar"

type Usuario = {
  nombre: string
}

type Movie = {
  title: string
  duration: number
}

function MovieCard({ title, duration }: Movie) {
  return (
    <div className="movie-card-vertical">
      <div className="movie-poster">
        <img src="https://i1.sndcdn.com/artworks-w4PvArKB7h6hzLou-qNnn7g-t500x500.jpg" />
      </div>

      <div className="movie-info-glass">
        <h4>{title}</h4>
        <span>{duration} min</span>
      </div>
    </div>
  )
}



function App() {
  const [count, setCount] = useState(0)
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/api/usuario")
      .then(r => r.json())
      .then(setUsuario)

    fetch("http://localhost:8080/movies")
      .then(r => r.json())
      .then(setMovies)
  }, [])

  return (
    <>
      <Navbar />

      <header className="hero">
        <div className="hero-content">
          <h1>Cine EPICARDIUM</h1>
          {usuario && <h2>Bienvenido, {usuario.nombre}</h2>}
        </div>
      </header>

      <div className="like-container">
        <button onClick={() => setCount(count + 1)}>
          ❤️ {count}
        </button>
      </div>

      <section className="section glass">
        <h3>HOY</h3>
        <div className="carousel-wrapper">
          <div className="carousel-glass">
            <div className="carousel-track" id="carousel-track">
              {movies.map((m, i) => (
                <MovieCard key={i} {...m} />
              ))}
            </div>
          </div>
        </div>

      </section>


      <section className="section glass">
        <h3>Próximamente</h3>
        <ul className="upcoming">
          <li>Generic movie of the decade</li>
          <li>Pepito peponero la pelicula 3</li>
          <li>Dancing banana 5</li>
          <li>Spoderman 64</li>
        </ul>
      </section>
    </>
  )
}

export default App
