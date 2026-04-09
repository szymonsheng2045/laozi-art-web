"use client";

import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export function LazyImage({ src, alt, className = "", placeholder }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* 占位符或加载动画 */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[var(--color-bg-soft)] animate-pulse flex items-center justify-center">
          {placeholder ? (
            <span className="text-xs opacity-30">{placeholder}</span>
          ) : (
            <div className="w-8 h-8 border-2 border-[var(--color-border)] border-t-[var(--color-accent)] rounded-full animate-spin" />
          )}
        </div>
      )}

      {/* 实际图片 */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}

// 响应式图片 - 根据屏幕加载不同尺寸
interface ResponsiveImageProps {
  srcSet: {
    small: string;
    medium: string;
    large: string;
  };
  alt: string;
  className?: string;
}

export function ResponsiveImage({ srcSet, alt, className = "" }: ResponsiveImageProps) {
  const [currentSrc, setCurrentSrc] = useState(srcSet.small);

  useEffect(() => {
    const updateSrc = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCurrentSrc(srcSet.large);
      } else if (width >= 768) {
        setCurrentSrc(srcSet.medium);
      } else {
        setCurrentSrc(srcSet.small);
      }
    };

    updateSrc();
    window.addEventListener("resize", updateSrc);
    return () => window.removeEventListener("resize", updateSrc);
  }, [srcSet]);

  return (
    <LazyImage
      src={currentSrc}
      alt={alt}
      className={className}
    />
  );
}

// 图片画廊（带灯箱）
export function ImageGallery({ images }: { images: { src: string; alt: string; caption?: string }[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
          >
            <LazyImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* 灯箱 */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl"
            onClick={closeLightbox}
          >
            ✕
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ←
          </button>

          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-[90vw] max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            →
          </button>

          {images[currentIndex].caption && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {images[currentIndex].caption}
            </p>
          )}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
