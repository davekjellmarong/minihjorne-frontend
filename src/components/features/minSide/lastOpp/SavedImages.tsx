import Button from "@/components/common/buttons/Button";
import { useStore } from "@/stateManagment/ZustandStore";
import { ImageBackend } from "@/utils/types";
import Image from "next/image";
import React from "react";

interface SavedImagesProps {
  images: ImageBackend[] | undefined;
  setImages: any;
  setModal: any;
}
const SavedImages = ({ images, setImages, setModal }: SavedImagesProps) => {
  const hideNav = useStore((state) => state.hideNav);
  if (!images) return null;

  const unusedImages = images.filter((image) => !image.caption);
  if (unusedImages.length == 0) return null;
  return (
    <div className="bg-brand-100 p-4">
      <div className="flex justify-center gap-2 pb-4">
        <Button
          size="small"
          onClick={() => {
            setImages(unusedImages);
            setModal(true);
            hideNav();
          }}
        >
          Fortsett med {unusedImages.length} lagrede bilder
        </Button>
      </div>
      <ul className="flex max-h-[250px] flex-wrap justify-center gap-8 overflow-scroll">
        {unusedImages.map((image) => (
          <li key={image.id}>
            <Image
              src={image.formats.thumbnail.url}
              alt={image.name}
              className="size-20 rounded-md object-cover"
              width={80}
              height={80}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedImages;
