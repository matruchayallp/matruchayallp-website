import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Matruchaya Consultancy LLP made my home loan process incredibly smooth. Their team was always available to answer my questions and guided me through every step.",
      name: "Rajesh Patel",
      location: "Mumbai"
    },
    {
      quote: "I got my business loan approved in record time! The team's professionalism and expertise helped me expand my business without any hassle.",
      name: "Priya Sharma",
      location: "Delhi"
    },
    {
      quote: "Excellent service and competitive rates. They found me the best car loan deal in the market. Highly recommend their services!",
      name: "Amit Kumar",
      location: "Bangalore"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-corporate-background to-corporate-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-corporate-primary mb-3 tracking-tight drop-shadow-lg">
            What Our Clients Say
          </h2>
          <p className="text-xl text-corporate-foreground max-w-xl mx-auto opacity-80">
            Real experiences from satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden rounded-3xl backdrop-blur-lg bg-white/30 border border-corporate-accent2 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in">
              <span className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-corporate-accent2 to-corporate-primary animate-gradient-move"></span>
              <CardContent className="p-8 flex flex-col items-center">
                <div className="mb-4">
                  <div className="flex justify-center mb-3 animate-bounce-slow">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <defs>
                        <radialGradient id={`grad${index}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#1B3A64" stopOpacity="0.2" />
                        </radialGradient>
                      </defs>
                      <circle cx="20" cy="20" r="18" fill={`url(#grad${index})`} />
                      <text x="20" y="28" textAnchor="middle" fontSize="24" fill="#1B3A64">❝</text>
                    </svg>
                  </div>
                  <p className="text-corporate-foreground italic leading-relaxed text-lg md:text-xl text-center">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="border-t-2 border-corporate-accent2 pt-4 w-full flex flex-col items-center">
                  <p className="font-bold text-corporate-primary text-lg md:text-xl mb-1">{testimonial.name}</p>
                  <p className="text-sm text-corporate-foreground opacity-70">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;