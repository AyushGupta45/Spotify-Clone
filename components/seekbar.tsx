"use client";

import React, { useState, useEffect } from "react";
import * as RadixSlider from "@radix-ui/react-slider";

interface SeekbarProps {
  value?: number;
  onChange?: (value: number) => void;
  duration?: number;
  isPlaying?: boolean;
}

const Seekbar: React.FC<SeekbarProps> = ({ value = 0, onChange, duration, isPlaying }) => {
  const [filling, setFilling] = useState(false);
  const [sliderValue, setSliderValue] = useState([value]);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        // Update startTime every second
        setStartTime((prevStartTime) => {
          const newStartTime = prevStartTime + 1;
          return newStartTime;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlaying]);

  // Update sliderValue if value prop changes
  useEffect(() => {
    setSliderValue([value]);
  }, [value]);

  const formatTime = (seconds: number): string => {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const formattedDuration = formatTime(duration || 0);
  const formattedStartTime = formatTime(startTime);

  const handleSliderChange = (newValues: number[]) => {
    const newValue = newValues[0];
    setSliderValue([newValue]);

    const newStartTime = Math.floor((newValue / 100) * (duration || 0));
    setStartTime(newStartTime);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="relative flex items-center w-full h-5 mb-2 mt-0.5">
      <p className="text-neutral-400 text-sm font-medium text-end w-[60px]">
        {formattedStartTime}
      </p>
      <RadixSlider.Root
        className="relative flex items-center touch-none w-full h-10 mx-2"
        value={sliderValue}
        onValueChange={handleSliderChange}
        max={100}
        step={1}
        aria-label="Seekbar"
      >
        <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
          <RadixSlider.Range className="absolute bg-white h-full rounded-full" />
        </RadixSlider.Track>
      </RadixSlider.Root>
      <p className="text-neutral-400 text-sm font-medium text-start w-[60px]">
        {formattedDuration}
      </p>
    </div>
  );
};

export default Seekbar;
