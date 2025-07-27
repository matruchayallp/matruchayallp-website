const bgvServices = [
  {
    title: "Employment Verification",
    description: "Verify candidate employment history, roles, and tenure for accurate hiring decisions."
  },
  {
    title: "Education Verification",
    description: "Authenticate academic credentials and degrees to ensure candidate qualifications."
  },
  {
    title: "Criminal Record Check",
    description: "Screen for criminal records to maintain a safe and trustworthy workplace."
  },
  {
    title: "Address Verification",
    description: "Confirm residential addresses for compliance and due diligence."
  },
  {
    title: "Reference Check",
    description: "Obtain professional references to validate candidate performance and integrity."
  },
  {
    title: "Identity Verification",
    description: "Authenticate government-issued IDs and personal details for fraud prevention."
  }
];

export default function BackgroundVerificationServices() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Background Verification Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive background checks to help you hire and partner with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bgvServices.map((service, idx) => (
            <div key={idx} className="corporate-card h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
