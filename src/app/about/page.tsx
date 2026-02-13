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
            Mofarms.nig is a premier brand in Nigeria, specializing in the
            breeding, sale, and supply of high-quality exotic animals such as
            parrots,peacocks,guinea pigs & fowl, ostrich,rabbits,geese, and
            other rare species. The brand is committed to meeting the rising
            demand for exotic pets by offering ethically sourced, healthy, and
            well-maintained animals. Mofarms.nig aims to deliver exceptional
            livestock to both local and international clients while upholding
            values of sustainability, animal welfare, and customer
            satisfaction.
          </div>
        </div>
      </div>
    </div>
  );
}
