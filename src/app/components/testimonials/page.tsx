import Image from "next/image";
import "./testimonials.scss";

type Testimonial = {
  name: string;
  quote: string;
  title: string;
  initials: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Emma R.",
    title: "Southwark brunch regular",
    quote: "Best croissants in town — flaky, buttery perfection! Every bite reminds me why I keep coming back.",
    initials: "ER",
  },
  {
    name: "Daniel M.",
    title: "Local coffee roaster",
    quote: "The sourdough loaves have the perfect crackle. You can taste the patience and craft that goes into every bake.",
    initials: "DM",
  },
  {
    name: "Priya L.",
    title: "Birthday cake enthusiast",
    quote: "Custom cake orders are a dream here — beautiful designs, balanced sweetness, and always right on time.",
    initials: "PL",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section container" aria-labelledby="testimonials-title">
      <div className="testimonials-header">
        <span className="testimonials-eyebrow">Local Love</span>
        <h2 id="testimonials-title" className="testimonials-title">Trusted by neighbours, loved by foodies.</h2>
        <p className="testimonials-subtitle">A few words from the community that keeps Maddy&apos;s Bakery whisking, proofing, and smiling every single morning.</p>
      </div>

      <div className="testimonials-grid" role="list">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="testimonial-card" role="listitem">
            <div className="testimonial-profile">
              <div className="testimonial-avatar" aria-hidden="true">
                {testimonial.image ? (
                  <Image src={testimonial.image} alt="" width={60} height={60} className="testimonial-avatar-image" />
                ) : (
                  <span className="testimonial-initials">{testimonial.initials}</span>
                )}
              </div>
              <figcaption className="testimonial-meta">
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-title">{testimonial.title}</span>
              </figcaption>
            </div>
            <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
