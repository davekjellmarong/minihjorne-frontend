import Form from "@/components/features/minSide/betaling/Form";
import { UserMethods } from "@/queryFactory/User";
import { cookies } from "next/headers";

const BetalingPage = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMe(token);
  const bankAccountNumber = await UserMethods.getBankAccountNumber(token);

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="container mx-auto rounded-lg bg-white px-4 py-8 md:px-6">
        <div className="flex flex-col items-start gap-6">
          <div className="flex w-full flex-col items-center justify-between sm:flex-row">
            <h1 className="text-2xl font-bold">Konto for utbetaling</h1>
          </div>
          <div className="w-full rounded-lg p-6">
            <Form user={user} initialBankAccountNumber={bankAccountNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetalingPage;
