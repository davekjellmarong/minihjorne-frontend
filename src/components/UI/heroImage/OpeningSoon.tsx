// "use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OpeningSoon = () => {
  // const calculateTimeLeft = () => {
  //   const targetDate = new Date("2024-08-17T12:00:00");
  //   const now = new Date();
  //   const difference = targetDate.getTime() - now.getTime();

  //   let timeLeft = {
  //     days: 0,
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //   };

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  return (
    <div className="relative h-[500px] w-full">
      <Image
        height={500}
        width={500}
        src="https://res.cloudinary.com/dylzaicv5/image/upload/v1723850366/StaticAssets/hero-klesbunke_hhrmn6.jpg"
        alt="home-hero"
        priority
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-8 backdrop-brightness-[0.6]">
        <h1 className="text-center text-4xl font-bold text-white">
          {/* Nettbutikken åpner <br />I DAG! */}
          Nettbutikken er åpen! 🎉
        </h1>
        {/* <div className="w-full bg-white py-2 opacity-70"> */}
        {/* {isClient && (
          <p
            className="text-center text-2xl font-bold text-white opacity-100 "
            suppressHydrationWarning
          >
            {`${timeLeft.days}d ${timeLeft.hours}t ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </p>
        )} */}
        {/* </div> */}
        <div className="flex gap-8">
          {/* <Button type="outline" className="rounded border-2">
            Registrer deg nå!
          </Button> */}
          <Link href="/produkter?pagination[page]=1">
            <button className="rounded-lg border-gray-50 bg-white px-8 py-4 text-lg shadow-xl active:bg-gray-200">
              Se produkter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpeningSoon;
