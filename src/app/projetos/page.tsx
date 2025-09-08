'use client';

import Link from 'next/link';
import { ArrowRight, Github, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meus Projetos
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Uma coleção de projetos que demonstram minha experiência em desenvolvimento 
              full stack e criação de soluções digitais inovadoras.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow border-border group">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {project.category === 'fullstack' ? 'Full Stack' : 
                           project.category === 'web' ? 'Web' : 
                           project.category === 'mobile' ? 'Mobile' : 
                           project.category === 'design' ? 'Design' : project.category}
                        </span>
                        
                        {project.featured && (
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                            Destaque
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {project.shortDescription}
                      </p>
                      
                      <div className="flex items-center text-xs text-muted-foreground mb-4">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{project.year}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-6">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {project.results && project.results.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium mb-2">Resultados:</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {project.results.slice(0, 2).map((result, index) => (
                              <li key={index} className="flex items-start">
                                <span className="inline-block w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 mt-auto">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Interessado em trabalhar comigo?
              </h2>
              <p className="text-muted-foreground mb-6">
                Estou sempre aberto a novos projetos e oportunidades de colaboração.
              </p>
              
              <Button asChild size="lg">
                <Link href="/contato">
                  Vamos Conversar
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </div>
  );
}