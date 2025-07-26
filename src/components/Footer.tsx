const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Matrucahaya LLP</h3>
          <p className="text-primary-foreground/80">Your Trusted Financial Partner</p>
        </div>
        <div className="border-t border-primary-foreground/20 pt-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Matrucahaya LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;