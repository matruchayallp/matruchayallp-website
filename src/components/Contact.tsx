import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your loan journey? Contact us today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="text-3xl mb-2">📍</div>
              <CardTitle>Visit Our Office</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Matruchaya Consultancy<br />
                123 Finance Street<br />
                Business District<br />
                Mumbai, Maharashtra 400001
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="text-3xl mb-2">📞</div>
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                <strong>GunjanKumar Parmar</strong><br />
                Loan Consultant
              </p>
              <p className="text-primary font-semibold text-lg">
                +91 9016287212
                <br />
                +91 7016646567
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="text-3xl mb-2">✉️</div>
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-primary">
                  info@matruchayaconsultancy.com
                </p>
                <p className="text-primary">
                  loans@matruchayaconsultancy.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;