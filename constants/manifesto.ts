import { Article, ManifestoPillar } from '../types';

export const MANIFESTO_PILLARS: ManifestoPillar[] = [
    {
        id: '01',
        icon: 'target',
        title: 'Foco Supremo',
        description: 'Uso técnicas práticas baseadas em neurociência para reduzir distrações, organizar prioridades e sustentar foco profundo — especialmente no ambiente digital e em rotinas cheias de interrupções.'
    },
    {
        id: '02',
        icon: 'devices',
        title: 'Ferramentas Inteligentes',
        description: 'Faço uma curadoria criteriosa de ferramentas, métodos e fluxos digitais testados na prática. Menos apps, mais sistemas simples e confiáveis para organizar o trabalho e manter constância.'
    },
    {
        id: '03',
        icon: 'self_improvement',
        title: 'Mindset & Bem-estar',
        description: 'Aplico estratégias para manter clareza mental, energia e consistência ao longo do tempo. Aqui, descanso, limites e rotina são tratados como ativos produtivos — não como concessões.'
    }
];

export const ARTICLES: Article[] = [
    {
        id: '1',
        category: 'Deep Work',
        tag: 'Destaque do Mês',
        title: 'Desvendando o Segredo do Deep Work: Mantenha o Foco',
        description: 'Em um mundo cada vez mais conectado, a capacidade de se concentrar profundamente em uma única tarefa tornou-se a habilidade mais valiosa. Descubra como blindar sua atenção contra o caos digital.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEoj4dlEOCi4Ug3mA7hV08hNLWaub47eRqGHJcYxfJgLDrdomCuhK5Yj5-BolUErtOWi7eR3ysx64wG5EafslJCZfTspW3QNEWUsZAiQcmfCL02c6eJhb4aqUDMJq2Fmi7vBCjojM3VrEKBgg-ub4czi3dp9oiEyd7yOoxgC4mnbssvzmYuN2zP9RRetykSALKDWzCsDYeypgRtQFJXMqgitqJ9jHVQtWyxalVEdfV0JN5wfCZHX2SLLLeGIw9LCQG-YY7K6wxXkI',
        isFeatured: true
    },
    {
        id: '2',
        category: 'Minimalismo',
        title: 'Minimalismo Digital na Prática',
        description: 'Como reduzir o ruído das notificações e recuperar sua atenção em um mundo hiperconectado.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_KBoaXlo1Cm7d0xWv7tayX9eytJqK99FKM5H67GfocvzYabFSnXU_ZgGojP5SA9-GWOjmm1IfsXOnXy-o68lEUK5mZJz2ZCE6tsMblK6cDsVBFEEFXdj3s4zdvCQW4ncMkyEexU-moiUtQw0x9PNi6FaVTZkQ1bQoEWg_n-aeqhK7P3DkNcupJIoCNWAHVv2TemPvyWnK-05dmMN04xtbzi4TVmg-8L8bfQemSUqdrI_lqVcD9QPmRHecDvoBRceBoH-qQII5GzI'
    },
    {
        id: '3',
        category: 'Técnica',
        title: 'O Poder do Trabalho Profundo',
        description: 'Entenda por que a capacidade de focar sem distrações é a habilidade mais valiosa.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBilwcqYgasnEeVIjNt6k-BZQJvxrQjzt57USswm9IkFxnDRPzwmq_dN-0QyxxnbpB7zdxziExl6g5C5Pv8mRyhNyGsOHgVWVhvcqLCUWgT5u9js0VGgA2FdRbjMMnsXrnGjjU45MTjl994zGUtARLDR8O1nvSyiTvDVM86EATUmW7T0ZimO6QdjdGVH4lR2g167g-26QFHFMrDu59gmPudczpCOLAekKiTOhiYe5wpK6R9-keD3L3RDfJzxpqihfqbwFWS5qfoa6w'
    },
    {
        id: '4',
        category: 'Mindset',
        title: 'Quebrando Correntes Mentais',
        description: 'Identifique e supere as crenças limitantes que sabotam sua produtividade diária.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8Xpg7yWTa7_Su8qFSQ-1fpzY7DIQP-an4ZdP2t-jYqqkdt2A2MY-7xfx4nozQYiuayO3BlNha4z4unydQDd55QVQoXD4n74C6vAtBtPUev79gPIpwHz-X8KwI1dk83D_HT48bj0gat_Rj-WArjPDhncShT1e9Mb9sN3qxjfmtQp6INewgGdC3aQFsVaZY_Ui3QYrL5HsyTFM-DbncGrJn_vteUF1f2FDLRVsbjchtemlUHTTY1rq0NVFYKzida_xNx4V2AK3Qdgo'
    },
    {
        id: '5',
        category: 'Ferramentas',
        title: 'Automação Sem Código',
        description: 'Como criar fluxos de trabalho que funcionam por você enquanto você dorme, sem programação.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPEBTt2faU3leaj32NjN20uqCd599lRfj0nNl1FjkuONuWytNSQ4Spnd1b2LCqMQ2CFfD0LAc5wQoEG_GBM7Be_zZCqMOtZ6109QNkHROi8R2g53AePUhoBQNMIbcczDPZixsAHAJO_mmg5Z-xUTx9V3SRBoILjDSfOoywJEwY2Rfd4-IFkcppNIxBhpp8wlSy97mKPfgg6BptW528fRKrFXXByUlI_UaOA3Wx_8gOJNWK94dn6DGBiKE43n0KzOO6Pt0wqyF09ms'
    },
    {
        id: '6',
        category: 'Rotina',
        title: 'O Mito do Multitasking',
        description: 'Por que tentar fazer duas coisas ao mesmo tempo está destruindo seu QI e sua eficiência.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEoj4dlEOCi4Ug3mA7hV08hNLWaub47eRqGHJcYxfJgLDrdomCuhK5Yj5-BolUErtOWi7eR3ysx64wG5EafslJCZfTspW3QNEWUsZAiQcmfCL02c6eJhb4aqUDMJq2Fmi7vBCjojM3VrEKBgg-ub4czi3dp9oiEyd7yOoxgC4mnbssvzmYuN2zP9RRetykSALKDWzCsDYeypgRtQFJXMqgitqJ9jHVQtWyxalVEdfV0JN5wfCZHX2SLLLeGIw9LCQG-YY7K6wxXkI'
    }
];
