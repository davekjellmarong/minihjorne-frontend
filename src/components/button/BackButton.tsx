"use client";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  path?: string;
}
const BackButton = ({ path }: BackButtonProps) => {
  const router = useRouter();

  return (
    <ArrowCircleLeft
      onClick={() => {
        if (path) {
          router.push(path);
        } else {
          router.back();
        }
      }}
      size={30}
    />
  );
};

export default BackButton;
