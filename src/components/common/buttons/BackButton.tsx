"use client";
import { ArrowCircleLeft, ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  path?: string;
}
const BackButton = ({ path }: BackButtonProps) => {
  const router = useRouter();

  return (
    // <ArrowCircleLeft
    //   onClick={() => {
    //     if (path) {
    //       router.push(path);
    //     } else {
    //       router.back();
    //     }
    //   }}
    //   size={40}
    //   color="black"
    //   // className="rounded-full bg-gray-700 opacity-60"
    // />

    <div
      onClick={() => {
        if (path) {
          router.push(path);
        } else {
          router.back();
        }
      }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // gray background with 60% opacity
        borderRadius: "50%", // round the background container
        padding: "5px", // space around the icon
        display: "inline-block", // ensure the container size matches the content
      }}
    >
      <ArrowLeft size={24} color="white" />
    </div>
  );
};

export default BackButton;
