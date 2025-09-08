export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'fullstack';
  year: number;
  results?: string[];
}

export const projects: Project[] = [
  {
    id: 'super-negrelli',
    title: 'Super Negrelli - Sistema de Gestão',
    description: 'Sistema completo de gestão para pequenos comércios, desenvolvido para otimizar operações do Super Negrelli. Inclui controle de estoque, vendas, fornecedores e relatórios financeiros em tempo real.',
    shortDescription: 'Sistema de gestão completo para pequenos comércios com controle de estoque e vendas.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'TypeScript'],
    image: '/images/projects/super-negrelli-thumb.jpg',
    images: [
      '/images/projects/super-negrelli-1.jpg',
      '/images/projects/super-negrelli-2.jpg',
      '/images/projects/super-negrelli-3.jpg'
    ],
    liveUrl: 'https://supernegrelli.com',
    githubUrl: 'https://github.com/jorge/super-negrelli',
    featured: true,
    category: 'fullstack',
    year: 2024,
    results: [
      'Redução de 40% no tempo de gestão de estoque',
      'Aumento de 25% na eficiência operacional',
      'Sistema utilizado por 5+ estabelecimentos locais'
    ]
  },
  {
    id: 'portfolio-digital',
    title: 'Soluções Digitais para Pequenos Negócios',
    description: 'Conjunto de ferramentas web responsivas desenvolvidas para auxiliar pequenos comércios na digitalização de seus processos. Inclui catálogos online, sistemas de pedidos e dashboards administrativos.',
    shortDescription: 'Ferramentas web para digitalização de pequenos negócios.',
    technologies: ['Next.js', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
    image: '/images/projects/digital-solutions-thumb.jpg',
    images: [
      '/images/projects/digital-solutions-1.jpg',
      '/images/projects/digital-solutions-2.jpg'
    ],
    liveUrl: 'https://solucoes-digitais.com',
    featured: true,
    category: 'web',
    year: 2023,
    results: [
      'Atendimento a 15+ pequenos negócios',
      'Aumento médio de 60% na presença online',
      'Redução de 30% no tempo de atendimento'
    ]
  },
  {
    id: 'academic-projects',
    title: 'Projetos Acadêmicos - UniCesumar',
    description: 'Coleção de projetos desenvolvidos durante o curso de Engenharia de Software, abrangendo desde algoritmos fundamentais até sistemas distribuídos complexos.',
    shortDescription: 'Projetos acadêmicos em Java, estruturas de dados e sistemas distribuídos.',
    technologies: ['Java', 'Python', 'C++', 'SQL', 'Git'],
    image: '/images/projects/academic-thumb.jpg',
    images: [
      '/images/projects/academic-1.jpg',
      '/images/projects/academic-2.jpg'
    ],
    githubUrl: 'https://github.com/jorge/academic-projects',
    featured: false,
    category: 'fullstack',
    year: 2023,
    results: [
      'Média 9.2 em projetos práticos',
      'Reconhecimento em competições de algoritmos',
      'Base sólida em engenharia de software'
    ]
  }
];

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}