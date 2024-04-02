import backarrow from "@/assets/arrow_back_ios.png";
import backarrowLight from "@/assets/backarrowLight.png";
import down from "@/assets/down.png";
import mailLightMode from "@/assets/logo_light.png";
import mail from "@/assets/mail.png";
import resetLight from "@/assets/reset-light.png";
import reset from "@/assets/reset.png";
import reply from "@/assets/reply.png";
import usericon from "@/assets/user_icon.png";
import Email from "@/components/email";
import LatestEmailReply from "@/components/latest-email-reply";
import { useTheme } from "@/components/theme-provider";
import ThemeSwitcher from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { asideIcons } from "@/constants";
import { cn } from "@/lib/utils";
import { Search, Trash } from "lucide-react";
import { useAuthContext } from "../hooks/use-auth-context";
import Line from "@/components/line";

const Onebox = () => {
  const { token } = useAuthContext();
  const { theme } = useTheme();

  const getDetails = () => {
    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    fetch("/api/v1/onebox/list", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
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
      <main className="ml-14 mt-16 flex h-[calc(100vh_-_4rem)] w-[100%_-_56px]">
        {/* inbox section */}
        <section className="h-full border-r md:w-1/4 lg:w-1/5">
          <div className="h-full w-full">
            {/* all inbox and search */}
            <div className="h-1/4 w-full">
              <div className="h-full w-full">
                {/* inbox heading */}
                <div className="flex w-full items-center justify-between p-3">
                  <div className="flex flex-col justify-center space-y-2">
                    <div className="flex items-center space-x-1 pt-2">
                      <h4 className="font-bold text-[#4285F4] md:text-lg lg:text-xl">
                        All Inbox(s)
                      </h4>
                      <img
                        src={down}
                        alt="down-arrow"
                        className="font-medium"
                      />
                    </div>
                    <div>
                      <p className="text-[#7F7F7F] md:text-xs lg:text-sm">
                        <span className="font-bold text-[#343A40] dark:text-white">
                          1/1{" "}
                        </span>
                        Inboxes selected
                      </p>
                    </div>
                  </div>
                  <div className="flex size-8 items-center justify-center self-start rounded-sm border border-[#DFE3E8] dark:border-none">
                    <img
                      src={theme === "dark" ? reset : resetLight}
                      alt="reset png"
                    />
                  </div>
                </div>
                {/* search part */}
                <div className="w-full">
                  <div className="w-full p-2">
                    <div className="flex h-8 w-full items-center rounded-sm border border-[#DFE3E8] bg-[#F4F6F8] px-3 dark:border-[#FFFFFF1A] dark:bg-[#23272C]">
                      <Search className="size-5 text-[#ADBAC7] dark:text-[#FFFFFF33]" />
                      <Input
                        type="search"
                        className="ouline-none h-full border-none bg-transparent placeholder:text-[#ADBAC7] focus-visible:ring-0 focus-visible:ring-offset-0 dark:placeholder:text-[#FFFFFF33]"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="px-2 py-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex size-5 items-center justify-center rounded-full bg-[#222426] p-3">
                            <span className="font-semibold text-[#5C7CFA] md:text-xs lg:text-sm">
                              26
                            </span>
                          </div>
                          <p className="font-semibold text-[#172B4D] dark:text-[#E6E6E6] md:text-xs lg:text-sm">
                            New Replies
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <p className="dark: font-semibold text-[#172B4D] dark:text-[#E6E6E6] md:text-xs lg:text-sm">
                            Newest
                          </p>
                          <img
                            className="size-3"
                            src={theme === "dark" ? backarrow : backarrowLight}
                            alt="down-arrow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* all emails */}
            <div className="h-3/4 w-full overflow-y-scroll px-2">
              <LatestEmailReply />
              <LatestEmailReply />
              <LatestEmailReply />
              <LatestEmailReply />
              <LatestEmailReply />
              <LatestEmailReply />
              <LatestEmailReply />
              <LatestEmailReply />
              <LatestEmailReply />
            </div>
          </div>
        </section>

        {/* replies or threads */}
        <section className="h-full border-r md:w-1/2 lg:w-3/5">
          {/* top heading section */}
          <div className="flex h-16 items-center justify-between border-b px-4 py-2">
            <div className="p-1">
              <div className="flex flex-col justify-center space-y-1">
                <h4 className="text-[#343A40] dark:text-[#FFFFFF] md:text-xs lg:text-sm">
                  Orlando
                </h4>
                <p className=" text-[#343A40B2] dark:text-[#FFFFFF66] md:text-[10px] lg:text-xs">
                  orladom@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* interested select tag */}
              <div>
                <Button className="flex items-center rounded-sm border dark:border-[#343A40] dark:bg-[#1F1F1F] md:w-[100px] md:justify-normal md:space-x-2 md:px-2 lg:w-[180px] lg:justify-center lg:space-x-4">
                  <div className="flex items-center md:space-x-2 lg:space-x-4">
                    <div className="rounded-full ring-2 ring-green-800 dark:bg-[#57E0A6] md:size-2 lg:size-4" />
                    <p className="font-semibold dark:text-[#D3D7DB] md:text-[10px] lg:text-base">
                      Interested
                    </p>
                  </div>
                  <img
                    src={theme === "dark" ? backarrow : backarrowLight}
                    alt="down-arrow"
                    className="size-3"
                  />
                </Button>
              </div>
              {/* delete email btn */}
              <div>
                <Button
                  className="border dark:border-[#343A40] dark:bg-[#1F1F1F]"
                  size={"icon"}
                >
                  <Trash className="size-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
          {/* replies or threads */}
          <div className="flex h-[calc(100vh_-_11.5rem)] w-full flex-col space-y-2 overflow-y-scroll px-4 py-2">
            <>
              <Line text="Today" />
              <Email />
            </>
            <Line text="view 4 more" isViewMore={true} />
          </div>
          {/* reply button footer*/}
          <div className="h-14 w-full px-8 py-2">
            <Button className="space-x-3 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]">
              <img src={reply} alt="reply png" className="size-4" />
              <span className="font-semibold dark:text-[#FFFFFF] md:text-xs lg:text-sm">
                Reply
              </span>
            </Button>
          </div>
        </section>

        <section className="md:w-1/4 lg:w-1/5"></section>
      </main>
    </>
  );
};

export default Onebox;
