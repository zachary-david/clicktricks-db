"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  leadVolume: string;
  message?: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    leadVolume: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.businessType) {
      newErrors.businessType = "Please select your business type";
    }

    if (!formData.leadVolume) {
      newErrors.leadVolume = "Please select your lead volume";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        leadVolume: "",
        message: ""
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="form-professional rounded-xl p-6 md:p-8" role="form" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-professional">Get Started Today</h3>
      
      {isSuccess && (
        <div 
          className="mb-4 md:mb-6 p-4 bg-green-100 border border-green-200 rounded-lg text-green-800"
          role="alert"
          aria-live="polite"
        >
          <p className="font-medium">Thank you for your interest!</p>
          <p className="text-sm">We'll contact you within 24 hours to schedule your Airtable setup.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" noValidate>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input-professional ${errors.name ? "border-red-500" : ""}`}
            placeholder="John Smith"
            autoComplete="name"
            required
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-professional ${errors.email ? "border-red-500" : ""}`}
            placeholder="john@example.com"
            autoComplete="email"
            inputMode="email"
            required
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="label">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`input-professional ${errors.phone ? "border-red-500" : ""}`}
            placeholder="(555) 123-4567"
            autoComplete="tel"
            inputMode="tel"
            required
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">{errors.phone}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="businessType" className="label">
            Business Type *
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className={`input-professional ${errors.businessType ? "border-red-500" : ""}`}
            required
            aria-describedby={errors.businessType ? "businessType-error" : undefined}
            aria-invalid={errors.businessType ? "true" : "false"}
          >
            <option value="">Select your business type</option>
            <option value="coach">Coach</option>
            <option value="consultant">Consultant</option>
            <option value="agency">Agency</option>
            <option value="service-provider">Service Provider</option>
            <option value="other">Other</option>
          </select>
          {errors.businessType && (
            <p id="businessType-error" className="text-red-500 text-sm mt-1" role="alert">{errors.businessType}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="leadVolume" className="label">
            Current Lead Volume *
          </label>
          <select
            id="leadVolume"
            name="leadVolume"
            value={formData.leadVolume}
            onChange={handleChange}
            className={`input-professional ${errors.leadVolume ? "border-red-500" : ""}`}
            required
            aria-describedby={errors.leadVolume ? "leadVolume-error" : undefined}
            aria-invalid={errors.leadVolume ? "true" : "false"}
          >
            <option value="">Select your monthly lead volume</option>
            <option value="0-10">0-10 leads/month</option>
            <option value="11-25">11-25 leads/month</option>
            <option value="26-50">26-50 leads/month</option>
            <option value="51-100">51-100 leads/month</option>
            <option value="100+">100+ leads/month</option>
          </select>
          {errors.leadVolume && (
            <p id="leadVolume-error" className="text-red-500 text-sm mt-1" role="alert">{errors.leadVolume}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="label">
            Additional Information (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="input-professional"
            placeholder="Tell us about your current challenges..."
            aria-describedby="message-help"
          />
          <p id="message-help" className="text-xs text-gray-500 mt-1">Optional: Share any specific challenges you're facing with client follow-up</p>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-professional btn-lg w-full min-h-[56px] flex items-center justify-center text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-describedby="submit-help"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" aria-hidden="true"></div>
                <span aria-live="polite">Setting up your Airtable CRM...</span>
              </>
            ) : (
              "Get Your Airtable CRM Setup"
            )}
          </button>
          <p id="submit-help" className="text-xs text-gray-500 mt-2 text-center">Click to submit your information and get started with your custom Airtable CRM</p>
        </div>

        <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
          By submitting this form, you agree to our{" "}
          <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}