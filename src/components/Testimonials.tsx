import { Star, Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Event Manager, TechCorp India",
      rating: 4,
      text: "Sky Vision Multimedia made our corporate conference a huge success! Their professional team, top-quality equipment, and seamless setup were outstanding. Highly recommended for any corporate event in Mumbai.",
      event: "Corporate Conference",
    },
    {
      name: "Priya Sharma",
      role: "Bride",
      rating: 5,
      text: "Our wedding was perfect thanks to Sky AV! The LED wall displaying our photos was stunning, and the sound system was crystal clear. They handled everything professionally and made our special day memorable.",
      event: "Wedding Reception",
    },
    {
      name: "Amit Patel",
      role: "Music Director",
      rating: 5,
      text: "As a musician, sound quality is everything. Sky Vision provided exceptional audio equipment for our concert. The team's technical expertise and prompt service made our event a grand success!",
      event: "Live Concert",
    },
    {
      name: "Dr. Meera Iyer",
      role: "School Principal",
      rating: 4,
      text: "We've been using Sky AV for our annual day celebrations for 5 years now. Reliable service, affordable pricing, and excellent equipment quality. They truly understand educational event requirements.",
      event: "School Annual Day",
    },
    {
      name: "Karan Mehta",
      role: "Marketing Head, BrandXYZ",
      rating: 5,
      text: "The LED wall and projection setup for our product launch was flawless! Sky Vision's team worked tirelessly to ensure everything was perfect. Best AV rental service in Mumbai!",
      event: "Product Launch",
    },
    {
      name: "Sneha Desai",
      role: "Birthday Celebration Host",
      rating: 5,
      text: "Booked karaoke equipment and LED TV for my husband's birthday party. The setup was quick, equipment was top-notch, and everyone had a blast! Great value for money and friendly service.",
      event: "Birthday Party",
    },
  ];

  const testimonialsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sky Vision Multimedia",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5"
      },
      "reviewBody": testimonial.text,
      "itemReviewed": {
        "@type": "Service",
        "name": testimonial.event
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Client Testimonials - AV Equipment Rental Reviews | Sky Vision</title>
        <meta name="description" content="Read reviews from 1000+ satisfied clients. 4.9/5 rating for AV equipment rental services in Mumbai. Corporate events, weddings, concerts & more." />
        <meta name="keywords" content="AV rental reviews Mumbai, client testimonials, event equipment reviews, projector rental reviews, LED wall rental feedback" />
        <link rel="canonical" href="https://skyav.in/#testimonials" />
        <script type="application/ld+json">
          {JSON.stringify(testimonialsStructuredData)}
        </script>
      </Helmet>
      
      <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
             <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
             Testimonials
            </span>
          </div>
          {/* <p className="text-base font-medium text-primary mb-2">Testimonials</p> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients across Mumbai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Event Type Badge */}
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                {testimonial.event}
              </span>

              {/* Author Info */}
              <div className="border-t border-border pt-6">
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 glass-card rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">5000+</div>
              <p className="text-sm text-muted-foreground">Events Covered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
