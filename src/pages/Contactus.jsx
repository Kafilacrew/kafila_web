import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Facebook, Instagram, Youtube, X, CheckCircle, AlertCircle } from 'lucide-react';

const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const Icon = type === 'success' ? CheckCircle : AlertCircle;

  return (
    <div className={`fixed top-4 right-4 z-50 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5" />
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    const socialTimer = setTimeout(() => {
      setSocialVisible(true);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(socialTimer);
    };
  }, []);

  const showToast = (message, type) => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    try {
      // Replace these with your actual Google Form entry IDs
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeswldROdtp74ACVVXtewqAQp6tC-FdOXjgtrnF0ZxRj3uUcg/formResponse?usp=dialog';
      
      const formDataToSend = new FormData();
      formDataToSend.append('entry.811015997', formData.name);
      formDataToSend.append('entry.1525603358', formData.email);
      formDataToSend.append('entry.1188657849', formData.phone);
      formDataToSend.append('entry.200688180', formData.message);

      // Submit to Google Form
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend
      });

      // Success message
      showToast('Thank you! Your message has been sent successfully.', 'success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      showToast('Sorry, there was an error sending your message. Please try again.', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      {/* Hero Section */}
      <section
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        
        {/* Content */}
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tight mb-4 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 animate-fade-in-delay">
              Let's start a conversation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Form - Slides in from left */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              <div className=" rounded-2xl p-8 ">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <img 
                        src="https://flagcdn.com/w20/in.png" 
                        alt="India flag" 
                        className="w-5 h-3"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Enter your message... *"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength="180"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    />
                    <div className="text-right text-gray-500 text-sm mt-1">
                      {formData.message.length} / 180
                    </div>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-half bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info - Slides in from right */}
            <div className={`transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
              <div className="space-y-6">
                
                {/* Phone */}
                <div className="bg-gray-100 rounded-3xl p-6 border-2 border-black hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="border-2 border-black rounded-full p-3">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-1">Phone Number</h3>
                      <p className="text-black text-lg">+91 88550 75626</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-100 rounded-3xl p-6 border-2 border-black hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="border-2 border-black rounded-full p-3">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-1">Email</h3>
                      <p className="text-black text-lg">kafiladventures@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Chat */}
                <div className="bg-gray-100 rounded-3xl p-6 border-2 border-black hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="border-2 border-black rounded-full p-3">
                      <MessageCircle className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-1">Chat</h3>
                      <p className="text-black text-lg">+91 88550 75626</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Find Us on Maps Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us on Maps</h2>
            <p className="text-xl text-gray-600">Visit us at our location in Pune, Maharashtra</p>
          </div>
          
          <div className="items-center">
            
            {/* Map Container - Increased height */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200">
                <div className="h-[500px] w-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0267842974815!2d73.8354449!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sFergusson%20College%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fergusson College Road, Pune Location"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
              
              {/* Map Instructions */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">Use ctrl + scroll to zoom the map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow us on Social Media Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ease-out ${
            socialVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-5xl font-bold text-gray-800 mb-12">Follow us on Social Media</h2>
            
            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-8">
              {/* Facebook */}
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-8 h-8" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-8 h-8" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <Youtube className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;