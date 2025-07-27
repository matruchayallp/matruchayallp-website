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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="text-accent text-2xl mb-3">❝</div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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