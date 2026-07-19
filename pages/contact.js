import { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Solana NFT Creator
        </Link>
        <WalletMultiButton />
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-10">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-8 bg-gray-950 p-10 rounded-3xl border border-gray-800">
          <div>
            <label className="block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl font-bold text-lg hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}