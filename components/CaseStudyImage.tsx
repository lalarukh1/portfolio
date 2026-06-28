import Image from "next/image";

type CaseStudyImageProps = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export default function CaseStudyImage({
  src,
  alt,
  caption,
  width = 1400,
  height = 900,
}: CaseStudyImageProps) {
  return (
    <figure className="my-12">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full"
      />
      <figcaption className="mt-3 text-xs text-muted leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}
