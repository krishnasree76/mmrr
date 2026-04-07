import React from 'react';
import { motion } from 'framer-motion';
import razorpay from '../assets/razorpay.png';
import payu from '../assets/payu.png';
import cashfree from '../assets/cashfree-payments.png';
import bharatConnect from '../assets/bharat-connect.png';

const Partners = () => {
  const partners = [
    { name: 'Razorpay', logo: razorpay },
    { name: 'PayU', logo: payu },
    { name: 'Cashfree', logo: cashfree },
    { name: 'Bharat Connect', logo: bharatConnect }
  ];

  return (
    <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm border-y border-primary/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center space-y-3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-primary"
            >
              Our Partners & Integrations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-lg mx-auto"
            >
              We collaborate with world-class payment gateways to ensure your transactions are always fast and secure.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="transition-all duration-300 flex items-center justify-center p-4 bg-white/40 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
