import React from "react";
import ActiveCardListItem from "./ActiveCardListItem";
import AvatarLetter from "@/components/avatar/AvatarLetter";
import { planCards } from "./Cards";
interface ActiveCardProps {
  planId: number;
  username: string | undefined;
}

const ActiveCard = ({
  username,
  planId,
}: {
  username: string;
  planId: number;
}) => {
  const activeCard = planCards?.find((card) => card.id === planId);
  const bulletPoints = planCards?.find(
    (card) => card.id === planId
  )?.bulletPoints;

  return (
    <>
      <div className="flex flex-col items-center justify-center relative pt-16 pb-8 px-8 mx-8 rounded-xl border bg-blue-100 border-blue-200">
        <div className="absolute top-0 left-0 h-[314px] w-full opacity-75 -z-1 bg-[url(/illustrations/grid--light.svg)] dark:bg-[url(/illustrations/grid--dark.svg)] "></div>
        <div className="flex flex-col space-y-8 items-center justify-center w-full">
          <div className="flex flex-col space-y-6 items-center justify-center">
            <div className="flex flex-col max-w-max rounded-full border-4 border-blue-400">
              <AvatarLetter username={username} />
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <p className="text-h1 font-semibold text-center text-blue-500">
                Du har {activeCard?.title} abonnement
              </p>
              <p className="text-base text-gray-600 text-center max-w-lg">
                Takk for at du bruker MiniHjørne. Som en del av denne pakken,
                har du:
                {activeCard?.description}
              </p>
            </div>
          </div>
          {bulletPoints?.map((bulletPoint) => {
            return (
              <ActiveCardListItem
                key={bulletPoint.title}
                text={bulletPoint.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ActiveCard;
