import Button from "@/components/common/buttons/Button";
import React from "react";
interface NextSlideButtonProps {
  onChangeFunc?: () => void;
}
const NextSlideButton = ({ onChangeFunc }: NextSlideButtonProps) => {
  return (
    <div className="flex justify-center">
      <Button size="small" type="flat" icon="arrowRight" onClick={onChangeFunc}>
        Videre
      </Button>
    </div>
  );
};

export default NextSlideButton;
