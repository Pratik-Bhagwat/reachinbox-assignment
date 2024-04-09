import { Search } from "lucide-react";
import LatestEmailReply from "../latest-email-reply";
import { Input } from "../ui/input";
import down from "@/assets/down.png";
import resetLight from "@/assets/reset-light.png";
import reset from "@/assets/reset.png";
import backarrow from "@/assets/arrow_back_ios.png";
import backarrowLight from "@/assets/backarrowLight.png";
import { Theme, useTheme } from "../theme-provider";
import { Email } from "@/types";
import axios from "axios";
import { requestOptions } from "@/constants";
import { toast } from "sonner";
import { useSelectedThread } from "@/context/selected-thread-context";

const InboxHeader = ({
  theme,
  repliesLength = 0,
}: {
  theme: Theme;
  repliesLength: number;
}) => {
  const { setRefresh } = useSelectedThread();

  const handleReset = async () => {
    try {
      const response = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/reset",
        requestOptions,
      );
      const data = response.data;
      setRefresh((refresh) => !refresh);
      toast.success("refreshed successfully");
    } catch (error) {
      toast.error("something went wrong");
      console.log("error while reseting", error);
    }
  };

  return (
    <div className="flex h-[12rem] w-full flex-col space-y-2">
      {/* inbox heading */}
      <div className="flex w-full items-center justify-between p-3">
        <div className="flex flex-col justify-center space-y-2">
          <div className="flex items-center space-x-1 pt-2">
            <h4 className="font-openSans font-bold text-[#4285F4] md:text-lg lg:text-xl">
              All Inbox(s)
            </h4>
            <img src={down} alt="down-arrow" className="font-medium" />
          </div>
          <div>
            <p className="font-openSans font-bold text-[#7F7F7F] md:text-xs lg:text-sm">
              <span className="text-[#343A40] dark:text-white">1/1 </span>
              Inboxes selected
            </p>
          </div>
        </div>
        <div
          onClick={handleReset}
          className="flex size-8 cursor-pointer items-center justify-center self-start rounded-sm border border-[#DFE3E8] dark:border-none"
        >
          <img src={theme === "dark" ? reset : resetLight} alt="reset png" />
        </div>
      </div>
      {/* search part */}
      <div className="w-full">
        <div className="w-full p-2">
          <div className="flex h-8 w-full items-center rounded-sm border border-[#DFE3E8] bg-[#F4F6F8] px-3 dark:border-[#FFFFFF1A] dark:bg-[#23272C]">
            <Search className="size-5 text-[#ADBAC7] dark:text-[#FFFFFF33]" />
            <Input
              type="search"
              className="ouline-none h-full border-none bg-transparent placeholder:font-inter placeholder:text-[#ADBAC7] focus-visible:ring-0 focus-visible:ring-offset-0 dark:placeholder:text-[#FFFFFF33]"
              placeholder="Search"
            />
          </div>
        </div>
        <div>
          <div className="px-2 py-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex size-5 items-center justify-center rounded-full bg-[#ECECEC] p-3 dark:bg-[#222426]">
                  <span className="font-inter font-semibold text-[#5C7CFA] md:text-xs lg:text-sm">
                    {repliesLength}
                  </span>
                </div>
                <p className="font-inter font-semibold text-[#172B4D] dark:text-[#E6E6E6] md:text-xs lg:text-sm">
                  New Replies
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <p className="font-inter font-semibold text-[#172B4D] dark:text-[#E6E6E6] md:text-xs lg:text-sm">
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
  );
};

const EmailList = ({ emails }: { emails: Email[] }) => (
  <div className="h-[calc(100%_-_192px)] w-full overflow-y-scroll px-2">
    {emails?.length > 0 &&
      emails.map((email) => <LatestEmailReply email={email} key={email.id} />)}
  </div>
);

interface InboxSectionProps {
  emails: Email[];
}

const InboxSection = ({ emails }: InboxSectionProps) => {
  const { theme } = useTheme();

  return (
    <section className="h-full border-r md:w-1/4 lg:w-1/5">
      <div className="h-full w-full">
        <div className="w-full">
          <InboxHeader theme={theme} repliesLength={emails?.length} />
        </div>
        <EmailList emails={emails} />
      </div>
    </section>
  );
};

export default InboxSection;
