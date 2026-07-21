import Script from 'next/script';

type WebApplicationSchema = {
  '@context': 'https://schema.org';
  '@type': 'WebApplication';
  name: string;
  applicationCategory: 'MultimediaApplication';
  operatingSystem: 'Any';
  offers: {
    '@type': 'Offer';
    price: '0';
    priceCurrency: 'USD';
  };
  description: string;
  url: string;
  image?: string;
  author?: {
    '@type': 'Organization' | 'Person';
    name: string;
    url?: string;
  };
  featureList?: string[];
};

type OrganizationSchema = {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': 'ContactPoint';
    contactType: string;
    email?: string;
  };
};

type BreadcrumbSchema = {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }>;
};

type StructuredDataProps = {
  data: WebApplicationSchema | OrganizationSchema | BreadcrumbSchema | Record<string, unknown>;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${data['@type']}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="beforeInteractive"
    />
  );
}

export function generateWebAppSchema(locale: 'en'): WebApplicationSchema {
  const baseUrl = 'https://looma-solez.vercel.app';

  const content = {
    en: {
      name: 'Looma - Online Video Editor',
      description: 'Free AI-powered online video editor. Screen recorder, cinematic zooms, professional mockups, and HD export without watermark.',
      features: [
        'HD screen recording',
        'AI-powered cinematic zooms',
        'Professional mockups',
        'No watermark',
        'High quality export',
        'Free online editor',
      ],
    },
  };

  const { name, description, features } = content[locale];

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description,
    url: baseUrl,
    image: `${baseUrl}/images/metadata/preview.jpg`,
    author: {
      '@type': 'Person',
      name: 'Samin Yeasar',
      url: 'https://solez.vercel.app',
    },
    featureList: features,
  };
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Looma',
    url: 'https://looma-solez.vercel.app',
    logo: 'https://looma-solez.vercel.app/images/metadata/favicon.svg',
    sameAs: [
      'https://github.com/Solez-ai/looma',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: '',
    },
  };
}
