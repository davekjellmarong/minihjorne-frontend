import React from "react";
import Image from "next/image";
import CarouselComponent from "../../Carousel";
const IntroCarousel = () => {
  const instruction1 = {
    title: "Steg 1",
    text: "Gå ut av nettsiden, legg klærne på en flat overflate og ta bilder av dem",
  };

  const instruction2 = {
    title: "Steg 2",
    text: "Når du har tatt bildene, gå tilbake til nettsiden og trykk på knappen under",
  };

  return (
    <CarouselComponent>
      <div
        key={instruction1.title}
        className="mx-2 flex h-[500px] flex-col items-center justify-center gap-6 text-center"
      >
        <p className="text-sm font-light text-purple-700">
          {instruction1.title}
        </p>
        <p className=" mx-4">{instruction1.text}</p>
        <div className="flex max-h-[350px] w-full gap-8">
          <Image
            src="/camera-screenshot.png"
            height={100}
            width={100}
            alt=""
            className="w-1/2"
            // placeholder="blur"
          />
          <Image
            src="/gallery-clothes.png"
            height={100}
            width={100}
            alt=""
            className="w-1/2"
            // placeholder="blur"
          />
        </div>
      </div>

      <div
        key={instruction2.title}
        className="mx-2 flex h-[500px] flex-col items-center justify-center gap-6 text-center"
      >
        <p className="text-sm font-light text-purple-700">
          {instruction2.title}
        </p>
        <p className=" mx-4">{instruction2.text}</p>
        <div className="flex max-h-[350px] w-full gap-8">
          <Image
            src="/knapp-bilder.png"
            height={100}
            width={100}
            alt=""
            className="w-1/2"
            // placeholder="blur"
          />
          <Image
            src="/velg-bilder.png"
            height={100}
            width={100}
            alt=""
            className="w-1/2"
            // placeholder="blur"
          />
        </div>
      </div>
    </CarouselComponent>
  );
};

export default IntroCarousel;

//       {instructions.map((instruction) => {
//         return (
//           <div
//             key={instruction.title}
//             className="flex flex-col gap-6 text-center justify-center items-center mx-2 h-[500px]"
//           >
//             <p className="font-light text-sm text-purple-700">
//               {instruction.title}
//             </p>
//             <p className=" mx-4">{instruction.text}</p>
//             <div className="flex gap-8 w-full max-h-[350px]">
//               <Image
//                 src={instruction.img1}
//   height={100}
//   width={100}
//                 alt=""
//                 className="w-1/2"
// placeholder = "blur";
//               />
//               <Image
//                 src={instruction.img2}
//   height={100}
//   width={100}
//                 alt=""
//                 className="w-1/2"
// placeholder = "blur";xs
//               />
//             </div>
//           </div>
//         );
//       })}
//     </CarouselComponent>
//   );
// };

// export default IntroCarousel;
