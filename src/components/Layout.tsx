import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-primary/20">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-2xl font-bold text-primary text-glow">GameZone</Link>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/booking" className="hover:text-primary transition-colors">Book Now</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </nav>
      </header>
      <main className="container mx-auto mt-8 p-4">
        {children}
      </main>
      <footer className="mt-16 border-t border-primary/20 py-6 text-center text-sm text-muted-foreground">
        © 2024 GameZone. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;