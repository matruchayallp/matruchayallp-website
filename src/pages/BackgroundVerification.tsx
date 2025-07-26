import React from "react";
import BackgroundVerificationServices from "@/components/BackgroundVerificationServices";

const BackgroundVerification = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Background Verification Services</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Employee Verification</h2>
        <p>
          Ensure the authenticity of your employees with our comprehensive background checks, including identity verification, criminal record checks, and employment history validation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Vendor Verification</h2>
        <p>
          Verify the credibility of your vendors to mitigate risks and ensure smooth business operations. Our services include financial stability checks, legal compliance, and reputation analysis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Partner Verification</h2>
        <p>
          Build trustworthy partnerships by verifying the background of your business partners. We provide detailed reports on their financial health, legal standing, and market reputation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Custom Verification Services</h2>
        <p>
          Tailored background verification services to meet your specific business needs. Contact us to discuss your requirements and get personalized solutions.
        </p>
      </section>

      <BackgroundVerificationServices />
    </div>
  );
};

export default BackgroundVerification;
