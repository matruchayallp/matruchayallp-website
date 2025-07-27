import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Ready to start your loan journey? Contact us today!</p>
        </div>
        <div className="max-w-2xl mx-auto text-center py-10">
          <p className="text-lg text-primary">Please use the Contact form on the main page to get in touch with us.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;