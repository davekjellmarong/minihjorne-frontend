import Button from "@/components/common/buttons/Button";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import Link from "next/link";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";

const Form = () => {
  const [checked, setChecked] = useState(false);
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col items-center gap-4">
      <LoadingOverlay loading={pending} />
      <div>
        <label className="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-brand-600 focus:ring-2 focus:ring-brand-500"
          />
          <Link href="/kjopebetingelser" className="ml-2">
            Godtar du våre{" "}
            <span className="text-blue-500">kjøpebetingelser?</span>
          </Link>
        </label>
      </div>
      <Button submit disabled={!checked}>
        Ja takk!
      </Button>
    </div>
  );
};

export default Form;
