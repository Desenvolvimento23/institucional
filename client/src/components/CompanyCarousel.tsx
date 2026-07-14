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
  const activeImageSrc = images[activeImage];

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
      {activeImageSrc ? (
        <img
          className="is-active"
          src={`${import.meta.env.BASE_URL}${activeImageSrc}`}
          alt={`Trabalho realizado pela ${companyName}, foto ${activeImage + 1}`}
          loading="lazy"
          decoding="async"
          key={activeImageSrc}
        />
      ) : null}
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