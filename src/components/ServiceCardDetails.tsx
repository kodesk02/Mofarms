import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ServiceDetailViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  card: any;
  onBack: () => void;
}

export default function ServiceDetailView({ card, onBack }: ServiceDetailViewProps) {
  const galleryImages = card?.gallery || [];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = galleryImages.map((src: string) => ({ src }));

  return (
    <div className="py-2 px-4 md:px-10 min-h-screen">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-light text-center mb-8">
        {card?.title}
      </h1>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 auto-rows-fr">
        {galleryImages.map((image: string, i: number) => (
          <div
            key={i}
            onClick={() => { setIndex(i); setOpen(true); }}
            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src={image}
              alt={`${card?.title} - Image ${i + 1}`}
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
}