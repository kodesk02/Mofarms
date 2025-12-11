import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface ServiceDetailViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  card: any;
  onBack: () => void;
}

export default function ServiceDetailView({ card, onBack }: ServiceDetailViewProps) {
  const galleryImages = card?.gallery || [];

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
        {galleryImages.map((image: string, index: number) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src={image}
              alt={`${card?.title} - Image ${index + 1}`}
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}