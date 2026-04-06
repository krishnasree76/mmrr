import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass p-8 rounded-3xl card-hover shadow-sm border border-gray-100 flex flex-col items-start gap-4"
    >
      <div className="bg-accent/10 p-4 rounded-2xl text-accent">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
