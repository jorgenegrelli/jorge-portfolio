'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Linkedin, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/contact-form';

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

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'jorge@negrelli.dev',
    action: 'mailto:jorge@negrelli.dev',
    actionText: 'Enviar Email'
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Veja meus projetos e contribuições',
    action: 'https://github.com/jorgenegrelli',
    actionText: 'Ver Perfil'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Conecte-se comigo profissionalmente',
    action: 'https://linkedin.com/in/jorgenegrelli',
    actionText: 'Conectar'
  }
];

const faqs = [
  {
    question: 'Qual tipo de projeto você desenvolve?',
    answer: 'Especializo em desenvolvimento web full stack, com foco em soluções para pequenos negócios. Trabalho com Java, Spring Boot, React, Next.js e bancos de dados. Também ofereço consultoria em digitalização de processos.'
  },
  {
    question: 'Quanto tempo leva para desenvolver um projeto?',
    answer: 'O prazo depende da complexidade do projeto. Projetos simples (landing pages, sites institucionais) levam de 1-2 semanas. Sistemas mais complexos podem levar de 1-3 meses. Sempre defino cronogramas realistas após analisar os requisitos.'
  },
  {
    question: 'Você trabalha com orçamento fixo ou por hora?',
    answer: 'Prefiro trabalhar com orçamento fixo baseado no escopo do projeto. Isso oferece mais transparência e previsibilidade para ambas as partes. Para projetos de longo prazo ou consultoria, também trabalho por hora.'
  },
  {
    question: 'Você oferece suporte após a entrega?',
    answer: 'Sim! Ofereço suporte e manutenção pós-entrega. Isso inclui correção de bugs, pequenas alterações e suporte técnico. Para projetos maiores, proponho contratos de manutenção mensal.'
  }
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Vamos Trabalhar Juntos
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8"
            >
              Pronto para transformar sua ideia em realidade? Entre em contato 
              para discutir seu projeto e como posso ajudá-lo a alcançar seus objetivos.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Brasil</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Resposta em até 24h</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid gap-6 md:grid-cols-3 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                    <method.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {method.description}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <a 
                        href={method.action}
                        target={method.action.startsWith('http') ? '_blank' : '_self'}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {method.actionText}
                      </a>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Form */}
        <section className="pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Envie uma Mensagem</h2>
              <p className="text-muted-foreground">
                Prefere usar o formulário? Preencha os campos abaixo e entrarei em contato em breve.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="pb-16 md:pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-muted-foreground">
                Algumas das perguntas mais comuns que recebo sobre meus serviços
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 h-full">
                    <h3 className="font-bold mb-3 text-lg">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            <motion.div variants={itemVariants} className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <MessageCircle className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ainda tem dúvidas?
              </h2>
              <p className="text-muted-foreground mb-6">
                Não encontrou a resposta que procurava? Envie uma mensagem e 
                responderei todas as suas perguntas.
              </p>
              
              <Button asChild size="lg">
                <a href="mailto:jorge@negrelli.dev">
                  <Mail className="mr-2 w-5 h-5" />
                  Enviar Email Direto
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </section>
    </div>
  );
}