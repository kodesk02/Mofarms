import Link from "next/link";

export default function NewsLetter() {
  return (
    <div className="md:flex inline">
      <div className="md:w-1/2 flex md:items-start items-center md:justify-start justify-center font-light ">More Inquiries</div>

      <div className="md:w-1/2 md:items-start items-center md:justify-start justify-center flex flex-col">
        <span className="md:text-start text-center">Experience the magic of pets with Mofarms</span>
        <span>Email us for more information</span>

        <div className="flex items-start mt-6 ">
          <Link href={"mailto:Mofarms.ng@gmail.com"}>
            <button className="border p-2 border-r-2 border-b-2 hover:text-background hover:bg-gray-600 rounded-xl">
              Send us a mail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
