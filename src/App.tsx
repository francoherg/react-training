import { useEffect, useState } from 'react'
import './App.css'
import Navbar from "./Navbar"
type Usuario = {
  nombre: string
}

type Movie = {
  title: string
  duration: number
}

function App() {
  const [count, setCount] = useState(0)
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/api/usuario")
      .then(r => r.json())
      .then(data => {
        console.log("data:", data)
        setUsuario(data)
      })
      .catch(err => console.log("error:", err))

    fetch("http://localhost:8080/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(err => console.log("error:", err))
  }, [])

function MovieCard({ title, duration }: Movie) {
  return (
    <div className=" w-64 flex-shrink-0 overflow-hidden">
      <div className="bg-white text-black rounded-xl shadow-xl border border-white/40 backdrop-blur-xl overflow-hidden">
        <img
          src="https://i1.sndcdn.com/artworks-w4PvArKB7h6hzLou-qNnn7g-t500x500.jpg"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="opacity-70">{duration} min</p>
        </div>
      </div>
    </div>
  )
}




  return (
    <>
    <Navbar />
      <header className="w-full bg-blue-700 text-white py-6 px-6 shadow-lg mb-10">
        <h1 className="text-4xl font-bold">Cine EPICARDIUM</h1>
        {usuario && <h2 className="text-xl opacity-90 mt-2">Bienvenido, {usuario.nombre}</h2>}
      </header>

      <button 
        className="mx-auto px-6 py-2 bg-red-600 hover:bg-red-700 text-white
         rounded-lg  font-semibold flex items-center gap-2 select-none active:scale-95"
        onClick={() => setCount(count + 1)}
      >
        <span className={`text-2xl transition-transform ${count > 0 ? "scale-125" : ""}`}>
          ❤️
        </span>
        {count}
      </button>

      <section className="max-w-xl mx-auto mt-10 p-6shadow text-black">
        <img src="https://tpc.googlesyndication.com/simgad/15316083628870892354?"></img>
      </section>


      <section className="max-w-4xl mx-auto mt-10 p-6 bg-slate-800 rounded-xl shadow text-black">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2 text-white">HOY</h3>

        <div className="carousel-container overflow-hidden">
          <div className="carousel-track flex gap-4">
            {movies.map((m, i) => (
              <MovieCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>


      <section className="max-w-4xl  mx-auto mt-10 p-6 bg-slate-800  rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2 text-white">Proximamente</h3>
        <ul className="flex flex-col gap-2">
          <li className="p-3 bg-gray-100 rounded-md shadow-sm">Generic movie of the decade</li>
          <li className="p-3 bg-gray-100 rounded-md shadow-sm">Pepito peponero la pelicula 3</li>
          <li className="p-3 bg-gray-100 rounded-md shadow-sm">Dancing banana 5</li>
          <li className="p-3 bg-gray-100 rounded-md shadow-sm">Spoderman 64</li>
        </ul>
      </section>
    </>
  )
}

export default App
