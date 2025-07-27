        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial and verification solutions to help you achieve your goals
          </p>
        </div>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const loanServices = [
  {
    title: "Home Loan",
    icon: "🏠",
    description: "Make your dream home a reality with our competitive rates and flexible terms."
  },
  {
    title: "Business Loan",
    icon: "💼",
    description: "Fuel your business growth with customized financing solutions."
  },
  {
    title: "Car Loan",
    icon: "🚗",
    description: "Drive home your dream car with easy EMI options and quick approvals."
  },
  {
    title: "Personal Loan",
    icon: "💰",
    description: "Meet your personal financial needs with hassle-free loan processes."
  },
  {
    title: "Mortgage Loan",
    icon: "🏦",
    description: "Leverage your property value for additional financial support."
  },
  {
    title: "Project Loans",
    icon: "🗂️",
    description: "Finance your new projects with tailored project loan solutions."
  },
  {
    title: "Digital Loans",
    icon: "💻",
    description: "Quick and easy digital loans for your online needs."
  },
  {
    title: "Credit Card Loans",
    icon: "💳",
    description: "Flexible credit card loan options for instant financial support."
  },
  {
    title: "All Types of Loans",
    icon: "📋",
    description: "Complete financial solutions for all your borrowing requirements."
  }
];

const bgvServices = [
  {
    title: "Employment Verification",
    icon: "🧑‍💼",
    description: "Verify candidate employment history, roles, and tenure."
  },
  {
    title: "Education Verification",
    icon: "🎓",
    description: "Authenticate academic credentials and degrees."
  },
  {
    title: "Criminal Record Check",
    icon: "🕵️‍♂️",
    description: "Screen for criminal records to maintain a safe workplace."
  },
  {
    title: "Address Verification",
    icon: "🏠",
    description: "Confirm residential addresses for compliance and due diligence."
  },
  {
    title: "Reference Check",
    icon: "📞",
    description: "Obtain professional references to validate candidate performance."
  },
  {
    title: "Identity Verification",
    icon: "🪪",
    description: "Authenticate government-issued IDs and personal details."
  },
  {
    title: "All Types Background Verification",
    icon: "✅",
    description: "Comprehensive background verification services for all requirements."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Removed back button and 'Our Services' text above service cards as requested */}

        {/* Loan Services Section */}
        <div className="mb-16 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl py-8 px-2 animate-fade-in">
          <h3 className="text-3xl font-extrabold text-corporate-primary mb-8 text-center tracking-tight drop-shadow-lg">Loan Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanServices.map((service, idx) => (
              <Card key={service.title} className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/40 border border-corporate-accent2 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in">
                <span className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-corporate-accent2 to-corporate-primary animate-gradient-move"></span>
                <CardHeader>
                  <div className="flex justify-center mb-2 animate-bounce-slow">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <defs>
                        <radialGradient id={`loanGrad${idx}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#1B3A64" stopOpacity="0.2" />
                        </radialGradient>
                      </defs>
                      <circle cx="22" cy="22" r="20" fill={`url(#loanGrad${idx})`} />
                      <text x="22" y="30" textAnchor="middle" fontSize="28" fill="#1B3A64">{service.icon}</text>
                    </svg>
                  </div>
                  <CardTitle className="text-corporate-primary font-bold text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-corporate-foreground leading-relaxed text-lg text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Background Verification Services Section */}
        <div className="bg-white/30 backdrop-blur-lg rounded-3xl py-8 px-2 shadow-2xl animate-fade-in">
          <h3 className="text-3xl font-extrabold text-corporate-primary mb-8 text-center tracking-tight drop-shadow-lg">Background Verification Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {bgvServices.map((service, idx) => (
              <Card key={idx} className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/40 border border-corporate-accent2 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in flex flex-col justify-between">
                <span className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-corporate-accent2 to-corporate-primary animate-gradient-move"></span>
                <CardHeader>
                  <div className="flex justify-center mb-2 animate-bounce-slow">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <defs>
                        <radialGradient id={`bgvGrad${idx}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#1B3A64" stopOpacity="0.2" />
                        </radialGradient>
                      </defs>
                      <circle cx="20" cy="20" r="18" fill={`url(#bgvGrad${idx})`} />
                      <text x="20" y="28" textAnchor="middle" fontSize="24" fill="#1B3A64">{service.icon}</text>
                    </svg>
                  </div>
                  <CardTitle className="text-corporate-primary font-bold text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-corporate-foreground leading-relaxed text-lg text-center mb-4">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to="/background-verification"
              className="corporate-btn text-lg px-8 py-3"
            >
              View All Background Verification Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;