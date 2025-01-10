import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server or email)
    Swal.fire('Success', 'Your message has been sent!', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-center text-gray-700 mb-8">Have any questions? We'd love to hear from you.</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="textarea textarea-bordered w-full mt-2"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="btn btn-primary py-3 px-6 w-full text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div className="max-w-3xl mx-auto mt-10 text-center text-white">
        <h3 className="text-xl font-semibold">Contact Information</h3>
        <div className="mt-4">
          <p>📧 Email: support@tutorhub.com</p>
          <p>📞 Phone: +123-456-7890</p>
          <p>🏠 Address: 123 Tutor Street, Education City</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
