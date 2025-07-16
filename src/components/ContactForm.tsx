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
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg text-green-800">
          <p className="font-medium">Thank you for your interest!</p>
          <p className="text-sm">We'll contact you within 24 hours to schedule your demo.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="label">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input ${errors.name ? "border-red-500" : ""}`}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input ${errors.email ? "border-red-500" : ""}`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="label">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`input ${errors.phone ? "border-red-500" : ""}`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="businessType" className="label">
            Business Type *
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className={`input ${errors.businessType ? "border-red-500" : ""}`}
          >
            <option value="">Select your business type</option>
            <option value="coach">Coach</option>
            <option value="consultant">Consultant</option>
            <option value="agency">Agency</option>
            <option value="service-provider">Service Provider</option>
            <option value="other">Other</option>
          </select>
          {errors.businessType && (
            <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
          )}
        </div>

        <div>
          <label htmlFor="leadVolume" className="label">
            Current Lead Volume *
          </label>
          <select
            id="leadVolume"
            name="leadVolume"
            value={formData.leadVolume}
            onChange={handleChange}
            className={`input ${errors.leadVolume ? "border-red-500" : ""}`}
          >
            <option value="">Select your monthly lead volume</option>
            <option value="0-10">0-10 leads/month</option>
            <option value="11-25">11-25 leads/month</option>
            <option value="26-50">26-50 leads/month</option>
            <option value="51-100">51-100 leads/month</option>
            <option value="100+">100+ leads/month</option>
          </select>
          {errors.leadVolume && (
            <p className="text-red-500 text-sm mt-1">{errors.leadVolume}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="label">
            Additional Information (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="input"
            placeholder="Tell us about your current challenges..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary btn-lg w-full"
        >
          {isSubmitting ? "Submitting..." : "Get Your Free Demo"}
        </button>

        <p className="text-sm text-gray-600 text-center">
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