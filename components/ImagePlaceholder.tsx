type ImagePlaceholderProps = {
  label: string;
  aspectRatio?: "wide" | "square" | "tall";
};

const aspectRatioClasses: Record<string, string> = {
  wide: "aspect-video",
  square: "aspect-square",
  tall: "aspect-[3/4]",
};

export default function ImagePlaceholder({
  label,
  aspectRatio = "wide",
}: ImagePlaceholderProps) {
  return (
    <figure className="my-12">
      <div
        className={`w-full bg-surface border border-border flex items-center justify-center ${aspectRatioClasses[aspectRatio]}`}
      >
        <p className="text-muted text-sm text-center px-6">{label}</p>
      </div>
    </figure>
  );
}
