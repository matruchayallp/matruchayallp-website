import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm, ValidationError } from "@formspree/react";


const Contact = () => {
  const [state, handleSubmit] = useForm("xldlbaqr");
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <button onClick={() => window.history.back()} className="mb-4 px-4 py-2 bg-corporate-primary text-white rounded-lg shadow hover:bg-corporate-accent2 transition-all hidden md:inline-block">← Back</button>
        </div>
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
                Matruchaya Consultancy LLP
                <br />
                Ahemdabad, Gujarat 380026
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
                <strong>GunjanKumar Parmar</strong>
                <br />
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
                  matruchayaconsultanacy@gmail.com
                </p>
                <p className="text-primary">
                  matruchayaconsultanacy2@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Contact Us
          </h2>
          {state.succeeded ? (
            <div className="text-green-600 text-center font-semibold py-6">
              Thank you for contacting us! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
                  rows={4}
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-all"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;