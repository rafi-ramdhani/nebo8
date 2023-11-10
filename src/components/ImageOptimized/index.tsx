import { IMAGE_SIZES } from "@/constants/sizes";
import Image from "next/image";
import { CSSProperties } from "react";

type ImageOptimizedProps = {
  src: string;
  alt: string;
  priority?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
};

const ImageOptimized = ({
  src,
  alt,
  style,
  priority,
  className,
  onClick,
}: ImageOptimizedProps) => {
  return (
    <Image
      fill
      src={src}
      alt={alt}
      quality={50}
      style={style}
      sizes={IMAGE_SIZES}
      priority={priority}
      className={className}
      onClick={onClick}
    />
  );
};

export default ImageOptimized;
