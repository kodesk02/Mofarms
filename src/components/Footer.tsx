import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    // <div className="bg-gray-200">
      <div className="md:flex p-10 md:space-y-0 space-y-8 inline">
        <div className="md:w-1/2 flex md:items-start flex-col items-center md:justify-start justify-center font-light ">
          <div className="shrink-0">
            <Image
              src={"/images/md farms.png"}
              alt={""}
              width={50}
              height={50}
            />
          </div>
          <span className="text-[10px] mt-2">Copyright © 2025 All rights reserved</span>
        </div>
        <div className="md:w-1/2 flex md:items-end flex-col items-center md:justify-end justify-center font-light ">
          <div className="flex text-[16px] space-x-4 md:space-x-6">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
          </div>
          <Link
            href={"mailto:Mofarms.ng@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] mt-2"
          >
            Mofarms.ng@gmail.com
          </Link>
        </div>
      </div>
    // </div>
  );
}
