
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://api.deafassistant.com/email/sendemail?body=Below is the message received on the website&subject=MIC Website Form&recipient=saamer.mansoor@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            body: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      setErrors({ api: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#112E4A] py-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-4 text-[#C6DA31]">Contact Us</h1>
        <p className="text-xl opacity-90">Have questions? We're here to help.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h2 className="text-3xl font-bold text-[#112E4A] mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Whether you're looking for resources, interested in sponsorship, or want to
                share your latest invention, reach out to us. We typically respond within 1-2 business days.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-[#C6DA31] p-4 rounded-2xl text-[#112E4A]">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</h4>
                    <p className="text-xl font-bold text-[#112E4A]">ontvgrin@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-[#C6DA31] p-4 rounded-2xl text-[#112E4A]">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone</h4>
                    <p className="text-xl font-bold text-[#112E4A]">616 402 4714</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-[#C6DA31] p-4 rounded-2xl text-[#112E4A]">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Location</h4>
                    <p className="text-xl font-bold text-[#112E4A]">Michigan, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="text-lg font-bold text-[#112E4A] mb-2">Direct Contact</h4>
                <p className="text-gray-600 font-medium">Point of Contact: Kevin Moran</p>
              </div>
            </div>

            <div className="bg-[#112E4A] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <form className="space-y-6" onSubmit={handleSubmit}>

                <div>
                  <label className="block text-[#C6DA31] text-sm font-bold mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 mt-2">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[#C6DA31] text-sm font-bold mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 mt-2">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[#C6DA31] text-sm font-bold mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white"
                  >
                    <option className="bg-[#112E4A]">General Inquiry</option>
                    <option className="bg-[#112E4A]">Summit Registration</option>
                    <option className="bg-[#112E4A]">Sponsorship</option>
                    <option className="bg-[#112E4A]">Volunteer Opportunities</option>
                    <option className="bg-[#112E4A]">Pitch Competition</option>
                  </select>
                  {errors.subject && <p className="text-red-400 mt-2">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-[#C6DA31] text-sm font-bold mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white h-40"
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="text-red-400 mt-2">{errors.message}</p>}
                </div>

                {errors.api && <p className="text-red-400">{errors.api}</p>}
                {success && <p className="text-green-400 font-semibold">Message sent successfully!</p>}

                <button
                  disabled={isSubmitting}
                  className="w-full bg-[#C6DA31] text-[#112E4A] py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;