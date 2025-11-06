import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter','Manrope',system-ui]">
      <Navbar />
      <main>
        <Hero />
        <Featured />
      </main>
      <Footer />
    </div>
  );
}

export default App;
