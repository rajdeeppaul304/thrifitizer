import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        alert("Email sent!");
        setForm({ name: '', email: '', message: '' });
      } else {
        alert("Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name"
            value={form.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            value={form.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required 
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
