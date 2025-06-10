
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  const productsRef = useRef(null);
  const productsInView = useInView(productsRef, { once: true });

  const productCategories = [
    {
      id: 'siemens',
      brand: 'Siemens',
      title: 'Siemens PLC Systems',
      description: 'Industry-leading programmable logic controllers with advanced automation capabilities.',
      products: [
        {
          name: 'S7-1200 Series',
          description: 'Compact modular PLC for small to medium automation tasks',
          features: ['Integrated I/O', 'Ethernet connectivity', 'Web server functionality']
        },
        {
          name: 'S7-1500 Series',
          description: 'High-performance PLC for demanding automation applications',
          features: ['Advanced CPU performance', 'Integrated safety', 'Motion control']
        },
        {
          name: 'SIMATIC HMI',
          description: 'Human-machine interface panels for operator control',
          features: ['Touch operation', 'High resolution displays', 'Industrial design']
        }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'mitsubishi',
      brand: 'Mitsubishi',
      title: 'Mitsubishi Electric PLCs',
      description: 'Reliable and versatile automation solutions for diverse industrial applications.',
      products: [
        {
          name: 'FX5 Series',
          description: 'Compact and cost-effective PLC for basic automation',
          features: ['Easy programming', 'Flexible I/O expansion', 'Built-in Ethernet']
        },
        {
          name: 'iQ-R Series',
          description: 'High-speed, high-precision controller for complex systems',
          features: ['Seamless network integration', 'High-speed processing', 'Motion control']
        },
        {
          name: 'GOT2000 Series',
          description: 'Advanced graphic operation terminals',
          features: ['Multi-touch operation', 'High-resolution display', 'Network connectivity']
        }
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'hmis',
      brand: 'Various',
      title: 'HMI Solutions',
      description: 'Comprehensive human-machine interface solutions for industrial control and monitoring.',
      products: [
        {
          name: 'Touch Panel HMIs',
          description: 'Multi-touch industrial displays with intuitive interfaces',
          features: ['Capacitive touch', 'Industrial grade', 'Multiple sizes available']
        },
        {
          name: 'Panel PCs',
          description: 'Industrial panel computers for complex automation tasks',
          features: ['Windows/Linux support', 'High performance', 'Fanless design']
        },
        {
          name: 'Mobile HMI',
          description: 'Wireless operator interfaces for flexible control',
          features: ['Wireless connectivity', 'Portable design', 'Long battery life']
        }
      ],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'panels',
      brand: 'Custom',
      title: 'Control Panels',
      description: 'Custom-designed electrical control panels and enclosures for industrial applications.',
      products: [
        {
          name: 'Motor Control Panels',
          description: 'Complete motor control and protection solutions',
          features: ['Variable frequency drives', 'Motor protection', 'Local/remote control']
        },
        {
          name: 'Power Distribution Panels',
          description: 'Electrical power distribution and control systems',
          features: ['Circuit protection', 'Power monitoring', 'Safety interlocks']
        },
        {
          name: 'Custom Automation Panels',
          description: 'Tailored control panels for specific applications',
          features: ['Application-specific design', 'Integrated systems', 'Testing & validation']
        }
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
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Premium Industrial Automation Components
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
            <h2 className="text-4xl font-bold text-primary mb-6">Featured Brands & Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with leading automation manufacturers to provide high-quality, reliable products 
              that meet the demanding requirements of modern industrial applications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Siemens</h3>
              <p className="text-gray-600">Industry-leading automation technology</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">M</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Mitsubishi</h3>
              <p className="text-gray-600">Reliable and versatile solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Delta</h3>
              <p className="text-gray-600">Cost-effective automation solutions</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={productsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/20"></div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                      {category.brand}
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-4">{category.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={productsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + productIndex * 0.1 }}
                      className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    >
                      <h4 className="text-xl font-semibold text-primary mb-3">{product.name}</h4>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <h5 className="font-medium text-gray-800 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need Custom Solutions?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We specialize in creating custom automation solutions tailored to your specific requirements. 
              Contact us to discuss your project needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              Get Custom Quote
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
