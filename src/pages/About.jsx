import { motion } from 'framer-motion';
import { BankIllustration } from '../components/Illustrations';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary">About Us</h1>
          <div className="h-1.5 w-20 bg-accent rounded-full mb-8"></div>
          
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p className="font-semibold text-primary">
              mmrrpay is the Brand of the Legal Entity "Veggie Software Solutions Private Limited" which is Founded by Arelli Mahesh in 2025.
            </p>
            
            <p>
              VEGGIE SOFTWARE SOLUTIONS PRIVATE LIMITED is engaged Inter alia, in the business of enabling various electronic distribution of Electricity/Gas/water.etc.
            </p>
            
            <p>
              Also VEGGIE SOFTWARE SOLUTIONS PRIVATE LIMITED has business arrangements with various Utility billers and similar entities (“Service Provider”) for managing electronic payments and collection services (defined more details as “Services” hereunder) within the country.
            </p>
            
            <p>
              VEGGIE SOFTWARE SOLUTIONS PRIVATE LIMITED has a vision of creating a safe and secure online Bill Payment platform which can be accessed by customers from anywhere at any hour of the day. Our approach is simple yet innovative to deliver our services to you instantly and efficiently.
            </p>
            
            <p>
              Companies Aim is to furnish Utility Bills payment & many more services etc. There is no restriction or IP ban for Customers who easily can avail unlimited number of recharges at mmrrpay.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative"
        >
          <div className="glass p-10 rounded-3xl shadow-2xl relative z-10">
            <BankIllustration />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
