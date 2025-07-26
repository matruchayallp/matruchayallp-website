import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const AllLoans = () => {
  const loanTypes = [
    {
      title: "Home Loan",
      icon: "🏠",
      description: "Turn your dream of homeownership into reality with our comprehensive home loan solutions.",
      interestRate: "8.5% - 12% p.a.",
      maxAmount: "Up to ₹5 Crores",
      tenure: "Up to 30 years",
      features: [
        "Competitive interest rates",
        "Flexible repayment options",
        "Quick processing within 7-10 days",
        "Minimal documentation",
        "No prepayment penalties after 1 year"
      ],
      documents: [
        "Identity & Address Proof",
        "Income Documents (3 months salary slips)",
        "Bank Statements (6 months)",
        "Property Documents",
        "ITR for last 2 years"
      ],
      eligibility: [
        "Age: 21-65 years",
        "Minimum income: ₹25,000/month",
        "Employment: Salaried/Self-employed",
        "Credit Score: 650+"
      ]
    },
    {
      title: "Business Loan",
      icon: "💼",
      description: "Fuel your business growth with our tailored business financing solutions.",
      interestRate: "11% - 18% p.a.",
      maxAmount: "Up to ₹10 Crores",
      tenure: "Up to 10 years",
      features: [
        "Collateral-free options available",
        "Working capital & term loans",
        "Quick approval in 24-48 hours",
        "Flexible EMI options",
        "Business growth advisory"
      ],
      documents: [
        "Business Registration Documents",
        "ITR & Financial Statements",
        "Bank Statements (12 months)",
        "GST Returns",
        "Identity & Address Proof"
      ],
      eligibility: [
        "Business vintage: 2+ years",
        "Annual turnover: ₹10 lakhs+",
        "Credit Score: 700+",
        "Profitable business operations"
      ]
    },
    {
      title: "Car Loan",
      icon: "🚗",
      description: "Drive home your dream car with our attractive auto loan packages.",
      interestRate: "7.5% - 14% p.a.",
      maxAmount: "Up to ₹2 Crores",
      tenure: "Up to 7 years",
      features: [
        "Finance up to 90% of car value",
        "New & used car financing",
        "Insurance assistance",
        "No hidden charges",
        "Pre-approved loans available"
      ],
      documents: [
        "Identity & Address Proof",
        "Income Documents",
        "Bank Statements (3 months)",
        "Car quotation/invoice",
        "Driving License"
      ],
      eligibility: [
        "Age: 21-60 years",
        "Minimum income: ₹20,000/month",
        "Valid driving license",
        "Credit Score: 600+"
      ]
    },
    {
      title: "Personal Loan",
      icon: "💰",
      description: "Meet your personal financial needs with our instant personal loans.",
      interestRate: "10.5% - 24% p.a.",
      maxAmount: "Up to ₹50 Lakhs",
      tenure: "Up to 5 years",
      features: [
        "Instant approval & disbursal",
        "No collateral required",
        "Flexible use of funds",
        "Competitive interest rates",
        "Part-payment facility"
      ],
      documents: [
        "Identity & Address Proof",
        "Income Documents (3 months)",
        "Bank Statements (6 months)",
        "Employment certificate",
        "PAN Card"
      ],
      eligibility: [
        "Age: 23-60 years",
        "Minimum income: ₹30,000/month",
        "Employment: 2+ years experience",
        "Credit Score: 750+"
      ]
    },
    {
      title: "Mortgage Loan",
      icon: "🏦",
      description: "Leverage your property value for additional financing needs.",
      interestRate: "9% - 15% p.a.",
      maxAmount: "Up to 80% of property value",
      tenure: "Up to 20 years",
      features: [
        "Loan against property",
        "Higher loan amounts",
        "Competitive rates",
        "Flexible repayment",
        "Multiple property types accepted"
      ],
      documents: [
        "Property ownership documents",
        "Property valuation report",
        "Income proof",
        "Bank statements",
        "Identity & Address proof"
      ],
      eligibility: [
        "Age: 25-65 years",
        "Clear property title",
        "Stable income source",
        "Credit Score: 650+"
      ]
    },
    {
      title: "Gold Loan",
      icon: "🥇",
      description: "Quick cash against your gold jewelry with attractive interest rates.",
      interestRate: "8% - 16% p.a.",
      maxAmount: "Up to 75% of gold value",
      tenure: "Up to 3 years",
      features: [
        "Instant approval in 10 minutes",
        "Secure gold storage",
        "Flexible repayment options",
        "No income proof required",
        "Competitive gold rates"
      ],
      documents: [
        "Identity proof",
        "Address proof",
        "Gold jewelry/coins",
        "Purchase receipt (if available)"
      ],
      eligibility: [
        "Age: 18+ years",
        "Gold purity: 18K-24K",
        "Valid identity proof",
        "Indian resident"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-brand-pink border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-primary">All Types of Loans</h1>
              <p className="text-muted-foreground">Comprehensive financial solutions for every need</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Loan Solutions
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore our comprehensive range of loan products designed to meet all your financial requirements
          </p>
        </div>
      </section>

      {/* Loans Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in">
                <CardHeader className="border-b">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{loan.icon}</span>
                    <div>
                      <CardTitle className="text-xl">{loan.title}</CardTitle>
                      <CardDescription className="mt-1">{loan.description}</CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">
                      Interest: {loan.interestRate}
                    </Badge>
                    <Badge variant="secondary">
                      Max Amount: {loan.maxAmount}
                    </Badge>
                    <Badge variant="secondary">
                      Tenure: {loan.tenure}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {loan.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Eligibility */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Eligibility Criteria</h4>
                      <ul className="space-y-1">
                        {loan.eligibility.map((criteria, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {criteria}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Documents */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Required Documents</h4>
                      <ul className="space-y-1">
                        {loan.documents.map((doc, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Apply?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our loan experts are here to help you choose the best option for your needs. 
            Contact us today for personalized assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now: +91 9016287212 / +91 7016646567

            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email: matruchayaconsultanacy@gmail.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const BackgroundVerification = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Background Verification Services</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Employee Verification</h2>
        <p>
          Ensure the authenticity of your employees with our comprehensive
          background checks, including identity verification, criminal record
          checks, and employment history validation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Vendor Verification</h2>
        <p>
          Verify the credibility of your vendors to mitigate risks and ensure
          smooth business operations. Our services include financial stability
          checks, legal compliance, and reputation analysis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Partner Verification</h2>
        <p>
          Build trustworthy partnerships by verifying the background of your
          business partners. We provide detailed reports on their financial
          health, legal standing, and market reputation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Custom Verification Services</h2>
        <p>
          Tailored background verification services to meet your specific
          business needs. Contact us to discuss your requirements and get
          personalized solutions.
        </p>
      </section>
    </div>
  );
};

export default AllLoans;