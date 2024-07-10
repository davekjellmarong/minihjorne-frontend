import React, { useEffect, useState } from "react";

interface ProgressBarProps {
  percentage: number;
}
const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(Math.floor(percentage));
  }, [percentage]);

  return (
    <div className="h-6 w-full rounded-full bg-gray-200">
      <div
        className="h-6 rounded-full bg-brand-500 text-center text-white transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
