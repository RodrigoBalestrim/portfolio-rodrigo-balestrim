import Image from "next/image";

const Circles = () => {
  return (
    <div className="pointer-events-none absolute bottom-4 right-20 z-10 hidden w-[180px] select-none animate-pulse mix-blend-color-dodge duration-75 sm:block xl:bottom-6 xl:right-28 xl:w-[240px]">
      <Image
        src="/images/decorations/circles.png"
        alt="circles"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
