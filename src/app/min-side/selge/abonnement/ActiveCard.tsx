import React from "react";
import ActiveCardListItem from "./ActiveCardListItem";
import AvatarLetter from "@/components/avatar/AvatarLetter";
import { planCards } from "./Cards";
import { User, UserBackend } from "@/utils/types";
interface ActiveCardProps {
  planId: number;
  user: UserBackend;
}

const ActiveCard = ({ user, planId }: ActiveCardProps) => {
  const activeCard = planCards?.find((card) => card.id === planId);
  const bulletPoints = planCards?.find(
    (card) => card.id === planId,
  )?.bulletPoints;

  return (
    <>
      <div className="relative mx-8 flex flex-col items-center justify-center rounded-xl border border-blue-200 bg-blue-100 px-8 pb-8 pt-16">
        <div className="-z-1 absolute left-0 top-0 h-[314px] w-full bg-[url(/illustrations/grid--light.svg)] opacity-75 dark:bg-[url(/illustrations/grid--dark.svg)] "></div>
        <div className="flex w-full flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            {user.active ? (
              <p className="text-h1 text-center font-semibold text-blue-500">
                Ditt abbonement er aktivert frem til {user.activeUntill}
              </p>
            ) : (
              <p className="text-h1 text-center font-semibold text-blue-500">
                Ditt abbonement er ikke aktivert. Det vil bli aktivert når du
                leverer dine klær til oss.
              </p>
            )}
            <div className="flex max-w-max flex-col rounded-full border-4 border-blue-400">
              <AvatarLetter username={user.username} />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-h1 text-center font-semibold text-blue-500">
                Du har {activeCard?.title} abonnement
              </p>
              <p className="max-w-lg text-center text-base text-gray-600">
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
