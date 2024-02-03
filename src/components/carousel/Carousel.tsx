// import React, { forwardRef } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// interface CarouselComponentProps {
//   children: React.ReactNode;
//   showDots?: boolean;
// }

// const CarouselComponent = forwardRef<any>(function CarouselComponent(
//   { children, showDots = true, ...rest }: any,
//   ref
// ) {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   return (
//     <Carousel ref={ref} responsive={responsive} {...rest}>
//       {children}
//     </Carousel>
//   );
// });
// const CarouselComponent = forwardRef<HTMLDivElement, CarouselComponentProps>(
//   ({ children, showDots = true }, ref) => {
//     const responsive = {
//       superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 5,
//       },
//       desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3,
//       },
//       tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 1,
//       },
//       mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//       },
//     };
//     return (
//       <Carousel ref={ref} showDots={showDots} responsive={responsive}>
//         {children}
//       </Carousel>
//     );
//   }
// );
// CarouselComponent.displayName = "CarouselComponent";

// export default CarouselComponent;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButtonGroup from "../form/product/CustomButtonGroup";

interface CarouselComponentProps {
  children: React.ReactNode;
  showDots?: boolean; // add optional properties if needed
  responsive?: Record<string, any>; // add optional properties if needed
}

const CarouselComponent = ({ children }: any) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel showDots responsive={responsive}>
      {children}
    </Carousel>
  );
};
export default CarouselComponent;

// const CarouselComponent = React.forwardRef<
//   HTMLDivElement,
//   CarouselComponentProps
// >(({ children, showDots = true, responsive }, ref) => {
//   return (
//     <Carousel ref={ref} showDots={showDots} responsive={responsive}>
//       {children}
//     </Carousel>
//   );
// });
