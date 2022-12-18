module.exports = {
  siteTitle: 'Madhavam Shahi',
  siteDescription:
    'Madhavam Shahi is a software developer based in Dallas, Texas.',
  siteKeywords:
    'python,flutter,dart,firebase, java, web development',
  siteUrl: 'https://madhavamshahi.github.io/',
  siteLanguage: 'en_US',
  name: 'Madhavam Shahi',
  location: 'Dallas, Texas',
  email: 'madhavam.p.shahi@tcu.edu',
  github: 'https://github.com/madhavamshahi',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/madhavamshahi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/madhavam-pratap-shahi-a976ab210/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
