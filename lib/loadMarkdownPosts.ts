import MarkdownIt from 'markdown-it';
import { Article } from '../types';

const md = new MarkdownIt();

// Registry of posts content to simulate filesystem access in a browser environment
const POSTS_CONTENT: Record<string, string> = {
    '2023-10-24-deep-work-foco.md': `---
title: "Desvendando o Segredo do Deep Work: Mantenha o Foco"
slug: "deep-work-foco"
date: "2023-10-24"
category: "Deep Work"
tag: "Destaque do Mês"
description: "Em um mundo cada vez mais conectado, a capacidade de se concentrar profundamente em uma única tarefa tornou-se a habilidade mais valiosa."
cover: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1200"
---

A produtividade no século XXI não é sobre fazer mais coisas, mas sobre fazer as coisas certas com foco absoluto. O ruído digital é o maior inimigo da nossa criatividade e do nosso progresso estratégico.`,

    '2023-10-25-minimalismo-digital-pratica.md': `---
title: "Minimalismo Digital na Prática"
slug: "minimalismo-digital-pratica"
date: "2023-10-25"
category: "Minimalismo"
tag: "Essencial"
description: "Como reduzir o ruído das notificações e recuperar sua atenção em um mundo hiperconectado."
cover: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200"
---

Seu ambiente digital é o seu escritório principal. Escolha as ferramentas que agregam valor e descarte o resto.`,

    '2023-10-26-poder-trabalho-profundo.md': `---
title: "O Poder do Trabalho Profundo"
slug: "poder-trabalho-profundo"
date: "2023-10-26"
category: "Técnica"
tag: "Sistemas"
description: "Entenda por que a capacidade de focar sem distrações é a habilidade mais valiosa da economia atual."
cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200"
---

Foco não é algo místico; é um músculo que você treina através de rituais e limites claros.`,

    '2024-01-10-ia-generativa-e-o-futuro-do-trabalho-criativo.md': `---
title: "IA Generativa e o Futuro do Trabalho Criativo"
slug: "ia-generativa-trabalho-criativo"
date: "2024-01-10"
category: "IA"
tag: "Tendências"
description: "A inteligência artificial não veio para substituir o criativo, mas para expandir os limites da imaginação humana."
cover: "https://images.unsplash.com/photo-1620712943543-bcc4628c7190?auto=format&fit=crop&q=80&w=1200"
---

A era da colaboração entre humanos e máquinas atingiu um novo patamar.`,

    '2024-01-15-gestao-de-energia-vs-gestao-de-tempo.md': `---
title: "Gestão de Energia vs. Gestão de Tempo"
slug: "gestao-energia-tempo"
date: "2024-01-15"
category: "Mindset"
tag: "Bem-estar"
description: "O segredo da alta performance não está em quantas horas você trabalha, mas em quanta energia você traz para essas horas."
cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
---

Gerenciar o tempo é uma batalha perdida se a sua energia estiver esgotada.`,

    '2024-01-20-o-poder-da-automacao-em-fluxos-criativos.md': `---
title: "O Poder da Automação em Fluxos Criativos"
slug: "automacao-fluxos-criativos"
date: "2024-01-20"
category: "Ferramentas"
tag: "Eficiência"
description: "Como liberar horas da sua semana automatizando tarefas repetitivas que drenam sua criatividade."
cover: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200"
---

Tarefas administrativas são o "imposto" que pagamos sobre o nosso trabalho criativo.`,

    '2024-01-25-rituais-matinais-para-clareza-estrategica.md': `---
title: "Rituais Matinais para Clareza Estratégica"
slug: "rituais-matinais-clareza"
date: "2024-01-25"
category: "Rotina"
tag: "Performance"
description: "Como as primeiras duas horas do seu dia definem o sucesso de todo o resto do seu expediente."
cover: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=1200"
---

Vencer a manhã é vencer o dia.`,

    '2024-02-01-sistemas-no-code-o-novo-superpoder.md': `---
title: "Sistemas No-Code: O Novo Superpoder"
slug: "sistemas-no-code-superpoder"
date: "2024-02-01"
category: "Sistemas"
tag: "Tecnologia"
description: "Você não precisa saber programar para construir soluções digitais personalizadas que organizam seu negócio e vida."
cover: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200"
---

A democratização do desenvolvimento de software através do No-Code permite resolver problemas tecnológicos sem depender de devs.`,

    '2024-02-05-comunicacao-assincrona-e-liberdade-geografica.md': `---
title: "Comunicação Assíncrona e Liberdade"
slug: "comunicacao-assincrona-liberdade"
date: "2024-02-05"
category: "Trabalho"
tag: "Colaboração"
description: "O fim da ditadura das reuniões e a ascensão do trabalho que respeita o fluxo individual."
cover: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200"
---

A cultura do "sempre online" é a antítese do foco profundo.`,

    '2024-03-01-excel-decisao-estrategica.md': `---
title: "Excel como Motor de Decisão Estratégica"
slug: "excel-decisao-estrategica"
date: "2024-03-01"
category: "Sistemas"
tag: "Inteligência"
description: "Por que planilhas bem estruturadas são, na verdade, ferramentas de BI poderosas para quem busca clareza nos negócios."
cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
---

O Excel funciona como um motor de simulação de alto nível.`,

    '2024-03-05-power-query-automacao.md': `---
title: "Power Query: O Fim do Trabalho Braçal"
slug: "power-query-automacao"
date: "2024-03-05"
category: "Automação"
tag: "Eficiência"
description: "Aprenda a automatizar a limpeza e organização de dados de uma vez por todas, eliminando o Ctrl+C Ctrl+V."
cover: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200"
---

Se você gasta mais de 10 minutos limpando dados, você está perdendo tempo.`,

    '2024-03-10-sistemas-financeiros-excel.md': `---
title: "Sistemas Financeiros em Excel: Controle Total"
slug: "sistemas-financeiros-excel"
date: "2024-03-10"
category: "Finanças"
tag: "Sistemas"
description: "Como construir um fluxo de caixa pessoal ou empresarial que realmente ofereça paz de espírito e previsibilidade."
cover: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200"
---

Quem não sabe para onde o dinheiro vai, não tem clareza para onde a carreira caminha.`,

    '2024-03-15-atalhos-excel-elite.md': `---
title: "Atalhos de Elite: Dominando o Teclado"
slug: "atalhos-excel-elite"
date: "2024-03-15"
category: "Técnica"
tag: "Performance"
description: "Por que largar o mouse é o primeiro passo para se tornar um 'Power User' e ganhar horas de produtividade."
cover: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1200"
---

No Excel, o mouse é um gargalo de produtividade.`,

    '2024-03-20-formulas-dinamicas-excel.md': `---
title: "Fórmulas Dinâmicas e o Novo Excel"
slug: "formulas-dinamicas-excel"
date: "2024-03-20"
category: "Tecnologia"
tag: "Inovação"
description: "XLOOKUP, FILTER e UNIQUE: as funções que tornaram o PROCV obsoleto e simplificaram planilhas complexas."
cover: "https://images.unsplash.com/photo-1504868584819-f8e90526354a?auto=format&fit=crop&q=80&w=1200"
---

O Excel mudou radicalmente nos últimos dois anos. Atualize seu vocabulário de funções.`,

    '2024-03-25-excel-notion-integracao.md': `---
title: "Excel e Notion: O Casamento Perfeito"
slug: "excel-notion-integracao"
date: "2024-03-25"
category: "Sistemas"
tag: "Workflow"
description: "Descubra como usar o melhor dos dois mundos: o poder analítico do Excel com a organização visual do Notion."
cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
---

O Notion é para conhecimento; o Excel para análise pesada.`
};

function parseMarkdown(rawContent: string): Partial<Article> & { content: string } {
    const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return { content: md.render(rawContent) };

    const frontmatter = match[1];
    const body = rawContent.slice(match[0].length).trim();

    const data: Record<string, string> = {};
    frontmatter.split('\n').forEach(line => {
        const [key, ...valParts] = line.split(':');
        if (key && valParts.length > 0) {
            data[key.trim()] = valParts.join(':').trim().replace(/^['"]|['"]$/g, '');
        }
    });

    return {
        title: data.title,
        slug: data.slug,
        date: data.date,
        category: data.category,
        tag: data.tag,
        description: data.description,
        imageUrl: data.cover,
        content: md.render(body)
    };
}

export const getAllArticles = (): Article[] => {
    return Object.entries(POSTS_CONTENT).map(([filename, rawContent], index) => {
        const parsed = parseMarkdown(rawContent);

        // Slug processing
        const slug = parsed.slug || filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace('.md', '');

        // Mapping images based on slug - Updated with premium Unsplash URLs
        const placeholders: Record<string, string> = {
            'deep-work-foco': 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1200',
            'minimalismo-digital-pratica': 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200',
            'poder-trabalho-profundo': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200',
            'ia-generativa-trabalho-criativo': 'https://images.unsplash.com/photo-1620712943543-bcc4628c7190?auto=format&fit=crop&q=80&w=1200',
            'gestao-energy-tempo': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
            'automacao-fluxos-criativos': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
            'rituais-matinais-clareza': 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=1200',
            'sistemas-no-code-superpoder': 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200',
            'comunicacao-assincrona-liberdade': 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200',
            'excel-decisao-estrategica': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
            'power-query-automacao': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200',
            'sistemas-financeiros-excel': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200',
            'atalhos-excel-elite': 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1200',
            'formulas-dinamicas-excel': 'https://images.unsplash.com/photo-1504868584819-f8e90526354a?auto=format&fit=crop&q=80&w=1200',
            'excel-notion-integracao': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200'
        };

        const finalImageUrl = placeholders[slug] || parsed.imageUrl || '';

        return {
            id: `md-${index + 1}`,
            category: parsed.category || 'Geral',
            tag: parsed.tag,
            title: parsed.title || 'Sem título',
            description: parsed.description || '',
            imageUrl: finalImageUrl,
            slug: slug,
            date: parsed.date || new Date().toISOString().split('T')[0],
            publishedAt: parsed.date,
            readingTimeMinutes: 8,
            content: parsed.content,
            isFeatured: index === 0
        } as Article;
    }).sort((a, b) => new Date(b.date || '').getTime() - new Date(a.date || '').getTime());
};
