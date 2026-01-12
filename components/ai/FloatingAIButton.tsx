"use client";

import React from 'react';

interface FloatingAIButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

const FloatingAIButton: React.FC<FloatingAIButtonProps> = ({ onClick, isOpen }) => {
    return (
        <button
            onClick={onClick}
            aria-label={isOpen ? "Fechar assistente de IA" : "Abrir assistente de IA"}
            className={`fixed bottom-6 right-6 z-[100] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-secondary rotate-90' : 'bg-primary'
                }`}
        >
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none"></div>
            <span className="material-symbols-outlined text-white !text-3xl">
                {isOpen ? 'close' : 'bolt'}
            </span>
            {!isOpen && (
                <span className="absolute -top-12 right-0 bg-white text-secondary text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-xl border border-gray-100 whitespace-nowrap hidden md:block animate-fade-in-up">
                    IA Assistente
                </span>
            )}
        </button>
    );
};

export default FloatingAIButton;
