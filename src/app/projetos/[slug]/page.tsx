'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getProjectById } from '@/lib/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectById(slug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O projeto que você está procurando não existe ou foi removido.
          </p>
          <Button asChild>
            <Link href="/projetos">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar aos Projetos
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="py-8"
        >
          <Button asChild variant="outline">
            <Link href="/projetos">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar aos Projetos
            </Link>
          </Button>
        </motion.div>

        {/* Project Header */}
        <section className="pb-16 md:pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full">
                  {project.category === 'fullstack' ? 'Full Stack' : 
                   project.category === 'web' ? 'Web' : 
                   project.category === 'mobile' ? 'Mobile' : 
                   project.category === 'design' ? 'Design' : project.category}
                </span>
                
                {project.featured && (
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Projeto em Destaque
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                {project.liveUrl && (
                  <Button asChild size="lg">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Ver Projeto Online
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                )}
                
                {project.githubUrl && (
                  <Button asChild variant="outline" size="lg">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-5 h-5" />
                      Ver Código
                    </a>
                  </Button>
                )}
              </div>

              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Desenvolvido em {project.year}</span>
              </div>
            </motion.div>

            {/* Project Details Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid gap-8 md:grid-cols-2 mb-16"
            >
              {/* Technologies */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Project Info */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Informações do Projeto</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-muted-foreground" />
                    <div>
                      <span className="font-medium">Ano:</span>
                      <span className="ml-2 text-muted-foreground">{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-muted-foreground" />
                    <div>
                      <span className="font-medium">Tipo:</span>
                      <span className="ml-2 text-muted-foreground">
                        {project.category === 'fullstack' ? 'Projeto Full Stack' : 
                         project.category === 'web' ? 'Aplicação Web' : 
                         project.category === 'mobile' ? 'App Mobile' : 
                         project.category === 'design' ? 'Projeto de Design' : 'Projeto'}
                      </span>
                    </div>
                  </div>

                  {project.featured && (
                    <div className="flex items-center">
                      <Trophy className="w-5 h-5 mr-3 text-primary" />
                      <div>
                        <span className="font-medium text-primary">Projeto em Destaque</span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>

            {/* Results Section */}
            {project.results && project.results.length > 0 && (
              <motion.div variants={itemVariants} className="mb-16">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Resultados Alcançados</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {project.results.map((result, index) => (
                      <div 
                        key={index}
                        className="text-center p-4 bg-muted/50 rounded-lg"
                      >
                        <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-3"></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 md:pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Gostou do que viu?
              </h2>
              <p className="text-muted-foreground mb-6">
                Tenho outros projetos interessantes e estou sempre trabalhando em novas ideias.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/projetos">
                    Ver Outros Projetos
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link href="/contato">
                    Falar Comigo
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </section>
    </div>
  );
}