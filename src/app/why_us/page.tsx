import { Icon } from "@iconify/react";
import React from "react";

export default function WhyUs() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col justify-center items-center">
          <Icon
            icon="duo-icons:approved"
            width="100"
            height="100"
            className="cursor-pointer text-gray-500"
          />
          <span className="text-[14px] text-center">
            Proper Licensing & Certifications
          </span>
        </div>
          <div className="flex flex-col justify-center items-center">
          <Icon
            icon="material-symbols:health-and-safety"
            width="100"
            height="100"
            className="cursor-pointer text-gray-400"
          />
          <span className="text-[18px] text-center">
            Healthy Animal Standards
          </span>
        </div>
          <div className="flex flex-col justify-center items-center">
          <Icon
            icon="hugeicons:customer-service"
            width="100"
            height="100"
            className="cursor-pointer text-gray-400"
          />
          <span className="text-[14px] text-center">
            Good Customer Service
          </span>
        </div>
      </div>
    </div>
  );
}
