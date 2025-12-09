import { SERVICE } from "../data";
import HoverIcon from "@/components/HoverIcon";

export default function Service() {
  return (
    <div className="flex justify-center overflow-auto gap-6 p-4">
      {SERVICE.map((service, index) => (
        <HoverIcon key={index} icon={service.icon} title={service.title} />
      ))}
    </div>
  );
}
