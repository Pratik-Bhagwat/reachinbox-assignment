import { useTheme } from "../theme-provider";
import ThemeSwitcher from "../theme-switcher";
import backarrow from "@/assets/arrow_back_ios.png";
import backarrowLight from "@/assets/backarrowLight.png";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header>
      <nav className="fixed left-[57px] top-1 flex h-16 w-[calc(100vw_-_57px)] items-center border-b border-r border-t border-[#DEDEDE] bg-[#FFFFFF] p-6 dark:border-[#343A40] dark:bg-[#1F1F1F]">
        <div className="flex w-full items-center justify-between">
          <div className="h-[22px] w-[127px]">
            <h1 className="text-base font-bold">Onebox</h1>
          </div>
          <div className="flex h-[24px] w-[210px] items-center space-x-2">
            <div className="h-full w-[51px]">
              <ThemeSwitcher />
            </div>
            <div className="flex h-[22px] w-[137px] items-center">
              <p className="h-full w-[113px] text-sm font-semibold text-[#454F5B] dark:text-[#FFFFFF]">
                Tim&apos;s Workspace
              </p>
              <img
                className="size-4"
                src={theme === "dark" ? backarrow : backarrowLight}
                alt="down arrow"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
