import React, { useState } from "react";

const ApplyNow = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "Home Loan",
    message: "",
    document: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("loanType", form.loanType);
    data.append("message", form.message);
    if (form.document) {
      data.append("document", form.document);
    }
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", loanType: "Home Loan", message: "", document: null });
      } else {
        setError(result.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12">
      <div className="corporate-card w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-[var(--primary)]">Apply Now</h1>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold py-6">Thank you for your application! We will contact you soon.</div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring" value={form.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring" value={form.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring" value={form.phone} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="loanType" className="block mb-2 font-medium">Loan/BGV Type</label>
              <select id="loanType" name="loanType" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring" value={form.loanType} onChange={handleChange}>
                <option>Home Loan</option>
                <option>Business Loan</option>
                <option>Car Loan</option>
                <option>Personal Loan</option>
                <option>Mortgage Loan</option>
                <option>Gold Loan</option>
                <option>Background Verification</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring" value={form.message} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="document" className="block mb-2 font-medium">Upload Document (optional)</label>
              <input type="file" id="document" name="document" className="w-full" onChange={handleChange} />
            </div>
            {error && <div className="text-red-600 text-center">{error}</div>}
            <button type="submit" className="corporate-btn w-full text-lg">Submit Application</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplyNow; 