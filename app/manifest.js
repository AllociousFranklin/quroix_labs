export default function manifest() {
  return {
    name: 'Quroix Labs | Engineering Intelligence & AI Automation',
    short_name: 'Quroix Labs',
    description: 'Architecting autonomous AI agents and intelligent workflows for the global enterprise.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
