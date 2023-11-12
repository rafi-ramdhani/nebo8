import { IMAGE_SIZES } from "@/constants/sizes";
import Image from "next/image";
import { CSSProperties } from "react";

type ImageOptimizedProps = {
  src: string;
  alt: string;
  style?: CSSProperties;
  quality?: number;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
};

const ImageOptimized = ({
  src,
  alt,
  style,
  quality = 100,
  priority,
  className,
  onClick,
}: ImageOptimizedProps) => {
  return (
    <Image
      fill
      src={src}
      alt={alt}
      style={style}
      quality={quality}
      sizes={IMAGE_SIZES}
      priority={priority}
      className={className}
      onClick={onClick}
    />
  );
};

export default ImageOptimized;
