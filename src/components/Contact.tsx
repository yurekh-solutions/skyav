import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Sky Vision Multimedia",
      "telephone": "+918655973366",
      "email": "sky.av.rentals@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Room No 951, Nayagaon, Near Maharashtra Hotel, Laxman Mahatre Road",
        "addressLocality": "Dahisar West",
        "addressRegion": "Mumbai",
        "postalCode": "400068",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Pune", "Lonavala", "Surat", "Goa"]
    }
  };

  const services = [
    "PROJECTOR Rental",
    "LED WALL Rental",
    "LED TV Rental",
    "KARAOKE MICS Rental",
    "SOUND SYSTEM Rental",
    "Complete AUDIO VIDEO Solutions",
    "PHOTOGRAPHY Services",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }

    // WhatsApp message
    const message = `Hi, I'm ${formData.name}. I'm interested in ${formData.service}. Phone: ${formData.phone}${formData.email ? `, Email: ${formData.email}` : ''}${formData.message ? `. Message: ${formData.message}` : ''}`;
    const whatsappUrl = `https://wa.me/918655973366?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get Free Quote | Sky Vision Multimedia Mumbai</title>
        <meta name="description" content="Contact Sky Vision Multimedia for AV equipment rental in Mumbai. Call +91 86559 73366 or email sky.av.rentals@gmail.com. 24/7 support, instant quotes." />
        <meta name="keywords" content="contact AV rental Mumbai, get quote projector rental, LED wall rental contact, AV equipment inquiry, event equipment Mumbai contact" />
        <link rel="canonical" href="https://skyav.in/#contact" />
        <script type="application/ld+json">
          {JSON.stringify(contactStructuredData)}
        </script>
      </Helmet>
      
      <section id="contact" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Request a free quote or call us directly - we're here to help 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 animate-fade-in border border-white/40 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                  required
                />
              </div>
              
              <div>
                <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Service *" />
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Textarea
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <a href="tel:+918655973366" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    +91 86559 73366
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <a href="mailto:sky.av.rentals@gmail.com" className="text-lg text-muted-foreground hover:text-primary transition-colors break-all">
                    sky.av.rentals@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Room No 951, Nayagaon<br />
                    Near Maharashtra Hotel<br />
                    Laxman Mahatre Road<br />
                    Dahisar West, Mumbai 400068
                  </p>
                  <p className="text-sm font-semibold text-primary mt-3">
                    Serving: Mumbai | Navi Mumbai | Thane | Pune | Lonavala | Surat | Goa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
