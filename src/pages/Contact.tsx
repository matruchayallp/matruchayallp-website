import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(result.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Ready to start your loan journey? Contact us today!</p>
        </div>
        <div className="max-w-2xl mx-auto">
          {success && <div className="text-green-600 text-center font-semibold py-6">Thank you for contacting us! We will get back to you soon.</div>}
          {error && <div className="text-red-600 text-center font-semibold py-6">{error}</div>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded" value={form.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded" value={form.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border rounded" value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="corporate-btn w-full text-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 