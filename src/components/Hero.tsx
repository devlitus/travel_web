import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-primary/10 to-primary/40 min-h-[480px] flex items-center justify-center overflow-hidden font-sans">
      {/* Imagen de fondo (placeholder) */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1280&q=80')" }} />
      {/* Overlay de gradiente */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/80 to-background/60" />
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-6 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
          Descubre el mundo con Viajes Para Ti
        </h1>
        <p className="text-lg md:text-xl text-gray-dark font-normal">
          Encuentra tu próxima aventura con nuestras ofertas exclusivas y destinos impresionantes.
        </p>
        {/* Barra de búsqueda */}
        <form className="mt-6 flex w-full max-w-xl mx-auto bg-background rounded-xl shadow-md overflow-hidden border border-gray-light">
          <div className="flex items-center px-4">
            {/* Ícono lupa */}
            <svg className="w-5 h-5 text-gray-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>  
          </div>
          <input
            type="text"
            placeholder="Busca  tu destino"
            className="flex-1 py-3 px-2 outline-none text-gray-dark bg-transparent"
          />
          <button
            type="submit"
            className="bg-secondary text-primary font-bold px-6 h-full hover:bg-secondary/80 transition rounded-xl m-1 my-3"
          >
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
};

export { Hero }; 