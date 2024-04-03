import { asideIcons } from "@/constants";
import { useTheme } from "../theme-provider";
import mailLightMode from "@/assets/logo_light.png";
import mail from "@/assets/mail.png";
import usericon from "@/assets/user_icon.png";
import { cn } from "@/lib/utils";

const Aside = () => {
  const { theme } = useTheme();

  return (
    <aside>
      <div className="fixed left-0 top-0 flex h-screen w-14 flex-col items-center justify-between border border-[border-[#DEDEDE]] bg-[#FFFFFF] py-1 dark:border-[#343A40] dark:bg-[#101113]">
        <div className="flex flex-col items-center space-y-7">
          <div className="flex h-16 w-12 items-center justify-center">
            <div className="size-8 rounded-sm p-1">
              <img
                className="size-full object-contain"
                src={theme === "dark" ? mail : mailLightMode}
                alt="mail png"
              />
            </div>
          </div>
          <div className="flex h-[400px] w-12 flex-col items-center justify-center px-2 py-4">
            <div className="flex h-[546px] w-[28px] flex-col items-center space-y-6">
              {asideIcons.map((icon) => (
                <div
                  key={icon.id}
                  className={cn(
                    "flex size-8 cursor-pointer items-center justify-center rounded-sm",
                    icon.alt.split(" ")[0] === "inbox"
                      ? "bg-[#acaeb0] dark:bg-[#2F3030]"
                      : "",
                  )}
                >
                  <img src={icon.icon} alt={icon.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-14 w-12 items-center justify-center">
          <div className="size-8 rounded-sm">
            <img src={usericon} alt="user icon" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
