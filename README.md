# Jorge Negrelli - Portfólio Pessoal

Um portfólio moderno e responsivo desenvolvido com as mais recentes tecnologias web, focado em performance, SEO e experiência do usuário.

## 🚀 Stack Tecnológica

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Estilização**: Tailwind CSS + shadcn/ui
- **Animações**: Framer Motion
- **Formulários**: React Hook Form + Zod
- **Email**: Resend API
- **SEO**: next-seo + next-sitemap
- **Deploy**: Vercel

## ✨ Funcionalidades

- **Design Responsivo**: Otimizado para todos os dispositivos
- **Dark Mode**: Tema escuro/claro com detecção automática do sistema
- **SEO Otimizado**: Meta tags, Open Graph, sitemap automático
- **Formulário de Contato**: Validação robusta e envio via email
- **Blog com MDX**: Suporte a conteúdo dinâmico
- **Animações Fluidas**: Transições suaves com Framer Motion
- **Performance**: Otimizado para Core Web Vitals

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Configuração

1. **Clone o repositório**
   ```bash
   git clone https://github.com/jorgenegrelli/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```
   
   Edite `.env.local` com suas configurações:
   ```env
   RESEND_API_KEY=sua_chave_api_resend
   RESEND_FROM_EMAIL=seu@email.com
   NEXT_PUBLIC_SITE_URL=https://seudominio.com
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

   Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── api/               # API Routes
│   ├── blog/              # Blog pages
│   ├── contato/           # Contact page
│   ├── projetos/          # Projects pages
│   ├── sobre/             # About page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   └── ...                # Custom components
├── lib/                   # Utility functions
│   ├── projects.ts        # Project data
│   ├── blog.ts           # Blog data
│   ├── seo.ts            # SEO configuration
│   └── validations.ts    # Form schemas
└── ...
```

## 🎨 Customização

### Cores e Tema

As cores do tema estão definidas em `src/app/globals.css`. A paleta atual usa:
- **Primário**: Vermelho (#dc2626) 
- **Secundário**: Preto (#000000)
- **Neutros**: Cinza/Branco

### Projetos

Edite `src/lib/projects.ts` para adicionar seus projetos:

```typescript
export const projects: Project[] = [
  {
    id: 'meu-projeto',
    title: 'Meu Projeto',
    description: 'Descrição do projeto...',
    technologies: ['React', 'Node.js'],
    // ... outros campos
  }
];
```

### Blog Posts

Adicione novos posts em `src/app/blog/[slug]/page.mdx` e registre em `src/lib/blog.ts`.

## 📧 Configuração do Email

O formulário de contato usa [Resend](https://resend.com) para envio de emails:

1. Crie uma conta no Resend
2. Gere uma API key
3. Configure suas variáveis de ambiente
4. (Opcional) Configure um domínio verificado

## 🚀 Deploy na Vercel

1. **Push para GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Conecte no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Importe seu repositório
   - Configure as variáveis de ambiente
   - Deploy automático!

3. **Configurações importantes**
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
   - Node.js version: 20.x

## 📊 Performance

O site é otimizado para:
- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Excelente em todas as métricas
- **Bundle Size**: Otimizado com tree-shaking
- **Images**: Otimização automática com Next.js

## 🛡️ SEO

Configurações implementadas:
- Meta tags dinâmicas por página
- Open Graph para redes sociais
- Sitemap.xml automático
- Robots.txt
- Canonical URLs
- Schema.org markup

## 🤝 Contribuição

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: jorge@negrelli.dev
- **LinkedIn**: [linkedin.com/in/jorgenegrelli](https://linkedin.com/in/jorgenegrelli)
- **GitHub**: [github.com/jorgenegrelli](https://github.com/jorgenegrelli)

---

Desenvolvido com ❤️ por [Jorge Negrelli](https://jorgenegrelli.com)
