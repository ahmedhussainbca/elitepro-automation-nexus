import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the very top (x=0, y=0)
  }, []);

  // 🚨 IMPORTANT: REPLACE THIS WITH YOUR ACTUAL FORMSPREE ENDPOINT URL
  // Go to Formspree, create a new form, and copy the URL they provide.
  const FORM_ENDPOINT = "https://formspree.io/f/myzlzdgo"; 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State to handle submission status: null, 'sending', 'success', 'error'
  const [submissionStatus, setSubmissionStatus] = useState<'sending' | 'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('sending');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Formspree requires the data to be stringified JSON
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        // Clear the form data after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle non-200 responses (e.g., validation errors)
        setSubmissionStatus('error');
        console.error('Formspree submission error:', response.status);
      }
    } catch (error) {
      // Handle network errors
      setSubmissionStatus('error');
      console.error('Network error during form submission:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Reset status when the user starts typing again
    if (submissionStatus) {
        setSubmissionStatus(null);
    }
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Get in Touch with Our Automation Experts
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Address</h3>
                    <p className="text-gray-600">
                      No. 4/4, 3rd Street,<br />
                      Bakthi Vedantha Avenue,<br />
                      Royala Nagar, Ramapuram,<br />
                      Chennai – 600089
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Phone</h3>
                    <p className="text-gray-600">+91-9894146942</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email</h3>
                    <p className="text-gray-600">tauqeer@eliteproengg.co.in</p>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Contact</h3>
                  <p className="text-gray-600">Tauqeer Ahmed</p>
                  <p className="text-sm text-gray-500 mt-1">Business Development Manager</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell us about your automation requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  // Disable button while sending
                  disabled={submissionStatus === 'sending'} 
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg 
                    ${submissionStatus === 'sending' 
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed' // Grey out when sending
                        : 'bg-accent hover:bg-accent/90 text-primary'
                    }`}
                >
                  {/* Dynamic button text based on status */}
                  {submissionStatus === 'sending' ? 'Sending Message...' : 'Send Message'}
                </motion.button>
                
                {/* Submission Feedback Messages */}
                {submissionStatus === 'success' && (
                    <p className="text-green-600 font-semibold mt-4">
                        Thank you! Your message has been sent successfully.
                    </p>
                )}
                {submissionStatus === 'error' && (
                    <p className="text-red-600 font-semibold mt-4">
                        Oops! Something went wrong. Please check your network or try again later.
                    </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Find Us on the Map</h2>
            <p className="text-gray-600">Located in the heart of Chennai, Tamil Nadu</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.793441670415!2d80.1878169!3d13.0277011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672cab8a9b05%3A0x7531044dc6ec3d48!2sBakthi%20Vedantha%203rd%20Ave%2C%20Manapakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600089!5e1!3m2!1sen!2sin!4v1760696426499!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elitepro Engineering and Automation Location"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;