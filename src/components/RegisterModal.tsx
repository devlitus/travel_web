import React from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-primary text-xl font-bold"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Regístrate</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="border border-gray-light rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-gray-light rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-gray-light rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
          />
          <button
            type="submit"
            className="bg-secondary text-primary font-bold rounded-lg px-4 py-2 mt-2 hover:bg-secondary/80 transition"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal; 