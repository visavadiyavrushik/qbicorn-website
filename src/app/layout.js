import { Poppins, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/themeProvider';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import BackToTopButton from '@/components/BackToTopButton/BackToTopButton';

// Import Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

// Import Instrument Sans font
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
});

export const metadata = {
  title: 'Qbicron',
  description: 'Qbicron',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${instrumentSans.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}

          <Footer />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
