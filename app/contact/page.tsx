"use client"; // Add this directive at the top of the file

import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData); // Log form data to the console
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="block w-full p-2 border rounded shadow-sm text-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full p-2 border rounded shadow-sm text-gray-700"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="block w-full p-2 border rounded shadow-sm text-gray-700"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="block w-full p-2 border rounded shadow-sm text-gray-700"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
