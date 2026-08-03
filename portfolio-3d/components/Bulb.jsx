import Image from "next/image";

const Bulb = () => {
  return (
    <div className="pointer-events-none absolute bottom-4 left-4 z-10 hidden w-[160px] select-none rotate-12 animate-pulse mix-blend-color-dodge duration-75 sm:block xl:bottom-6 xl:left-6 xl:w-[220px]">
      <Image
        src="/images/decorations/bulb.png"
        alt="bulb"
        width={260}
        height={200}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
      />
    </div>
  );
};

export default Bulb;
