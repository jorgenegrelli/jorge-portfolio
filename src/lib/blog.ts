export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  readingTime: string;
  category: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'primeiro-post',
    title: 'Minha Jornada como Desenvolvedor Full Stack',
    description: 'Reflexões sobre desenvolvimento, empreendedorismo e a jornada de criar soluções digitais para pequenos negócios.',
    publishedAt: '2024-01-15',
    author: 'Jorge Negrelli',
    readingTime: '5 min',
    category: 'Reflexão',
    featured: true
  }
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}