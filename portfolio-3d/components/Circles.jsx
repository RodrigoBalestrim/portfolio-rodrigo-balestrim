import Image from "next/image";

const Circles = () => {
  return (
    <div className="pointer-events-none absolute bottom-4 right-20 z-10 hidden w-[180px] select-none animate-pulse mix-blend-color-dodge duration-75 sm:block xl:bottom-6 xl:right-28 xl:w-[240px]">
      <Image
        src="/images/decorations/circles.png"
        alt="circles"
        width={260}
        height={200}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
      />
    </div>
  );
};

export default Circles;
