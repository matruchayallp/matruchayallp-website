import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundVerificationServices from "@/components/BackgroundVerificationServices";
import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <BackgroundVerificationServices />

      <div className="container mx-auto px-4 py-8">
        {/* Existing content of the Home page */}

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-lg font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your last name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter your message"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
              Submit
            </button>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
