import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/images/profile/avatar-rodrigo.png"
        alt="Retrato de Rodrigo Balestrim"
        width={737}
        height={678}
        className="translate-z-0 h-full w-full scale-[.94] object-contain object-bottom"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 78%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, #000 0%, #000 78%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default Avatar;
