import Image from "next/image";

const NeboLogo = () => {
  return (
    <Image
      priority
      width={182}
      height={67}
      src="/nebo-logo.svg"
      alt="Nebo8 Logo"
    />
  );
};

export default NeboLogo;
