import { NextSeoProps } from 'next-seo';

export const defaultSEO: NextSeoProps = {
  title: 'Jorge Negrelli - Desenvolvedor Full Stack',
  titleTemplate: '%s | Jorge Negrelli',
  description: 'Desenvolvedor Full Stack especializado em Java e JavaScript. Estudante de Engenharia de Software na UniCesumar, criador de soluções digitais para pequenos comércios.',
  canonical: 'https://jorgenegrelli.com',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jorgenegrelli.com',
    siteName: 'Jorge Negrelli',
    title: 'Jorge Negrelli - Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack especializado em Java e JavaScript. Estudante de Engenharia de Software na UniCesumar, criador de soluções digitais para pequenos comércios.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jorge Negrelli - Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    handle: '@jorgenegrelli',
    site: '@jorgenegrelli',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'author',
      content: 'Jorge Negrelli',
    },
    {
      name: 'keywords',
      content: 'Jorge Negrelli, Desenvolvedor Full Stack, Java, JavaScript, React, Next.js, UniCesumar, Engenharia de Software',
    },
  ],
};

export const getPageSEO = (
  title: string,
  description: string,
  path: string = ''
): NextSeoProps => ({
  title,
  description,
  canonical: `https://jorgenegrelli.com${path}`,
  openGraph: {
    ...defaultSEO.openGraph,
    title,
    description,
    url: `https://jorgenegrelli.com${path}`,
  },
});