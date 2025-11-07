import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Sky Vision Multimedia
            </h3>
            <p className="text-background/80 leading-relaxed">
              Professional AV equipment rental services across Mumbai and Maharashtra for 15+ years.
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/80 hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/80 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Projector Rental Mumbai
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  LED Wall Rental Mumbai
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Sound System Rental
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Karaoke Equipment Rental
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  LED TV Rental Mumbai
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Event Photography Services
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+918655973366" className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +91 86559 73366
              </a>
              <a href="mailto:sky.av.rentals@gmail.com" className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors break-all">
                <Mail className="h-4 w-4" />
                sky.av.rentals@gmail.com
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Dahisar West, Mumbai 400068</span>
              </div>
              <a 
                href="https://www.instagram.com/skyav.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @skyav.in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Sky Vision Multimedia. All Rights Reserved.
          </p>
          <p className="text-background/60 mt-2">
            Serving Mumbai | Navi Mumbai | Thane | Pune | Lonavala | Surat | Goa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
