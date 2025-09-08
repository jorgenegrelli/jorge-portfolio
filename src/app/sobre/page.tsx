'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Users, Trophy, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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

const skills = [
  { category: 'Backend', technologies: ['Java', 'Spring Boot', 'Node.js', 'MySQL', 'PostgreSQL'] },
  { category: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
  { category: 'Ferramentas', technologies: ['Git', 'Docker', 'VS Code', 'IntelliJ', 'Postman'] },
  { category: 'Design', technologies: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Material Design'] }
];

const experiences = [
  {
    title: 'Proprietário & Desenvolvedor',
    company: 'Super Negrelli',
    period: '2020 - Presente',
    description: 'Gestão completa de pequeno comércio e desenvolvimento de sistemas internos para otimização de processos. Criação de soluções digitais para controle de estoque, vendas e relacionamento com fornecedores.',
    achievements: [
      'Aumento de 40% na eficiência operacional',
      'Redução de custos através da automação',
      'Sistema próprio de gestão implementado'
    ]
  },
  {
    title: 'Desenvolvedor Full Stack Freelance',
    company: 'Projetos Independentes',
    period: '2022 - Presente',
    description: 'Desenvolvimento de soluções web personalizadas para pequenos negócios, focando em digitalização de processos e melhoria da presença online.',
    achievements: [
      '15+ projetos entregues com sucesso',
      'Especialização em pequenos comércios',
      'Aumento médio de 60% na presença digital dos clientes'
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre Mim
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sou Jorge Negrelli, desenvolvedor full stack apaixonado por criar 
                soluções digitais que fazem a diferença na vida das pessoas.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
              <Card className="p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Minha Jornada</h2>
                    
                    <p className="text-muted-foreground mb-4">
                      Como estudante de <strong>Engenharia de Software na UniCesumar</strong>, 
                      combino o conhecimento acadêmico com experiência prática adquirida no 
                      mundo real dos negócios.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Além dos estudos, sou proprietário do <strong>Super Negrelli</strong>, 
                      onde aplico diariamente conceitos de gestão e tecnologia para otimizar 
                      operações de pequenos comércios.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      Essa experiência única me permite entender as verdadeiras necessidades 
                      dos negócios e criar soluções que realmente agregam valor.
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span>UniCesumar</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>Super Negrelli</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <Code2 className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="font-semibold">Desenvolvedor Full Stack</h3>
                        <p className="text-sm text-muted-foreground">
                          Java, JavaScript, React, Spring Boot
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <Users className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="font-semibold">Empreendedor</h3>
                        <p className="text-sm text-muted-foreground">
                          Proprietário do Super Negrelli
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <BookOpen className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="font-semibold">Estudante</h3>
                        <p className="text-sm text-muted-foreground">
                          Engenharia de Software - UniCesumar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
              <p className="text-muted-foreground">
                Tecnologias e ferramentas que domino para criar soluções completas
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((skillGroup, idx) => (
                <motion.div key={skillGroup.category} variants={itemVariants}>
                  <Card className="p-6 h-full">
                    <h3 className="font-bold mb-4 text-primary">{skillGroup.category}</h3>
                    <div className="space-y-2">
                      {skillGroup.technologies.map((tech) => (
                        <div 
                          key={tech}
                          className="px-3 py-2 bg-muted text-muted-foreground text-sm rounded-lg text-center"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Experiência</h2>
              <p className="text-muted-foreground">
                Minha trajetória profissional e principais realizações
              </p>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((experience, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-8">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-1">
                        <h3 className="font-bold text-lg mb-2">{experience.title}</h3>
                        <p className="text-primary font-medium mb-1">{experience.company}</p>
                        <p className="text-sm text-muted-foreground">{experience.period}</p>
                      </div>
                      
                      <div className="md:col-span-2">
                        <p className="text-muted-foreground mb-4">{experience.description}</p>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Principais Realizações:</h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                <Trophy className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">
                Vamos criar algo incrível juntos?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Estou sempre em busca de novos desafios e oportunidades para aplicar 
                minha experiência em projetos que fazem a diferença.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/contato">
                    Entrar em Contato
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link href="/projetos">
                    Ver Meus Projetos
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </section>
    </div>
  );
}