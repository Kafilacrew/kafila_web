import React, { useState } from 'react';
import { Calendar, Users, Mail, Phone, User, CreditCard, AlertCircle } from 'lucide-react';

const BookingForm = ({ tripName = "Harishchandragad Trek", pricePerPerson = 7999 }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    emergencyContact: '',
    emergencyPhone: '',
    specialRequests: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const calculateTotal = () => {
    return formData.numberOfPeople * pricePerPerson;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';
    if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      // Add your booking submission logic here
      console.log('Booking Data:', formData);
      console.log('Total Amount:', calculateTotal());
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form or redirect after successful booking
      alert('Booking successful! Check your email for confirmation.');
      
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white max-w-2xl mx-auto py-8 px-4 sm:px-6 md:px-8">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Book Your Trip
        </h2>
        <p className="text-gray-600">
          Complete this form to secure your spot on the {tripName} adventure
        </p>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name *
              </div>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </div>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number *
              </div>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Number of People *
              </div>
            </label>
            <select
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emergency Contact Name *
            </label>
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.emergencyContact ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Jane Doe"
            />
            {errors.emergencyContact && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.emergencyContact}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emergency Contact Phone *
            </label>
            <input
              type="tel"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.emergencyPhone ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="+91 98765 43210"
            />
            {errors.emergencyPhone && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.emergencyPhone}
              </p>
            )}
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Requests or Medical Conditions
          </label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Any dietary restrictions, medical conditions, or special requests..."
          />
        </div>

        {/* Terms and Total */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium text-gray-700">Total Amount</span>
            <span className="text-2xl font-bold text-gray-900">
              ₹{calculateTotal().toLocaleString('en-IN')}
            </span>
          </div>
          
          <div className="mb-4">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 mr-2"
              />
              <span className="text-sm text-gray-600">
                I agree to the terms and conditions, cancellation policy, and privacy policy *
              </span>
            </label>
            {errors.agreeToTerms && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.agreeToTerms}
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-md text-white font-medium ${
              isSubmitting 
                ? 'bg-gray-800 cursor-not-allowed' 
                : 'bg-gray-800 hover:bg-gray-300 active:bg-gray-500'
            } transition-colors duration-200 flex items-center justify-center gap-2`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-5 w-5" />
                Proceed to Payment
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;