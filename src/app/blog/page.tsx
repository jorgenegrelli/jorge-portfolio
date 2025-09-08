'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getAllPosts, formatDate } from '@/lib/blog';

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

export default function BlogPage() {
  const posts = getAllPosts();

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
              Blog & Notas Técnicas
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8"
            >
              Compartilho aqui minhas experiências com desenvolvimento, 
              empreendedorismo e as lições aprendidas criando soluções digitais.
            </motion.p>
          </motion.div>
        </section>

        {/* Blog Posts */}
        <section className="pb-16 md:pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {posts.length > 0 ? (
              <div className="space-y-8">
                {posts.map((post) => (
                  <motion.div key={post.slug} variants={itemVariants}>
                    <Card className="p-8 hover:shadow-lg transition-shadow group">
                      <div className="flex items-start justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        
                        {post.featured && (
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                            Destaque
                          </span>
                        )}
                      </div>

                      <Link href={`/blog/${post.slug}`} className="block">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <time dateTime={post.publishedAt}>
                            {formatDate(post.publishedAt)}
                          </time>
                        </div>
                        
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{post.readingTime} de leitura</span>
                        </div>
                        
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <Button asChild variant="outline">
                        <Link href={`/blog/${post.slug}`}>
                          Ler Artigo
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div variants={itemVariants} className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Em breve, mais conteúdo!</h3>
                  <p className="text-muted-foreground mb-8">
                    Estou preparando artigos sobre desenvolvimento web, 
                    empreendedorismo e tecnologia. Fique ligado!
                  </p>
                  
                  <Button asChild>
                    <Link href="/contato">
                      Sugira um Tópico
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Newsletter CTA */}
        <section className="pb-16 md:pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Não perca nenhum artigo
              </h2>
              <p className="text-muted-foreground mb-6">
                Quer ser notificado quando eu publicar novos artigos? 
                Entre em contato e deixe seu interesse!
              </p>
              
              <Button asChild size="lg">
                <Link href="/contato">
                  Entrar em Contato
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
    </div>
  );
}