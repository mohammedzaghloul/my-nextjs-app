'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactData = {
    title: "Contact Information",
    description: "Get in touch with me",
    email: "mohammed@example.com",
    phone: "01009901702",
    address: "Cairo, Egypt",
    socialMedia: {
      linkedin: "https://linkedin.com/in/mohammed",
      github: "https://github.com/mohammedzaghloul",
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{contactData.title}</h1>
        <p className="text-gray-600 mb-8">{contactData.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Contact Details</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600">✉️</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Email</h3>
                  <p className="text-gray-600">{contactData.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600">📱</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Phone</h3>
                  <p className="text-gray-600">{contactData.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Address</h3>
                  <p className="text-gray-600">{contactData.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-700 mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href={contactData.socialMedia.linkedin} className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
                <a href={contactData.socialMedia.github} className="text-gray-800 hover:text-black">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}