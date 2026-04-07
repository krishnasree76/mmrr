// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div className="container mx-auto px-4 md:px-8 py-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//         {/* Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="space-y-12"
//         >
//           <div className="space-y-4">
//             <h1 className="text-4xl md:text-5xl font-bold text-primary">Get in Touch</h1>
//             <p className="text-slate-600">Have questions? We're here to help you 24/7 with your digital payment needs.</p>
//           </div>

//           <div className="space-y-8">
//             <div className="flex items-center gap-6 group">
//               <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
//                 <Phone size={28} />
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-accent uppercase tracking-widest">Phone</p>
//                 <p className="text-xl font-bold text-primary">8106426368</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-6 group">
//               <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
//                 <Mail size={28} />
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-accent uppercase tracking-widest">Email</p>
//                 <p className="text-xl font-bold text-primary">mmrrhyd@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-6 group">
//               <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
//                 <MapPin size={28} />
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-accent uppercase tracking-widest">Address</p>
//                 <p className="text-lg font-bold text-primary leading-relaxed">
//                   h no -8-3-228/489, opp axis atm, <br />
//                   rahmath Nagar, yousufguda <br />
//                   Hyderabad 500045
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* <div className="space-y-6">
//             <h3 className="text-xl font-bold text-primary uppercase tracking-widest">Follow Us</h3>
//             <div className="flex gap-4">
//               {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
//                 <a key={idx} href="#" className="p-4 glass rounded-2xl text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
//                   <Icon size={24} />
//                 </a>
//               ))}
//             </div>
//           </div> */}
//         </motion.div>

//         {/* Contact Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="glass p-8 md:p-12 rounded-[40px] shadow-2xl relative"
//         >
//           <div className="absolute top-0 right-0 p-8">
//             <Send className="text-accent w-12 h-12 opacity-10" />
//           </div>
//           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//             <div className="space-y-2">
//               <label className="text-sm font-bold text-primary ml-1">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 className="w-full px-6 py-4 rounded-2xl glass border-gray-200 focus:border-accent focus:ring-0 outline-none transition-all"
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="text-sm font-bold text-primary ml-1">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="john@example.com"
//                 className="w-full px-6 py-4 rounded-2xl glass border-gray-200 focus:border-accent focus:ring-0 outline-none transition-all"
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="text-sm font-bold text-primary ml-1">Your Message</label>
//               <textarea
//                 rows="4"
//                 placeholder="How can we help you today?"
//                 className="w-full px-6 py-4 rounded-2xl glass border-gray-200 focus:border-accent focus:ring-0 outline-none transition-all"
//               ></textarea>
//             </div>
//             <button className="w-full bg-primary hover:bg-black text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
//               Send Message
//               <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </button>
//           </form>

//           {/* Map Placeholder */}
//           <div className="mt-8 overflow-hidden rounded-2xl border-4 border-white shadow-lg bg-gray-100 h-64 relative">
//             {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
//               Map Placeholder - Hyderabad Office
//             </div> */}
//             <div className="absolute inset-0 opacity-20 bg-grid-pattern pointer-events-none"></div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const phoneNumber = "918106426368";

    const whatsappMessage = `Hello, I have a query:

Name: ${name}
Email: ${email}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");

    // Clear form after sending
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Get in Touch
            </h1>
            <p className="text-slate-600">
              Have questions? We're here to help you 24/7 with your digital payment needs.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-accent uppercase tracking-widest">Phone</p>
                <p className="text-xl font-bold text-primary">8106426368</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-accent uppercase tracking-widest">Email</p>
                <p className="text-xl font-bold text-primary">mmrrhyd@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-accent uppercase tracking-widest">Address</p>
                <p className="text-lg font-bold text-primary leading-relaxed">
                  h no -8-3-228/489, opp axis atm, <br />
                  rahmath Nagar, yousufguda <br />
                  Hyderabad 500045
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 md:p-12 rounded-[40px] shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 p-8">
            <Send className="text-accent w-12 h-12 opacity-10" />
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl glass border-gray-200 focus:border-accent outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl glass border-gray-200 focus:border-accent outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">Your Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you today?"
                className="w-full px-6 py-4 rounded-2xl glass border-gray-200 focus:border-accent outline-none"
              ></textarea>
            </div>

            <button className="w-full bg-primary hover:bg-black text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 group">
              Send Message
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
