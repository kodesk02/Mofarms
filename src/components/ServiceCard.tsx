import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
}

export default function ServiceCard({ title, image }: ServiceCardProps) {
  return (
    <div className="cursor-pointer">
      <div className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transform scale-100 hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No Image
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg text-center font-thin">{title}</h3>
      </div>
    </div>
  );
}