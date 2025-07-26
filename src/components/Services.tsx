import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
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

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial solutions to help you achieve your goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 5).map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
          
          {/* Special All Loans Card with Link */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-accent/50 bg-gradient-to-br from-accent/5 to-accent/10">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <CardTitle className="text-xl">All Types of Loans</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription>
                Complete financial solutions for all your borrowing requirements.
              </CardDescription>
              <Button asChild className="mt-4">
                <Link to="/all-loans" className="flex items-center gap-2">
                  View All Loans
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;