import { Icon } from "@iconify/react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="py-2 px-10">
      <div className="w-full h-[60vh] md:h-[80vh] relative">
        <Image
          src="/images/bg2.jpg"
          alt="Background"
          fill
          className="rounded-3xl"
          style={{ objectFit: "cover" }}
          priority
        />

        <div className="absolute inset-0 rounded-3xl backdrop-blur-[2px] "></div>

        {/* Optional content on top */}
        <div className="absolute inset-0 p-10 flex flex-col space-y-4 items-center justify-center md:items-start md:justify-start text-white">
          <div className="space-y-4">
            <h1 className="md:text-6xl text-3xl tracking-wider">Welcome</h1>
            <h1 className="md:text-6xl pl-10 text-3xl tracking-wider">to</h1>
            <h1 className="md:text-6xl text-3xl tracking-wider">Mofarms</h1>
          </div>

          <span className="hidden md:inline md:text-md w-1/2 text-sm font-medium tracking-wider">
            Where enthusiasm meets your animal of choice.
          </span>

          <div className="mt-16 flex items-center">
            Our Products
            <Icon
              icon="material-symbols-light:arrow-right"
              width="25"
              height="25"
              className="cursor-pointer text-white hover:text-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
