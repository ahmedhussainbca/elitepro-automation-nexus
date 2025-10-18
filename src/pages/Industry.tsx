
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Industry = () => {
  const industriesRef = useRef(null);
  const industriesInView = useInView(industriesRef, { once: true });

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Complete automation solutions for manufacturing processes including assembly lines, quality control, and production monitoring.',
      applications: [
        'Assembly Line Automation',
        'Quality Control Systems',
        'Production Monitoring',
        'Inventory Management',
        'Process Optimization'
      ],
      image: '/images/manu.png'
    },
    {
      title: 'Automotive',
      description: 'Advanced automation systems for automotive production including robotic welding, painting, and assembly operations.',
      applications: [
        'Pick and Place Systems',
        'Vision System-based Poka-Yoke',
        'Measurement Systems',
        'Testing & Validation',
        'Paint Booth Automation'
        
      ],
      image: '/images/carpaint.png'
    },
    {
      title: 'Food & Beverage',
      description: 'Hygienic automation solutions for food processing, packaging, and quality assurance in compliance with industry standards.',
      applications: [
        'Food Processing Lines',
        'Packaging Automation',
        'Temperature Control',
        'Hygiene Monitoring',
        'Batch Processing'
      ],
      image: '/images/food.png'
    },
    {
      title: 'Pharmaceuticals',
      description: 'Precision automation for pharmaceutical manufacturing with strict compliance to regulatory requirements and quality standards.',
      applications: [
        'Tablet Manufacturing',
        'Liquid Filling Systems',
        'Batch Records',
        'Environmental Monitoring',
        'Validation Documentation'
      ],
      image: '/images/pham.png'
    },
    // {
    //   title: 'Textile',
    //   description: 'Automation solutions for textile manufacturing including spinning, weaving, dyeing, and finishing processes.',
    //   applications: [
    //     'Spinning Automation',
    //     'Weaving Control',
    //     'Dyeing Process Control',
    //     'Quality Inspection',
    //     'Material Tracking'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80'
    // },
    // {
    //   title: 'Chemical Processing',
    //   description: 'Safe and efficient automation for chemical processing with advanced safety systems and environmental monitoring.',
    //   applications: [
    //     'Batch Processing',
    //     'Continuous Processes',
    //     'Safety Interlocks',
    //     'Environmental Monitoring',
    //     'Recipe Management'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
    // }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-24 pb-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Comprehensive Automation Solutions Across Multiple Sectors
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Diverse Industry Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With our extensive expertise in industrial automation, we provide tailored solutions 
              that meet the unique requirements and challenges of various industries, ensuring 
              optimal performance and compliance with industry standards.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={industriesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 space-y-12 lg:space-y-0">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 50 }}
                animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-primary mb-4">Key Applications:</h4>
                  <ul className="space-y-2">
                    {industry.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Our Industry Solutions?</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Our industry-specific approach ensures that we understand your unique challenges 
              and provide solutions that deliver measurable results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">E</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Industry Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of industry-specific requirements and regulations
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">C</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Custom Solutions</h3>
                <p className="text-gray-600">
                  Tailored automation systems designed for your specific applications
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">S</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Ongoing Support</h3>
                <p className="text-gray-600">
                  Comprehensive support and maintenance services for optimal performance
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our industry-specific automation solutions 
              can optimize your operations and drive growth.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              Discuss Your Requirements
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industry;
