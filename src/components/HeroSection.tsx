
  import React, { useRef, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Autoplay, Pagination } from 'swiper/modules';
  import { Link } from 'react-router-dom';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';
  import heroImage1 from '../assets/googleAI.png';

  function HeroSection() {
  const heroImages = [
    '/images/plcman.jpg',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',

    '/images/googleAI.png',
    '/images/power.jpg',
    '/images/plc.jpg',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80'
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        loop={true}
        className="h-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-primary/70"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            We Build Everything
            <span className="text-accent block mt-2">with Passion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Leading industrial automation solutions provider across India, specializing in Special Purpose Machines, Conveyor Systems, PLC programming, SCADA, and advanced control systems such as vision-based Poka-Yoke and measurement solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/about"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

  export default HeroSection;
