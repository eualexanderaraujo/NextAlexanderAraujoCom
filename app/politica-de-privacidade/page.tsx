import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Política de Privacidade | Alexander Araújo',
    description: 'Política de privacidade e tratamento de dados do site Alexander Araújo.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-off-white text-secondary font-body">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 italic tracking-tighter">Política de Privacidade</h1>

                    <div className="space-y-8 text-neutral-600 leading-relaxed font-light text-lg">
                        <p className="font-serif italic text-xl text-secondary/80">Atualizado em: 18 de Janeiro de 2026</p>

                        <div className="prose prose-lg prose-slate max-w-none">
                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">1. Introdução</h3>
                            <p>
                                A sua privacidade é importante para nós. É política do <strong>Alexander Araújo</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://alexanderaraujo.com" className="text-primary hover:underline">alexanderaraujo.com</a> e outros sites que possuímos e operamos.
                            </p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">2. Coleta de Informações</h3>
                            <p>Solicitamos informações pessoais, como nome e e-mail, apenas quando realmente precisamos delas para lhe fornecer um serviço (como o envio da nossa newsletter). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">3. Uso de Dados</h3>
                            <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemo-los dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

                            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                <li>Envio de newsletters e conteúdos educativos.</li>
                                <li>Melhoria da experiência do usuário no site.</li>
                                <li>Análise de tráfego (dados anonimizados).</li>
                            </ul>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">4. Compartilhamento de Dados</h3>
                            <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">5. Cookies</h3>
                            <p>O nosso site usa cookies para melhorar a experiência do usuário. Ao continuar navegando, você concorda com o uso de cookies. Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">6. Seus Direitos (LGPD)</h3>
                            <p>Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), você tem o direito de:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary mt-4">
                                <li><strong>Acesso:</strong> Solicitar uma cópia dos dados que temos sobre você.</li>
                                <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                                <li><strong>Exclusão:</strong> Solicitar a eliminação dos seus dados pessoais tratados com o seu consentimento.</li>
                                <li><strong>Portabilidade:</strong> Solicitar a transferência dos seus dados a outro fornecedor de serviço.</li>
                                <li><strong>Revogação:</strong> Retirar o seu consentimento para o tratamento de dados a qualquer momento.</li>
                            </ul>
                            <p className="mt-4">Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail oficial disponível na página de contato.</p>

                            <h3 className="text-secondary font-bold text-2xl mt-8 mb-4">7. Consentimento</h3>
                            <p>Ao utilizar o nosso site, você concorda com a nossa política de privacidade e concorda com os seus termos. Se tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
