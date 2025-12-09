import { SERVICE } from "../data";
import HoverIcon from "@/components/HoverIcon";
import Link from "next/link";

export default function Service() {
  return (
    <div className="flex justify-center overflow-auto gap-6 p-4">
      {SERVICE.map((service, index) => (
        <Link key={index} href={`/products?service=${service.id}`}>
          <HoverIcon 
            icon={service.icon} 
            title={service.title}
          />
        </Link>
      ))}
    </div>
  );
}