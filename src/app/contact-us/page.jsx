"use client";
import React, { useState } from "react";
import PageHero from "@/components/PageHero";
import {
  MapPin,
  Mail,
  Building2,
  Users,
  Send,
  MessageSquare,
  MailIcon,
  Globe,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed");
      // success
      alert(data.message || "Thank you — we will contact you shortly");
      setFormData({ name: "", mobileNumber: "", email: "", message: "" });
    } catch (err) {
      console.error("Submit error", err);
      alert(err.message || "Failed to send. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero backgroundImage="/contact.jpg" />

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch With <span className="text-orange-500">NICP</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to explore investment opportunities in India? Connect with
              our team for expert guidance and personalized solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Office Information */}
              <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Office
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-orange-50 hover:bg-orange-100 transition-colors">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Plot No. 4, 2nd Floor, Sector 44,
                        <br />
                        Gurgaon, Haryana - 122003
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 hover:bg-green-100 transition-colors">
                    <FaWhatsapp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-gray-700 text-sm">
                        <a
                          href="https://api.whatsapp.com/send?phone=+919891015220&text=Hello,%20I%20am%20interested%20in%20Invest%20NICP%20Services!%20Please%20get%C2%A0in%C2%A0touch%E2%80%A6."
                          className="hover:text-green-600 transition-colors"
                        >
                          +91-9891015220
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <div className="space-y-1">
                        <p className="text-gray-700 text-sm">
                          {/* <a href="mailto:info@investnicp.com" className="hover:text-blue-600 transition-colors">
                                                        info@investnicp.com
                                                    </a> */}
                        </p>
                        <p className="text-gray-700 text-sm">
                          <a
                            href="mailto:nicpindia@gmail.com"
                            className="hover:text-blue-600 transition-colors"
                          >
                            nicpindia@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Associate Info */}
              <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-white" />
                  <h2 className="text-lg font-bold">Business Associate</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-semibold">REHO INDIA</h3>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">
                          <MailIcon className="text-sm" />
                        </span>
                        :<span> corp.comm@rehoindia.com</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">
                          <FaWhatsapp className="text-2xl" />
                        </span>
                        :<span> +91 72900 04886</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-lg">
                        <Globe className="text-sm" />
                      </span>{" "}
                      :
                      <div>
                        <div className="space-y-1">
                          <a
                            href="http://www.rehoindia.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-orange-200 hover:text-white transition-colors underline"
                          >
                            www.rehoindia.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/investnicp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black hover:bg-black flex items-center justify-center text-white transition-colors"
                  >
                    <span className="text-2xl">𝕏</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/investnicp/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 hover:bg-blue-800 flex items-center justify-center text-white transition-colors"
                  >
                    <span className="text-2xl">in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Appointment Form
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Mobile Number */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Enter your mobile number"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Subject */}
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mail Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      MESSAGE/QUERY * Short Description (Max 200 Character)
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your investment goals or business requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={200}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none text-gray-900"
                      required
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.message.length}/200 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {submitting ? "SENDING..." : "SUBMIT"}
                  </button>
                </form>

                <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Quick Response Guarantee
                  </h4>
                  <p className="text-sm text-gray-700">
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful investors who chose NICP as their
              trusted partner in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 transition-colors"
              >
                Learn More About Us
              </Link>
              <Link
                href="/investment-opportunities"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-8 transition-colors"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
