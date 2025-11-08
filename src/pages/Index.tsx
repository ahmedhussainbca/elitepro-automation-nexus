
import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CompanyIntro from '../components/CompanyIntro';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the very top (x=0, y=0)
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CompanyIntro />
      <Footer />
    </div>
  );
};

export default Index;
