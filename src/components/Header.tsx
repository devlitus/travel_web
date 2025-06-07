import React, { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Header: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <header className="w-full border-b border-gray-light bg-background font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-10">
          {/* Logo */}
          <div className="font-extrabold text-base text-primary tracking-tight">Viajes Para Ti</div>
          {/* Navegación */}
          <nav className="hidden md:flex gap-8">
            <a href="#destinos" className="text-gray-dark font-medium hover:text-secondary transition">Destinos</a>
            <a href="#ofertas" className="text-gray-dark font-medium hover:text-secondary transition">Ofertas</a>
            <a href="#paquetes" className="text-gray-dark font-medium hover:text-secondary transition">Paquetes</a>
            <a href="#contacto" className="text-gray-dark font-medium hover:text-secondary transition">Contacto</a>
          </nav>
          {/* Botones */}
          <div className="flex gap-2">
            <button
              className="bg-secondary text-primary font-bold rounded-xl px-4 h-10 hover:bg-secondary/80 transition"
              onClick={() => setShowRegister(true)}
            >
              Regístrate
            </button>
            <button
              className="bg-gray-lightest text-primary font-bold rounded-xl px-4 h-10 hover:bg-gray-light transition"
              onClick={() => setShowLogin(true)}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </header>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </>
  );
};

export { Header }; 