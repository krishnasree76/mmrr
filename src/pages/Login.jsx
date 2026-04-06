import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import textLogo from '../assets/text.png';

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full glass p-10 rounded-[40px] shadow-2xl border border-white"
      >
        <div className="flex flex-col items-center text-center mb-10">
          <div className="mb-6 flex flex-col items-center gap-2">
            <img src={logo} alt="mmrrpay logo" className="h-16 w-auto object-contain" />
            <img src={textLogo} alt="mmrrpay text" className="h-8 w-auto object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Sign in to your mmrrpay account</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-accent focus:ring-0 outline-none transition-all shadow-inner"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-accent focus:ring-0 outline-none transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-sm font-bold text-accent hover:underline">Forgot Password?</a>
          </div>

          <button className="w-full bg-primary hover:bg-black text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 group">
            Login
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Don't have an account? <Link to="/contact" className="text-accent font-bold hover:underline">Contact sales</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
