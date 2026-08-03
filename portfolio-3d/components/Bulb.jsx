import Image from "next/image";

const Bulb = () => {
  return (
    <div className="pointer-events-none absolute bottom-4 left-4 z-0 hidden w-[150px] select-none rotate-12 opacity-20 mix-blend-color-dodge sm:block xl:bottom-6 xl:left-6 xl:w-[210px]">
      <Image
        src="/images/decorations/bulb.png"
        alt=""
        width={260}
        height={200}
        className="h-auto w-full"
        aria-hidden="true"
      />
    </div>
  );
};

export default Bulb;
