import Link from "next/link";
import "./visitUs.scss";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "08:30 – 17:00" },
  { day: "Wednesday", time: "08:30 – 17:00" },
  { day: "Thursday", time: "08:30 – 17:00" },
  { day: "Friday", time: "08:30 – 17:00" },
  { day: "Saturday", time: "08:30 – 17:00" },
  { day: "Sunday", time: "10:00 – 15:00" },
];

export default function VisitUsSection() {
  return (
    <section id="visit-us" className="visit-us container" aria-labelledby="visit-us-title">
      <div className="visit-content">
        <span className="visit-eyebrow">Visit Us</span>
        <h2 id="visit-us-title" className="visit-title">Follow the smell of fresh bread - we&apos;re just around the corner!</h2>
        <p className="visit-text">Pop by our cozy bakery for a warm croissant, a chat with the team, or to pick up a custom celebration cake. We love meeting our customers and sharing the sweet moments in person.</p>

        <address className="visit-address">
          <strong className="address-line">Maddy&apos;s Bakery</strong>
          <span className="address-line">15 The Glebe</span>
          <span className="address-line">Stevenage SG2 0DL</span>
          <Link href="https://maps.google.com/?q=15+The+Glebe,+Stevenage+SG2+0DL" target="_blank" rel="noopener noreferrer" className="address-link">
            Open in Google Maps
          </Link>
        </address>

        <div className="visit-hours" aria-label="Opening hours">
          <h3 className="hours-title">Opening Hours</h3>
          <ul className="hours-list">
            {hours.map((hour) => (
              <li key={hour.day} className="hours-item">
                <span className="hours-day">{hour.day}</span>
                <span className="hours-time">{hour.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="visit-map" aria-hidden="true">
        <iframe
          title="Maddy's Bakery on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1008.1076699968803!2d-0.1889182324975341!3d51.88453662758892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763a26f18c7bbb%3A0x53f1da1c8b2953c8!2s15%20The%20Glebe%2C%20Stevenage%20SG2%200DL!5e0!3m2!1sen!2suk!4v1700000000001!5m2!1sen!2suk"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
