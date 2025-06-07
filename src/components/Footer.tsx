import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-gray-light mt-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-8">
        {/* Enlaces */}
        <div className="flex flex-col md:flex-row gap-6">
          <a href="#acerca" className="text-gray-dark hover:text-secondary transition">Acerca de</a>
          <a href="#servicios" className="text-gray-dark hover:text-secondary transition">Servicios</a>
          <a href="#privacidad" className="text-gray-dark hover:text-secondary transition">Política de Privacidad</a>
          <a href="#terminos" className="text-gray-dark hover:text-secondary transition">Términos de Uso</a>
        </div>
        {/* Redes sociales */}
        <div className="flex gap-4 items-center">
          {/* Placeholder SVGs para redes sociales */}
          <a href="#" aria-label="Facebook" className="text-gray-light hover:text-secondary transition">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-light hover:text-secondary transition">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.48 4.48 0 0 0 16.11 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03C7.69 5.36 4.07 3.6 1.64 1.16c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.95 2.04c8.36 0 12.94-6.93 12.94-12.94 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.1 9.1 0 0 1-2.6.71A4.48 4.48 0 0 0 23 3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-light hover:text-secondary transition">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="3"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
          </a>
        </div>
      </div>
      <div className="text-center text-gray-light text-sm pb-6">
        © 2024 Viajes Para Ti. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export { Footer }; 