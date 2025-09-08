import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link href="/" className="font-bold text-xl mb-4 block">
                <span className="text-primary">Jorge</span>
                <span className="text-foreground"> Negrelli</span>
              </Link>
              <p className="text-muted-foreground max-w-md">
                Desenvolvedor Full Stack especializado em criar soluções digitais 
                inovadoras para pequenos negócios. Estudante de Engenharia de Software 
                na UniCesumar.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <div className="space-y-2">
                <Link 
                  href="/projetos" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Projetos
                </Link>
                <Link 
                  href="/sobre" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
                <Link 
                  href="/blog" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  href="/contato" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Conecte-se</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jorgenegrelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/jorgenegrelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:jorge@negrelli.dev"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} Jorge Negrelli. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}