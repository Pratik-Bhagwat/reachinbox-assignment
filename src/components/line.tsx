import expand from "@/assets/expand.png";
import { cn } from "@/lib/utils";

interface LineProps {
  text: string;
  onClick?: () => void;
  isViewMore?: boolean;
}

const Line = ({ text, onClick, isViewMore = false }: LineProps) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="absolute -z-10 h-[.2px] w-full dark:bg-[#F8FAFC33]" />
      <div
        onClick={onClick}
        className={cn(
          "flex h-6 items-center justify-center space-x-2 rounded-sm p-1 px-2 font-semibold dark:bg-[#171819] dark:text-[#FFFFFF] md:text-[10px] lg:text-xs",
          isViewMore && "cursor-pointer",
        )}
      >
        {isViewMore && <img src={expand} alt="expand icon" />}
        {text}
      </div>
    </div>
  );
};

export default Line;
