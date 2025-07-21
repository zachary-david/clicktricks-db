"use client";

import { useState } from "react";
import { useFormErrorHandler } from "@/hooks/useErrorHandler";
import ErrorDisplay from "@/components/ErrorDisplay";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const {
    fieldErrors,
    setFieldError,
    clearFieldError,
    clearAllErrors,
    handleError,
    isError,
    errorMessage
  } = useFormErrorHandler();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearFieldError(name);
  };

  const validateForm = (): boolean => {
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      setFieldError("name", "Name is required");
      isValid = false;
    } else if (formData.name.length < 2) {
      setFieldError("name", "Name must be at least 2 characters");
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      setFieldError("email", "Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFieldError("email", "Please enter a valid email address");
      isValid = false;
    }

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      setFieldError("phone", "Please enter a valid phone number");
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      setFieldError("message", "Message is required");
      isValid = false;
    } else if (formData.message.length < 10) {
      setFieldError("message", "Message must be at least 10 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearAllErrors();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // In production, you would send the form data to your API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Failed to send message');

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200"
        noValidate
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Lead Management?
        </h3>
        
        {isError && (
          <div className="mb-6">
            <ErrorDisplay error={errorMessage} variant="inline" />
          </div>
        )}
        
        {isSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Success!</h3>
                <p className="mt-1 text-sm text-green-700">
                  Thank you for your interest! We'll contact you within 24 hours to discuss your CRM setup.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                fieldErrors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-[#01a2f1]'
              } focus:ring-2 focus:border-transparent text-base`}
              placeholder="John Smith"
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
            {fieldErrors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                fieldErrors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-[#01a2f1]'
              } focus:ring-2 focus:border-transparent text-base`}
              placeholder="john@example.com"
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
            />
            {fieldErrors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                fieldErrors.phone ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-[#01a2f1]'
              } focus:ring-2 focus:border-transparent text-base`}
              placeholder="(555) 123-4567"
              aria-invalid={!!fieldErrors.phone}
              aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            />
            {fieldErrors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600">
                {fieldErrors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Tell us about your needs *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border ${
                fieldErrors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-[#01a2f1]'
              } focus:ring-2 focus:border-transparent text-base resize-none`}
              placeholder="I'm a freelancer looking to better track my leads and never miss a follow-up..."
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
            />
            {fieldErrors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600">
                {fieldErrors.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-hero-cta disabled:opacity-70 disabled:cursor-not-allowed"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Get Started Now"
            )}
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500 text-center">
          By submitting this form, you agree to receive communications about your CRM setup. 
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
}