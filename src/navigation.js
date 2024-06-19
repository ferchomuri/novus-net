import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    {
      text: 'Planes',
      href: getPermalink('/#plans'),
    },
    {
      text: 'Contrata',
      href: getPermalink('/#steps'),
    },
    {
      text: 'Nosotros',
      href: getPermalink('/#faqs'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/#contact')
    }
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: 'Whatsapp', href: 'https://wa.me/593961886637?text=Me%20interesa%20el%20servicio%20de%20internet', target: '_blank' }],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    {
      title: 'Normativas',
      links: [
        { text: 'Ley Orgánica de Telecomunicaciones', href: 'https://novus-net.com/content/uploads/documents/LEY%20ORG%C3%81NICA%20DE%20TELECOMUNICACIONES.pdf', target: '_blank' },
        { text: 'Reglamento a la Ley Orgánica de Telecomunicaciones', href: 'https://novus-net.com/content/uploads/documents/REGLAMENTO%20GENERAL%20A%20LA%20LEY%20ORG%C3%81NICA%20DE%20TELECOMUNICACIONES.pdf', target: '_blank' },
        { text: 'Norma Ténica Contratos de Adhesión', href: 'https://novus-net.com/content/uploads/documents/NORMA%20T%C3%89CNICA%20QUE%20REGULA%20CONTRATOS%20DE%20ADHESI%C3%93N%20DEL%20CONTRATO%20NEGOCIADO%20Y%20EMPADRONAMIENTO.pdf', target: '_blank' },
        { text: 'Norma Técnica Planes de Contingencia', href: 'https://novus-net.com/content/uploads/documents/PLANES%20DE%20CONTINGENCIA%20PARA%20OPERACI%C3%93N%20DE%20TELECOMUNICACIONES.pdf', target: '_blank' },
        { text: 'Capacidad de Internet', href: 'https://novus-net.com/content/uploads/documents/StatsNovusNet.pdf', target: '_blank' },
        { text: 'Parámetros de calidad', href: 'https://novus-net.com/content/uploads/documents/PARAMETROS-DE-CALIDAD.pdf', target: '_blank' },
      ],
    },
    {
      title: 'Enlaces Gubernamentales',
      links: [
        { text: 'Agencia de Regulación y Control de las Telecomunicaciones', href: 'https://www.arcotel.gob.ec/', target: '_blank' },
        { text: 'Ministerio de Telecomunicaciones', href: 'https://www.telecomunicaciones.gob.ec/', target: '_blank' },
        { text: 'Presidencia de la República', href: 'https://www.presidencia.gob.ec/', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terminos', href: getPermalink('/terms') },
    { text: 'Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@novusnet.ec?_t=8n4k6kFUihh&_r=1' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/share/s9S1hrTFK7gxKHJE/?mibextid=qi2Omg' },
  ],
  footNote: `NovusNet S.A. | Todos los derechos reservados 2024`,
};
