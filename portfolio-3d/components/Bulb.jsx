import Image from "next/image";

const Bulb = () => {
  return (
    <div className="pointer-events-none absolute -bottom-12 -left-36 z-10 hidden w-[200px] select-none rotate-12 animate-pulse mix-blend-color-dodge duration-75 sm:block xl:w-[260px]">
      <Image
        src="/images/decorations/bulb.png"
        alt="bulb"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
