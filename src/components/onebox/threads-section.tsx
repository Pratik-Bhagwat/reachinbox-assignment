import backarrow from "@/assets/arrow_back_ios.png";
import backarrowLight from "@/assets/backarrowLight.png";
import reply from "@/assets/reply.png";
import noemail from "@/assets/no-email.svg";
import { useSelectedThread } from "@/context/selected-thread-context";
import useFetchThreads from "@/hooks/use-fetch-threads";
import { Trash } from "lucide-react";
import { useState } from "react";
import EmailThread from "../email";
import Line from "../line";
import ReplyTab from "../reply-tab";
import { useTheme } from "../theme-provider";
import { Button } from "../ui/button";
import { convertTimestampToDate } from "@/lib/utils";
import Loader from "../shared/loader";

interface ThreadsSectionProps {
  isReplyClicked: boolean;
  setIsReplyClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThreadsSection = ({
  setIsDeleteClicked,
  isReplyClicked,
  setIsReplyClicked,
}: ThreadsSectionProps) => {
  const [isViewMoreClicked, setIsViewMoreClicked] = useState(false);

  const { theme } = useTheme();
  const { threadId } = useSelectedThread();

  const toggleReply = () => {
    setIsReplyClicked(true);
  };

  const openDeleteModel = () => {
    setIsDeleteClicked(true);
  };

  const threads = useFetchThreads(threadId);

  if (threadId === 0)
    return (
      <section
        className="flex h-full items-center justify-center
       border-r md:w-1/2 lg:w-3/5"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <img src={noemail} alt="no email svg" />
          <p className="font-semibold dark:text-white md:text-lg lg:text-xl">
            It&apos;s the beginning of a legendary conversation
          </p>
        </div>
      </section>
    );

  return threads.length > 0 ? (
    <section className="h-full border-r md:w-1/2 lg:w-3/5">
      {/* top heading section */}
      <div className="flex h-16 items-center justify-between border-b px-4 py-2">
        <div className="p-1">
          <div className="flex flex-col justify-center space-y-1">
            <h4 className="text-[#343A40] dark:text-[#FFFFFF] md:text-xs lg:text-sm">
              {threads[0]?.fromName}
            </h4>
            <p className=" text-[#343A40B2] dark:text-[#FFFFFF66] md:text-[10px] lg:text-xs">
              {threads[0]?.fromEmail}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* interested select tag */}
          <div>
            <Button className="flex items-center rounded-sm border border-[#DFE3E8] bg-[#FFFFFF] hover:bg-muted dark:border-[#343A40] dark:bg-[#1F1F1F] md:w-[100px] md:justify-normal md:space-x-2 md:px-2 lg:w-[180px] lg:justify-center lg:space-x-4">
              <div className="flex items-center md:space-x-2 lg:space-x-4">
                <div className="rounded-full bg-[#46C18D] ring-2 ring-green-300 dark:bg-[#57E0A6] dark:ring-green-800 md:size-2 lg:size-4" />
                <p className="font-semibold text-[#172B4D] dark:text-[#D3D7DB] md:text-[10px] lg:text-base">
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
              onClick={openDeleteModel}
              className="border border-[#DFE3E8] bg-[#FFFFFF] hover:bg-muted dark:border-[#343A40] dark:bg-[#1F1F1F]"
              size={"icon"}
            >
              <Trash className="size-4 text-muted-foreground dark:text-white" />
            </Button>
          </div>
        </div>
      </div>
      {/* replies or threads */}
      <div className="relative flex h-[calc(100vh_-_11.5rem)] w-full flex-col space-y-2 overflow-y-scroll px-4 py-2">
        <>
          <Line text={convertTimestampToDate(threads[0].sentAt)} />
          <EmailThread thread={threads[0]} />
        </>
        {!isViewMoreClicked && (
          <Line
            text={`view ${threads.length - 1} more`}
            isViewMore={true}
            onClick={() => setIsViewMoreClicked(true)}
          />
        )}
        {isViewMoreClicked &&
          threads
            .filter((_, idx) => idx !== 0)
            .map((thread) => (
              <>
                <Line text={convertTimestampToDate(thread.sentAt)} />
                <EmailThread key={thread.id} thread={thread} />
              </>
            ))}

        {isReplyClicked && (
          <ReplyTab setIsReplyClicked={setIsReplyClicked} threadId={threadId} />
        )}
      </div>
      {/* reply button footer*/}
      <div className="h-14 w-full px-8 py-2">
        <Button
          onClick={toggleReply}
          className="space-x-3 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]"
        >
          <img src={reply} alt="reply png" className="size-4" />
          <span className="font-semibold dark:text-[#FFFFFF] md:text-xs lg:text-sm">
            Reply
          </span>
        </Button>
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default ThreadsSection;
