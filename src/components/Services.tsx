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
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial and verification solutions to help you achieve your goals
          </p>
        </div>

        {/* Loan Services Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Loan Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loanServices.map((service, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <CardHeader>
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  {service.title === "All Types of Loans" && (
                    <div className="flex justify-center">
                      <Link
                        to="/all-loans"
                        className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-all"
                      >
                        View All Loans
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Background Verification Services Section */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Background Verification Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {bgvServices.map((service, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <CardHeader>
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
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