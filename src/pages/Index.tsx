
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CompanyIntro from '../components/CompanyIntro';
import Footer from '../components/Footer';

const Index = () => {
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
