"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';

const ContactPage: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className="bg-off-white min-h-screen">
            <Navbar isDark />
            <main className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="flex flex-col md:flex-row gap-20 items-start">
                    <div className="w-full md:w-1/2 space-y-12 animate-fade-in-up">
                        <div className="space-y-6">
                            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Conexão Estratégica</span>
                            <h1 className="font-display text-6xl md:text-8xl text-secondary leading-[0.8] tracking-tighter">Vamos Criar o <br /><span className="italic text-primary">Próximo Sistema.</span></h1>
                        </div>
                        <p className="text-gray-500 text-xl leading-relaxed magazine-drop-cap max-w-md">Interessado em consultoria personalizada, palestras sobre foco profundo ou simplesmente deseja trocar uma ideia sobre sistemas de produtividade? Use o formulário ou os canais diretos.</p>
                        <div className="space-y-8 pt-8 border-t border-gray-100">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">E-mail Direto</p>
                                <a href="mailto:contato@alexanderaraujo.com" className="text-2xl font-display font-medium text-secondary hover:text-primary transition-colors italic">contato@alexanderaraujo.com</a>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Presença Digital</p>
                                <div className="flex gap-6">
                                    <a href="https://www.linkedin.com/in/alexanderdearaujo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Alexander Araújo" className="text-secondary hover:text-primary transition-colors font-bold uppercase tracking-widest text-[11px]">LinkedIn</a>
                                    <a href="https://www.youtube.com/@euAlexanderAraujo" target="_blank" rel="noopener noreferrer" aria-label="YouTube de Alexander Araújo" className="text-secondary hover:text-primary transition-colors font-bold uppercase tracking-widest text-[11px]">YouTube</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-white p-10 md:p-16 rounded-sm shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {formSubmitted ? (
                            <div className="text-center py-20 space-y-6">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary"><span className="material-symbols-outlined text-4xl">check_circle</span></div>
                                <h3 className="font-display text-3xl text-secondary">Mensagem Recebida.</h3>
                                <p className="text-gray-400">Entraremos em contato em breve. Verifique sua caixa de entrada.</p>
                                <button onClick={() => setFormSubmitted(false)} className="text-primary font-black text-xs uppercase tracking-widest border-b-2 border-primary pb-1">Enviar outra mensagem</button>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40">Nome Completo</label>
                                        <input required type="text" className="w-full bg-off-white border-transparent border-b-gray-100 focus:border-b-primary focus:ring-0 transition-all py-4 px-0 text-secondary placeholder:text-gray-200" placeholder="Ex: Julian Thompson" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40">E-mail Profissional</label>
                                        <input required type="email" className="w-full bg-off-white border-transparent border-b-gray-100 focus:border-b-primary focus:ring-0 transition-all py-4 px-0 text-secondary placeholder:text-gray-200" placeholder="julian@empresa.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40">Assunto</label>
                                    <select className="w-full bg-off-white border-transparent border-b-gray-100 focus:border-b-primary focus:ring-0 transition-all py-4 px-0 text-secondary">
                                        <option>Consultoria Individual</option>
                                        <option>Treinamento Corporativo</option>
                                        <option>Palestra / Evento</option>
                                        <option>Apenas um Alô</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40">Sua Mensagem</label>
                                    <textarea required rows={5} className="w-full bg-off-white border-transparent border-b-gray-100 focus:border-b-primary focus:ring-0 transition-all py-4 px-0 text-secondary placeholder:text-gray-200 resize-none" placeholder="Como posso ajudar a transformar sua rotina digital?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-secondary hover:bg-primary text-white font-black text-[11px] uppercase tracking-[0.3em] py-6 rounded-xl transition-all shadow-xl transform hover:-translate-y-1 active:translate-y-0">Enviar Insight</button>
                            </form>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
