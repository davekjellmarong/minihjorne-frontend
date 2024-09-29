import Link from "next/link";
import React from "react";

interface TermsCheckedProps {
  setChecked: (checked: boolean) => void;
  checked: boolean;
}
const TermsChecked = ({ setChecked, checked }: TermsCheckedProps) => {
  return (
    <label className="flex items-center gap-2">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="size-7 rounded border-gray-300 bg-gray-100 text-brand-600 focus:ring-2 focus:ring-brand-500"
      />
      <Link href="/kjopebetingelser" className="ml-2">
        Godtar du våre <span className="text-blue-500">kjøpebetingelser?</span>
      </Link>
    </label>
  );
};

export default TermsChecked;
