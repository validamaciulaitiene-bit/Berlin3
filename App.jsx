import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Instagram, Facebook, Twitter, ChevronDown } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'culture',
      title: 'Kultūros Pulsas',
      description: 'Nuo Muziejų salos didybės iki Kreuzbergo gatvės meno galerijų. Berlynas yra gyvas drobė, kurioje susilieja klasika ir avangardas.',
      image: 'https://images.unsplash.com/photo-1560930950-5cc6074fe514?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'nightlife',
      title: 'Naktinė Energija',
      description: 'Kai nusileidžia saulė, miestas transformuojasi. Pasaulinio garso klubai ir jaukūs barai kuria atmosferą, kurios nerasite niekur kitur.',
      image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'tech',
      title: 'Ateities Technologijos',
      description: 'Europos startuolių širdis. Čia gimsta rytojaus idėjos, o inovatyvi dvasia pritraukia talentus iš viso pasaulio.',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="bg-white text-[#2d2d2d] font-sans selection:bg-[#FFD700] selection:text-black">
      {/* Navigacija */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase border-b-4 border-[#FFD700] text-red-600">
            BERLIN<span className="text-[#FFD700]">.</span>
          </div>
          
          <div className="hidden md:flex space-x-12 font-bold uppercase text-xs tracking-[0.2em]">
            <a href="#" className="hover:text-[#FFD700] transition-colors">Atrasti</a>
            <a href="#culture" className="hover:text-[#FFD700] transition-colors">Kultūra</a>
            <a href="#tech" className="hover:text-[#FFD700] transition-colors">Verslas</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero sekcija */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&q=80&w=2000" 
            alt="Berlyno TV bokštas" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-9xl font-black text-white leading-none uppercase tracking-tighter">
              <span className="text-red-500">Berlin</span>: Where <br />
              <span className="text-[#FFD700]">History</span> Meets <br />
              Future
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-2 bg-[#FFD700] mt-8 mb-12"
            />
            <button className="group flex items-center bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#FFD700] transition-all duration-300">
              Explore Now
              <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Turinys / Bauhaus tinklelis */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 border-l-8 border-[#FFD700] pl-8 flex flex-col justify-center">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Miestas, kuris niekada netyli</h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                Berlynas nėra tik vieta žemėlapyje. Tai idėja, nuolatinis pokytis ir kūrybinė laisvė, kurią pajusite kiekvienoje gatvėje.
              </p>
            </div>
            <div className="md:col-span-8">
              <img 
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=1200" 
                alt="Berlyno architektūra" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detalios sekcijos */}
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <img src={section.image} alt={section.title} className="w-full h-[500px] object-cover shadow-xl border-b-[16px] border-[#FFD700]" />
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                className="flex-1 space-y-6"
              >
                <span className="text-[#FFD700] font-black text-6xl opacity-20">0{index + 1}</span>
                <h3 className="text-4xl font-black uppercase tracking-tight">{section.title}</h3>
                <p className="text-gray-600 text-xl leading-relaxed">{section.description}</p>
                <button className="text-xs font-bold uppercase tracking-[0.3em] border-b-2 border-black pb-2 hover:border-[#FFD700] transition-colors">
                  Skaityti daugiau
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div>
              <div className="text-3xl font-black tracking-tighter uppercase mb-6 text-red-500">
                BERLIN<span className="text-[#FFD700]">.</span>
              </div>
              <p className="text-gray-400">
                Atraskite miestą, kuriame istorijos pėdsakai kuria pagrindą rytojaus inovacijoms.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-[#FFD700]">Nuorodos</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Galerijos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transportas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Istorija</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontaktai</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-[#FFD700]">Sekite mus</h4>
              <div className="flex space-x-6">
                <Instagram className="hover:text-[#FFD700] cursor-pointer" />
                <Facebook className="hover:text-[#FFD700] cursor-pointer" />
                <Twitter className="hover:text-[#FFD700] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-xs text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} <span className="text-red-500">Berlin</span> City Guide. Sukurta su įkvėpimu.
          </div>
        </div>
      </footer>

      {/* Mobilaus meniu perdanga */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[#FFD700] z-[60] flex flex-col items-center justify-center space-y-12"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-black" aria-label="Uždaryti meniu">
              <X size={40} />
            </button>
            <a href="#" className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Atrasti</a>
            <a href="#culture" className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Kultūra</a>
            <a href="#nightlife" className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Naktis</a>
            <a href="#tech" className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Verslas</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
