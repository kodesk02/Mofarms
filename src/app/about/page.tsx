import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-200 ">
      <div className="md:flex inline p-10">
        <div className="md:w-1/2 flex md:items-center items-center md:justify-center justify-center font-light ">
          <Image src={"/images/about3.png"} width={300} height={100} alt={""} />
        </div>

        <div className="md:w-1/2 md:items-center md:pt-0 pt-10 items-center md:justify-center justify-center flex flex-col">
          <span className="text-2xl font-light font-stretch-125%">
            About Us
          </span>

          <div className="text-center mb-2 text-sm px-10 leading-7">
            Mo Farms was established to meet the growing need for quality animal
            care and supply in Nigeria. With years of experience, we have grown
            into a trusted source for all kinds of animals, specializing in
            ornamental birds and providing exceptional service across the
            country.
          </div>
        </div>
      </div>
    </div>
  );
}
