import { useEffect, useState } from "react";

interface CompanyCarouselProps {
  companyName: string;
  images: string[];
  intervalMs?: number;
}

export default function CompanyCarousel({
  companyName,
  images,
  intervalMs = 4000,
}: CompanyCarouselProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (images.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveImage(current => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div
      className="company-carousel"
      aria-label={`Trabalhos realizados pela ${companyName}`}
    >
      {images.map((image, index) => (
        <img
          className={index === activeImage ? "is-active" : ""}
          src={`${import.meta.env.BASE_URL}${image}`}
          alt={`Trabalho realizado pela ${companyName}, foto ${index + 1}`}
          aria-hidden={index !== activeImage}
          loading="lazy"
          decoding="async"
          key={image}
        />
      ))}
      <div className="company-carousel-progress" aria-hidden="true">
        {images.map((image, index) => (
          <span
            className={index === activeImage ? "is-active" : ""}
            key={image}
          />
        ))}
      </div>
    </div>
  );
}
