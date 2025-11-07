import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">
              Sky Vision Multimedia
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Professional AV equipment rental services across Mumbai and Maharashtra for 15+ years.
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">
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
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Our Services</h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
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
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact Info</h4>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <a href="tel:+918655973366" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +91 86559 73366
              </a>
              <a href="mailto:sky.av.rentals@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors break-all">
                <Mail className="h-4 w-4 flex-shrink-0" />
                sky.av.rentals@gmail.com
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Dahisar West, Mumbai 400068</span>
              </div>
              <a 
                href="https://www.instagram.com/skyav.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4 flex-shrink-0" />
                @skyav.in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8 text-center">
         <p className="text-gray-400 text-sm md:text-base">
  © {currentYear} Sky Vision Multimedia. All Rights Reserved.{" "}
  <a
    href="https://www.yurekh.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary transition-colors"
  >
    Developed by Yurekh Solutions
  </a>
</p>

          <p className="text-gray-400 mt-2 text-xs md:text-sm">
            Serving Mumbai | Navi Mumbai | Thane | Pune | Lonavala | Surat | Goa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
