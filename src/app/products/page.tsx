"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HoverIcon from "@/components/HoverIcon";
import ServiceCard from "@/components/ServiceCard";
import { SERVICE, SERVICE_CARDS } from "../data";
import ServiceDetailView from "@/components/ServiceCardDetails";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get('service');
  
  const [activeService, setActiveService] = useState(
    serviceFromUrl || SERVICE[0].id
  );
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    if (serviceFromUrl) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveService(serviceFromUrl);
    }
  }, [serviceFromUrl]);

  const cards = SERVICE_CARDS[activeService as keyof typeof SERVICE_CARDS] || [];

  if (selectedCard) {
    const card = cards.find(c => c.title === selectedCard);
    return (
      <ServiceDetailView
        card={card}
        onBack={() => setSelectedCard(null)}
      />
    );
  }

  return (
    <div className="py-2 px-4 md:px-10">
      <div className="flex justify-center overflow-auto gap-6 mb-10">
        {SERVICE.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveService(service.id)}
          >
            <HoverIcon
              icon={service.icon}
              title={service.title}
              isActive={activeService === service.id}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} onClick={() => setSelectedCard(card.title)}>
            <ServiceCard
              title={card.title}
              image={card.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}