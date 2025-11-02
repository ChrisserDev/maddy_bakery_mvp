import Image from "next/image";
import "./gallery.scss";

type GalleryItem =
  | {
      type: "image";
      src: string;
      alt: string;
      label: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      alt: string;
      label: string;
    };

const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: "/images/goodies_basket.png",
    alt: "Freshly prepared pastry basket",
    label: "Morning pastry spread",
  },
  {
    type: "image",
    src: "/images/bread.png",
    alt: "Loaves of bread cooling on a rack",
    label: "Artisan loaves",
  },
  {
    type: "video",
    src: "/videos/bakers_at_work.mp4",
    poster: "/images/pastries.png",
    alt: "Bakers decorating cakes in the kitchen",
    label: "In the kitchen",
  },
  {
    type: "image",
    src: "/images/cakes.png",
    alt: "Decorated cakes in the bakery display",
    label: "Signature cakes",
  },
  {
    type: "image",
    src: "/images/cookies.png",
    alt: "Fresh cookies cooling",
    label: "Cookie break",
  },
  {
    type: "image",
    src: "/images/amandina.png",
    alt: "Chocolate cake being finished",
    label: "Finishing touches",
  },
];

export default function BakeryGallery() {
  return (
    <section className="bakery-gallery container" aria-labelledby="bakery-gallery-title">
      <div className="gallery-header">
        <span className="gallery-eyebrow">Behind the Scenes</span>
        <h3 id="bakery-gallery-title" className="gallery-title">A glimpse into our kitchen magic.</h3>
        <p className="gallery-text">From sunrise proofs to late-night frosting dreams, here&apos;s a peek at the moments that fill Maddy&apos;s Bakery with aroma, laughter, and joy.</p>
      </div>
      <div className="gallery-grid" role="list">
        {galleryItems.map((item) => (
          <figure key={item.src} className="gallery-card" role="listitem">
            <div className="gallery-image-wrap">
              {item.type === "image" ? (
                <Image src={item.src} alt={item.alt} width={320} height={400} className="gallery-image" />
              ) : (
                <video
                  className="gallery-video"
                  controls
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  poster={item.poster}
                  aria-label={item.alt}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <figcaption className="gallery-caption">{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
