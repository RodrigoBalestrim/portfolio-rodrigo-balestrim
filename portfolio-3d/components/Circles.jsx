import Image from "next/image";

const Circles = () => {
  return (
    <div className="pointer-events-none absolute -bottom-2 -right-16 z-10 hidden w-[200px] select-none animate-pulse mix-blend-color-dodge duration-75 sm:block xl:w-[300px]">
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
