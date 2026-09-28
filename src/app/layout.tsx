import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://sheharyar-khan-portfolio.sheharyark017.chatgpt.site'),
  alternates: { canonical: '/' },
  title: 'Sheharyar Khan — Software Engineer',
  description: 'Senior software engineer in Lahore building thoughtful web and mobile products with React, Next.js, React Native, and TypeScript. Explore selected work and experience.',
  openGraph: { title: 'Sheharyar Khan — Engineering, with feeling.', description: 'Thoughtful interfaces. Serious engineering. Web, mobile, and everything connecting them.', type: 'website', images: [{url:'/social-card.png',width:1200,height:630}] },
  twitter: { card: 'summary_large_image', title: 'Sheharyar Khan — Software Engineer', images: ['/social-card.png'] },
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = { themeColor: '#171918' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
