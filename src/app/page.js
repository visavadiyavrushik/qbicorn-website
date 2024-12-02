import HomeAINote from '@/sections/home/HomeAINote';
import HomeAIVideo from '@/sections/home/HomeAIVideo';
import HomeContact from '@/sections/home/HomeContact';
import HomeEmpower from '@/sections/home/HomeEmpower';
import HomeFaq from '@/sections/home/HomeFaq';
import HomeFeatureHighlights from '@/sections/home/HomeFeatureHighlights';
import HomeHero from '@/sections/home/HomeHero';
import HomeInsights from '@/sections/home/HomeInsights';
import HomePricing from '@/sections/home/HomePricing';

export const metadata = {
  title: 'Qbicron - AI Note Taker and Meeting Insights',
  description:
    'Transform your meetings and discussions into organized, actionable insights with Qbicron. Join 3k+ members today and experience AI-powered note-taking like never before.',
  keywords: [
    'AI Note Taker',
    'Meeting Insights',
    'Actionable Notes',
    'Qbicron',
    'AI Productivity Tools',
  ],
  author: 'Qbicron Team',
  url: 'https://qbicron.com',
  image: 'https://qbicron.com/assets/images/Groupscreens.jpg',
  type: 'website',
  locale: 'en_US',

  openGraph: {
    title: 'Qbicron - AI Note Taker and Meeting Insights',
    description:
      'Transform your meetings and discussions into organized, actionable insights with Qbicron. Join 3k+ members today and experience AI-powered note-taking like never before.',
    image: 'https://qbicron.com/assets/images/Groupscreens.jpg',
    url: 'https://qbicron.com',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Qbicron - AI Note Taker and Meeting Insights',
    description:
      'Transform your meetings and discussions into organized, actionable insights with Qbicron. Join 3k+ members today and experience AI-powered note-taking like never before.',
    image: 'https://qbicron.com/assets/images/Groupscreens.jpg',
  },
};

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeInsights />
      <HomeAINote />
      <HomeAIVideo />
      <HomeFeatureHighlights />
      <HomePricing />
      <HomeEmpower />
      <HomeFaq />
      <HomeContact />
    </>
  );
}
