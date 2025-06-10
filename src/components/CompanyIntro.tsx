
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CompanyIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "PLC Programming",
      description: "Advanced programmable logic controller solutions for industrial automation"
    },
    {
      title: "SCADA Development",
      description: "Supervisory control and data acquisition systems for real-time monitoring"
    },
    {
      title: "HMI Design",
      description: "Human-machine interface development for intuitive system control"
    },
    {
      title: "Vision Systems",
      description: "Machine vision inspection and quality control solutions"
    }
  ];

  const industries = [
    "Manufacturing",
    "Automotive",
    "Food & Beverage",
    "Pharmaceuticals",
    "Textile",
    "Chemical Processing"
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Excellence in Industrial Automation
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in 2025 and based in Chennai, Tamil Nadu, Elitepro Engineering and Automation 
              is a cutting-edge industrial automation company dedicated to delivering innovative solutions 
              that transform manufacturing processes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With our team of skilled engineers and passion for automation technology, we specialize in 
              creating efficient, reliable, and cost-effective solutions that help businesses optimize 
              their operations and achieve superior performance.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <h3 className="text-2xl font-bold text-accent">2025</h3>
                <p className="text-primary">Established</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <h3 className="text-2xl font-bold text-accent">10+</h3>
                <p className="text-primary">Team Members</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Key Services</h3>
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="p-4 border-l-4 border-accent bg-gray-50 rounded-r-lg"
                >
                  <h4 className="font-semibold text-primary mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Industries We Serve</h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, index) => (
                <motion.span
                  key={industry}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
