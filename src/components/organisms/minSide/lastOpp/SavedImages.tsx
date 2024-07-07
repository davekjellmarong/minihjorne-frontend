import Button from "@/components/atoms/Button";
import { ImageBackend } from "@/utils/types";
import React from "react";

interface SavedImagesProps {
  images: ImageBackend[];
  setImages: any;
  setModal: any;
}
const SavedImages = ({ images, setImages, setModal }: SavedImagesProps) => {
  if (!images) return null;
  const unusedImages = images.filter((image) => !image.caption);
  if (unusedImages.length == 0) return null;
  return (
    <div className="bg-brand-100 p-4">
      <div className="flex justify-center gap-2 pb-4">
        <Button
          onClick={() => {
            setImages(unusedImages);
            setModal(true);
          }}
        >
          Fortsett med {unusedImages.length} lagrede bilder
        </Button>
      </div>
      <ul className="flex max-h-[400px] flex-wrap justify-center gap-8 overflow-scroll">
        {unusedImages.map((image) => (
          <li key={image.id}>
            <img
              src={image.formats.thumbnail.url}
              alt={image.name}
              className="size-20 rounded-md object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedImages;