import { CheckCircle, XCircle } from "@phosphor-icons/react";
import React from "react";

export const planCards = [
  {
    title: "1 måned",
    id: 1,
    price: "99,-",
    duration: 1,
    description: "Kort pakke",
    customClass: "",
    customButtonClass: "",
    bulletPoints: [
      { title: "1 mnd leie", access: true },
      { title: "50 produkter", access: true },
      { title: "Betaling hver 14 dag", access: true },
      { title: "Salgs oversikt online", access: true },
      { title: "Personlig salgsprofil", access: true },
    ],
  },
  {
    title: "3 måneder",
    price: "249,-",
    id: 2,
    duration: 3,
    description: "Mest populær",
    customClass: "border shadow-lg shadow-purple p-6 border-purple-200",
    customButtonClass: "bg-purple-500 text-white sm:hover:bg-purple-800",
    bulletPoints: [
      { title: "3 mnd leie", access: true },
      { title: "Ubegrenset produkter", access: true },
      { title: "Betaling hver 14 dag", access: true },
      { title: "Salgs oversikt online", access: true },
      { title: "Personlig salgsprofil", access: true },
    ],
  },
  {
    title: "6 måneder",
    price: "449,-",
    id: 3,
    duration: 6,
    description: "Best verdi",
    customClass: "",
    customButtonClass: "",
    bulletPoints: [
      { title: "6 mnd leie", access: true },
      { title: "Ubegrenset produkter", access: true },
      { title: "Betaling hver 14 dag", access: true },
      { title: "Salgs oversikt online", access: true },
      { title: "Personlig salgsprofil", access: true },
    ],
  },
];

const Cards = ({ setPlanId }: any) => {
  return (
    <div className="flex w-full flex-col items-center gap-8 px-10 ">
      {planCards.map((plan) => {
        return (
          <div
            key={plan.title}
            className={`w-[325px] rounded-lg border p-6 shadow-sm ${plan.customClass}`}
          >
            <p className="font-semibold">{plan.title}</p>
            <p className="mb-4 text-sm font-light">{plan.description}</p>
            <p className="text-2xl font-bold">{plan.price}</p>
            <button
              className={`mt-4 w-full rounded-md bg-brand-400 px-4 py-2 transition duration-200 ease-in-out ${plan.customButtonClass}`}
              onClick={() => {
                setPlanId(plan.id);
              }}
            >
              Kjøp
            </button>
            <ul className="mt-4 flex list-inside list-none flex-col gap-2">
              {plan.bulletPoints.map((bulletPoint) => {
                return (
                  <li
                    key={bulletPoint.title}
                    className={`flex items-center gap-3 ${
                      bulletPoint.access ? "text-black" : "text-gray-400"
                    }`}
                  >
                    <span>
                      {bulletPoint.access ? (
                        <CheckCircle color="green" />
                      ) : (
                        <XCircle />
                      )}{" "}
                    </span>
                    <span>{bulletPoint.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
