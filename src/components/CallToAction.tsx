import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="w-full bg-secondary/20 py-16 flex justify-center items-center font-sans">
      <div className="max-w-2xl w-full text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          ¿Listo para tu próxima aventura?
        </h2>
        <p className="text-lg text-gray-dark mb-8">
          Contáctanos hoy y empieza a planificar el viaje de tus sueños.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-secondary text-primary font-bold px-8 py-3 rounded-2xl shadow hover:bg-secondary/80 transition"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export { CallToAction }; 