import React from "react";

const ofertas = [
  {
    nombre: "Escapada Tropical",
    descripcion: "Disfruta de playas paradisíacas y aguas cristalinas.",
    imagen:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    nombre: "Aventura en la Montaña",
    descripcion: "Vive la emoción de las alturas y paisajes nevados.",
    imagen:
      "https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?auto=format&fit=crop&w=400&q=80",
  },
  {
    nombre: "Explora la Ciudad",
    descripcion: "Descubre la magia de las ciudades al atardecer.",
    imagen:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  },
];

const OfertasEspeciales: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans" id="ofertas">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Ofertas Especiales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ofertas.map((oferta) => (
          <div
            key={oferta.nombre}
            className="bg-background rounded-xl shadow-md overflow-hidden border border-gray-light flex flex-col"
          >
            <div
              className="h-44 bg-cover bg-center"
              style={{ backgroundImage: `url(${oferta.imagen})` }}
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-primary mb-1">{oferta.nombre}</h3>
              <p className="text-gray-dark text-sm">{oferta.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfertasEspeciales; 