import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Termos de Uso | Alexander Araújo',
    description: 'Termos e condições de uso do site Alexander Araújo.',
};

export default function TermsOfUsePage() {
    return (
        <main className="min-h-screen bg-off-white text-secondary font-body">
            <Navbar isDark />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 italic tracking-tighter">Termos de Uso</h1>

                    <div className="space-y-8 text-neutral-600 leading-relaxed font-light text-lg">

                        <div className="prose prose-lg prose-slate max-w-none">
                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">1. Termos</h3>
                            <p>
                                Ao acessar o site <a href="https://alexanderaraujo.com" className="text-primary hover:underline">Alexander Araújo</a>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
                            </p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">2. Uso de Licença</h3>
                            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Alexander Araújo, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>

                            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                <li>Modificar ou copiar os materiais;</li>
                                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
                                <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
                                <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                            </ul>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">3. Isenção de responsabilidade</h3>
                            <p>Os materiais no site da Alexander Araújo são fornecidos 'como estão'. Alexander Araújo não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">4. Limitações</h3>
                            <p>Em nenhum caso o Alexander Araújo ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Alexander Araújo, mesmo que Alexander Araújo ou um representante autorizado da Alexander Araújo tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.</p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">5. Precisão dos materiais</h3>
                            <p>Os materiais exibidos no site da Alexander Araújo podem incluir erros técnicos, tipográficos ou fotográficos. Alexander Araújo não garante que qualquer material em seu site seja preciso, completo ou atual. Alexander Araújo pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.</p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">6. Links</h3>
                            <p>O Alexander Araújo não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Alexander Araújo do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">Modificações</h3>
                            <p>O Alexander Araújo pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
