/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-onyx selection:bg-gold selection:text-onyx">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Menu />
          <Reservations />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
