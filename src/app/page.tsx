'use client';

import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getFeaturedProjects } from '@/lib/projects';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Olá, sou <span className="text-primary">Jorge Negrelli</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Desenvolvedor Full Stack especializado em criar{' '}
            <span className="text-foreground font-medium">soluções digitais</span>{' '}
            inovadoras para pequenos negócios
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/projetos">
                Ver Projetos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/contato">
                Entre em Contato
              </Link>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Estudante de Engenharia de Software na UniCesumar</p>
            <p>Proprietário do Super Negrelli • Criador de soluções digitais</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluções que transformam pequenos negócios
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.id}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow border-border">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                      {project.category === 'fullstack' ? 'Full Stack' : 
                       project.category === 'web' ? 'Web' : project.category}
                    </span>
                    
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.shortDescription}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/projetos/${project.id}`}>
                        Ver Detalhes
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    
                    {project.liveUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projetos">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tenho experiência em transformar ideias em soluções digitais eficazes. 
              Entre em contato para discutir seu próximo projeto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contato">
                  Iniciar Conversa
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/sobre">
                  Conhecer Mais
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
