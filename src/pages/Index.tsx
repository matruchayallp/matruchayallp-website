import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[color:theme('colors.corporate.background')]">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[color:theme('colors.corporate.primary')] to-[color:theme('colors.corporate.primaryDark')] text-white py-24 flex items-center justify-center min-h-[60vh]">
          <div className="container mx-auto px-4 text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Empowering Your Financial Future & Building Trust
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Matruchaya Consultancy LLP delivers reliable, efficient, and future-ready financial and background verification solutions. Minimize risk, maximize opportunity, and create lasting value with our transparent, data-driven approach.
            </p>
            <a href="/apply" className="corporate-btn text-lg px-8 py-3 shadow-lg">
              Apply Now
            </a>
          </div>
        </section>

        {/* Services Summary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-[color:theme('colors.corporate.primary')]">Our Services</h2>
            <Services />
          </div>
        </section>

        {/* About Summary */}
        <section className="py-16 bg-[color:theme('colors.corporate.muted')]">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-[color:theme('colors.corporate.primary')]">About Matruchaya Consultancy LLP</h2>
            <p className="text-lg text-[color:theme('colors.corporate.foreground')] mb-6">
              We are a trusted partner for individuals and businesses seeking reliable financial solutions and comprehensive background verification services. Our mission is to empower clients with knowledge, resources, and confidence to make informed decisions.
            </p>
            <a href="/about" className="corporate-btn px-6 py-2">Learn More</a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-[color:theme('colors.corporate.primary')]">What Our Clients Say</h2>
            <Testimonials />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[color:theme('colors.corporate.primary')] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a confidential consultation and discover how Matruchaya Consultancy LLP can help you achieve your goals.
            </p>
            <a href="/contact" className="corporate-btn text-lg px-8 py-3 bg-white text-[color:theme('colors.corporate.primary')] hover:bg-gray-100">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
