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
  const hasControls = images.length > 1;

  const showPreviousImage = () => {
    setActiveImage(current => (current - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setActiveImage(current => (current + 1) % images.length);
  };

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
      {hasControls && (
        <>
          <button
            className="company-carousel-arrow company-carousel-arrow--prev"
            type="button"
            aria-label={`Ver foto anterior da ${companyName}`}
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              showPreviousImage();
            }}
          >
            ‹
          </button>
          <button
            className="company-carousel-arrow company-carousel-arrow--next"
            type="button"
            aria-label={`Ver próxima foto da ${companyName}`}
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              showNextImage();
            }}
          >
            ›
          </button>
        </>
      )}
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