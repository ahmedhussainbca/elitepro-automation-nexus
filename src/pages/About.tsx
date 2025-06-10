
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const visionRef = useRef(null);
  const teamRef = useRef(null);
  const visionInView = useInView(visionRef, { once: true });
  const teamInView = useInView(teamRef, { once: true });

  const team = [
    {
      name: "Tauqeer Ahmed",
      position: "Managing Director",
      description: "Expert in industrial automation with 10+ years of experience"
    },
    {
      name: "Engineering Team",
      position: "PLC & SCADA Specialists",
      description: "Skilled professionals in automation technologies"
    },
    {
      name: "Technical Support",
      position: "Field Engineers",
      description: "Dedicated support for installation and maintenance"
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
            About Elitepro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Engineering Excellence in Industrial Automation
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2025 in Chennai, Tamil Nadu, Elitepro Engineering and Automation emerged from a vision to 
                revolutionize industrial automation in India. Our company was established with the mission to provide 
                cutting-edge automation solutions that enhance productivity, efficiency, and reliability in manufacturing processes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver innovative, reliable, and cost-effective industrial automation solutions that 
                  empower businesses to achieve operational excellence and sustainable growth through 
                  advanced technology integration.
                </p>
                
                <h3 className="text-2xl font-bold text-primary">Our Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    PLC Programming & Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    SCADA System Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    HMI Design & Implementation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Machine Vision Systems
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Company Highlights</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Established</span>
                    <span className="font-semibold text-primary">2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-primary">Chennai, Tamil Nadu</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Team Size</span>
                    <span className="font-semibold text-primary">10+ Professionals</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Specialization</span>
                    <span className="font-semibold text-primary">Industrial Automation</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section ref={visionRef} id="vision" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl leading-relaxed mb-12">
              To become the leading industrial automation solutions provider in South India, recognized for 
              innovation, quality, and customer satisfaction. We envision a future where advanced automation 
              technologies seamlessly integrate with traditional manufacturing processes, creating smarter, 
              more efficient, and sustainable industrial operations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-white/80">Continuously advancing automation technology</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">Q</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-white/80">Delivering excellence in every project</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">R</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-white/80">Trusted solutions for critical operations</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={teamRef} id="team" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals brings together extensive experience in industrial automation, 
              engineering excellence, and customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-100"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
