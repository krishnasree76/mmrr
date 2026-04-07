import { motion } from 'framer-motion';
import { CreditCard, School, ShieldCheck, Zap, Laptop, Car } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="glass p-10 rounded-3xl card-hover border border-gray-100 flex flex-col gap-6"
  >
    <div className="bg-primary p-4 rounded-2xl w-fit text-white shadow-lg">
      <Icon size={32} />
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-primary">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      {features && (
        <ul className="space-y-3 pt-4 border-t border-gray-100 mt-4">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Bill Payments - Bharat Connect",
      description: "Pay Your Utility Bills like Electricity, Water, Gas, and more with Ease Using Our Bharat Connect Platform. Enjoy Fast, Secure, and Error-free Transactions – Anytime, Anywhere.",
      features: [
        "Instant bill payment processing",
        "24/7 availability & secure gateway",
        "Real-time transaction confirmations",
        "Support for all major utility providers"
      ]
    },
    {
      icon: School,
      title: "Education Fee Payments",
      description: "Simplify School & College Fee Payments.",
      features: [
        "Automated fee reminders",
        "Instant receipt generation",
        "Transparent transaction history",
        "Direct integration with institutions"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Insurance Payments",
      description: "Pay and manage your insurance premiums effortlessly across multiple providers.",
      features: [
        "Policy status tracking",
        "Multi-provider support",
        "Premium due alerts",
        "Flexible schedules"
      ]
    },
    {
      icon: Zap,
      title: "Electricity Bill Payment",
      description: "Quick and hassle-free electricity bill payments for all major boards.",
      features: [
        "Quick payments",
        "No late fees",
        "Secure transactions"
      ]
    },
    {
      icon: Laptop,
      title: "Utilities",
      description: "Comprehensive utility payment solutions for everyday needs.",
      features: [
        "Electricity Bill Payments",
        "Water Bill Payments",
        "LPG Bill Payments",
        "FASTag Recharge"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-20 pb-32">
      <div className="text-center mb-20 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-primary"
        >
          Our <span className="text-accent">Services</span>
        </motion.h1>
        <p className="text-slate-500 max-w-3xl mx-auto text-lg">
          We provide a seamless and secure digital payment ecosystem for all your everyday financial transactions.
          Managed by Veggie Software Solutions Private Limited.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} delay={idx * 0.1} />
        ))}
      </div>
    </div>
  );
};

export default Services;
