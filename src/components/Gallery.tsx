"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const goToPrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <div className="w-full" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-muted bg-muted/20"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-100 md:opacity-0 transition-opacity md:group-hover:opacity-100">
              <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
              <p className="text-sm text-white/80">{image.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video max-h-[80vh] w-full">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-white">
              <h2 className="text-2xl font-bold">{images[selectedImage].title}</h2>
              <p className="text-sm text-white/70 mt-1">{images[selectedImage].date}</p>
              <p className="mt-4">{images[selectedImage].description}</p>
            </div>
          </div>

          <button
            className="absolute right-4 text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
