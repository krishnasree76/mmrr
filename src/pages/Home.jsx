import { motion } from 'framer-motion';
import { HeroIllustration, PaymentIllustration, CardIllustration, BankIllustration } from '../components/Illustrations';
import FeatureCard from '../components/FeatureCard';
import { Zap, Shield, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant bill payments",
      description: "Pay your bills in seconds with our lightning-fast transaction system."
    },
    {
      icon: Shield,
      title: "Secure transactions",
      description: "Bank-grade security protocols to keep your money and data safe always."
    },
    {
      icon: Clock,
      title: "24/7 availability",
      description: "Access our services anytime, anywhere. We never sleep, so you can rest easy."
    },
    {
      icon: CheckCircle,
      title: "Real-time confirmations",
      description: "Get instant receipts and tracking for every payment you make."
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 mt-10 md:mt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase">
              #1 Digital Payment Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
              Fast, Secure <br /> 
              <span className="text-accent underline decoration-accent/20">Digital Payments</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              Pay electricity, water, gas, insurance & more instantly. The ultimate payment experience for the modern family.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-primary/20 active:scale-95">
                Get Started
              </button>
              <button className="bg-white border-2 border-primary/10 hover:border-primary text-primary px-8 py-4 rounded-full font-bold text-lg transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Hero Image / Illustration */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex-1 relative w-full max-w-xl"
          >
            <div className="relative z-10 p-4">
              <HeroIllustration />
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Why Choose mmrrpay?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Experience the next generation of financial technology with features designed for speed and security.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard 
              key={idx} 
              {...feature} 
              delay={idx * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Illustrations Section (Showcase) */}
      <section className="bg-primary py-24 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
             <motion.div 
               whileInView={{ opacity: 1, scale: 1 }}
               initial={{ opacity: 0, scale: 0.9 }}
               className="flex flex-col items-center text-center gap-6"
             >
                <div className="w-full max-w-[280px]">
                  <PaymentIllustration />
                </div>
                <h3 className="text-xl font-bold">Mobile Payments</h3>
                <p className="text-gray-400 text-sm">Pay anyone, anywhere, instantly from your smartphone.</p>
             </motion.div>

             <motion.div 
               whileInView={{ opacity: 1, scale: 1 }}
               initial={{ opacity: 0, scale: 0.9 }}
               transition={{ delay: 0.1 }}
               className="flex flex-col items-center text-center gap-6"
             >
                <div className="w-full max-w-[280px]">
                  <CardIllustration />
                </div>
                <h3 className="text-xl font-bold">Card Management</h3>
                <p className="text-gray-400 text-sm">Manage all your credit and debit cards in one place.</p>
             </motion.div>

             <motion.div 
               whileInView={{ opacity: 1, scale: 1 }}
               initial={{ opacity: 0, scale: 0.9 }}
               transition={{ delay: 0.2 }}
               className="flex flex-col items-center text-center gap-6"
             >
                <div className="w-full max-w-[280px]">
                  <BankIllustration />
                </div>
                <h3 className="text-xl font-bold">Bank Transfers</h3>
                <p className="text-gray-400 text-sm">Secure and fast bank-to-bank transfers across the country.</p>
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
