
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true });

  const services = [
    {
      id: 'plc',
      title: 'PLC Programming',
      description: 'Comprehensive programmable logic controller programming and integration services for automated manufacturing systems.',
      features: [
        'Ladder Logic Programming',
        'Function Block Diagrams',
        'Structured Text Programming',
        'System Integration',
        'Testing & Commissioning'
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'scada',
      title: 'SCADA Development',
      description: 'Advanced supervisory control and data acquisition systems for real-time monitoring and control of industrial processes.',
      features: [
        'Real-time Data Acquisition',
        'Process Visualization',
        'Alarm Management',
        'Historical Data Logging',
        'Remote Monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'conveyor',
      title: 'Conveyor Systems',
      description: 'Complete conveyor automation solutions including design, installation, and control system integration.',
      features: [
        'Belt Conveyor Systems',
        'Roller Conveyor Systems',
        'Sortation Systems',
        'Control Integration',
        'Safety Systems'
      ],
      image: '/images/conv.png'
    },
    {
      id: 'vision',
      title: 'Vision Systems',
      description: 'Machine vision inspection systems for quality control, measurement, and automated sorting applications.',
      features: [
        'Quality Inspection',
        'Defect Detection',
        'Dimensional Measurement',
        'Optical Character Recognition',
        'Barcode Reading'
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80'
    }
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Comprehensive Industrial Automation Solutions
          </motion.p>
        </div>
      </section>

      <section ref={servicesRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end industrial automation solutions tailored to meet your specific requirements, 
              from initial design and programming to installation and ongoing support.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20"></div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Service #{index + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <h4 className="text-xl font-semibold text-primary mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your industrial automation requirements and discover how 
              our solutions can optimize your operations.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
