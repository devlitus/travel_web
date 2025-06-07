import React from "react";

const destinos = [
  {
    nombre: "París",
    descripcion: "La ciudad del amor y la luz",
    imagen:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
  },
  {
    nombre: "Roma",
    descripcion: "Historia y arte en cada esquina",
    imagen:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    nombre: "Tokio",
    descripcion: "Cultura vibrante y tecnología",
    imagen:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    nombre: "Nueva York",
    descripcion: "La ciudad que nunca duerme",
    imagen:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    nombre: "Barcelona",
    descripcion: "Arquitectura única y vida nocturna",
    imagen:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80",
  },
  {
    nombre: "Sídney",
    descripcion: "Iconos famosos y playas",
    imagen:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
  },
];

const DestinosPopulares: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans" id="destinos">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Destinos Populares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {destinos.map((destino) => (
          <div
            key={destino.nombre}
            className="bg-background rounded-xl shadow-md overflow-hidden border border-gray-light flex flex-col"
          >
            <div
              className="h-44 bg-cover bg-center"
              style={{ backgroundImage: `url(${destino.imagen})` }}
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-primary mb-1">{destino.nombre}</h3>
              <p className="text-gray-dark text-sm">{destino.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { DestinosPopulares }; 