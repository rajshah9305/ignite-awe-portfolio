const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-gradient mb-4 md:mb-0">
            Portfolio
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              © 2024 Portfolio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with ❤️ and cutting-edge tech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;