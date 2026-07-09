import { GiLaurelCrown, GiDove } from "react-icons/gi";

export type Position = "top-left" | "top-right" | "bottom-right" | "bottom-left";

interface WreathCornerProps {
  position: Position;
  className?: string;
}

export function WreathCorner({ position, className = "" }: WreathCornerProps) {
  const crownStyles = {
    "top-left": "-left-[128px] -top-[128px] rotate-0",
    "top-right": "-right-[128px] -top-[128px] rotate-90",
    "bottom-right": "-right-[128px] -bottom-[128px] rotate-180",
    "bottom-left": "-left-[128px] -bottom-[128px] -rotate-90",
  }[position];

  const doveStyles = {
    "top-left": "left-6 top-6",
    "top-right": "right-6 top-6 -scale-x-100",
    "bottom-right": "right-6 bottom-6 -scale-x-100",
    "bottom-left": "left-6 bottom-6",
  }[position];

  return (
    <div className={`absolute h-48 w-48 text-brass pointer-events-none overflow-hidden ${className}`}>
      <GiLaurelCrown className={`absolute h-[256px] w-[256px] opacity-25 transform ${crownStyles}`} />
      <GiDove className={`absolute h-10 w-10 opacity-70 drop-shadow-md transform ${doveStyles}`} />
    </div>
  );
}
