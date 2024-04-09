import expand from "@/assets/expand.png";
import expandLight from "@/assets/expand-light.png";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

interface LineProps {
  text: string;
  onClick?: () => void;
  isViewMore?: boolean;
}

const Line = ({ text, onClick, isViewMore = false }: LineProps) => {
  const { theme } = useTheme();

  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="absolute -z-10 h-[.2px] w-full bg-[#77777733] dark:bg-[#F8FAFC33]" />
      <div
        onClick={onClick}
        className={cn(
          "flex h-6 items-center justify-center space-x-2 rounded-sm bg-[#EEF1F4] p-1 px-2 font-semibold dark:bg-[#171819] dark:text-[#FFFFFF]",
          isViewMore && "cursor-pointer",
        )}
      >
        {isViewMore && (
          <img
            src={theme === "dark" ? expand : expandLight}
            alt="expand icon"
          />
        )}
        <span className="font-openSans font-semibold md:text-[10px]">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Line;
