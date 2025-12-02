function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold">Cine EPICARDIUM</h2>
        <img
          src="https://images.vexels.com/media/users/3/321267/isolated/preview/295ac21970c1cbed0eddb93ffe749d17-icono-de-alimentos-y-bebidas-de-cine.png"
          className="w-10 h-10 object-contain"
        />
      </div>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:opacity-70 ps-2">Inicio</li>
        <li className="cursor-pointer hover:opacity-70 ps-2">Películas</li>
        <li className="cursor-pointer hover:opacity-70 ps-2">Contacto</li>
      </ul>
    </nav>
  )
}

export default Navbar
