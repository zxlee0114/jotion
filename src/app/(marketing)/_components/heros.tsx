import Image from "next/image";

const Heros = () => {
  return (
    <section className="flex-center flex-col max-w-5xl">
      <div className="flex items-center">
        <div className="relative size-75 sm:size-87.5 md:size-100">
          <Image
            src="/heros/documents.png"
            className="object-contain dark:hidden"
            alt="Documents"
            fill
          />
          <Image
            src="/heros/documents-dark.png"
            className="object-contain hidden dark:block"
            alt="Documents"
            fill
          />
        </div>
        <div className="relative size-100 hidden md:block">
          <Image
            src="/heros/reading.png"
            className="object-contain dark:hidden"
            alt="Reading"
            fill
          />
          <Image
            src="/heros/reading-dark.png"
            className="object-contain hidden dark:block"
            alt="Reading"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Heros;
