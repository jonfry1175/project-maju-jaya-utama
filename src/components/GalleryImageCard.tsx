import { Card, CardContent } from "@/components/ui/card";

type GalleryImageCardProps = {
  src: string;
  alt: string;
  caption?: string;
};

const GalleryImageCard = ({ src, alt, caption }: GalleryImageCardProps) => {
  return (
    <Card className="overflow-hidden border-card-border card-hover h-full">
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      {caption ? (
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">{caption}</p>
        </CardContent>
      ) : null}
    </Card>
  );
};

export default GalleryImageCard;
