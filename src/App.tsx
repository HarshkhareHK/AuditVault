
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
