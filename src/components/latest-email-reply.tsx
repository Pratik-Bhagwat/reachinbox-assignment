import { Email } from "@/types";
import EmailTags from "./email-tags";
import { convertHTMLToText, convertTimestampToDate } from "@/lib/utils";
import { useSelectedThread } from "@/context/selected-thread-context";

interface LatestEmailReplyProps {
  email: Email;
}

const LatestEmailReply = ({ email }: LatestEmailReplyProps) => {
  const { fromEmail, sentAt, body } = email;
  const { setThreadId } = useSelectedThread();

  return (
    <div
      onClick={() => {
        setThreadId(email.threadId);
      }}
      className="w-full cursor-pointer px-2 py-3 dark:border-t dark:border-[#33383F]"
    >
      <div className="space-y-2">
        {/* email id and date */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-medium text-[#343A40] dark:text-[#FFFFFF] md:text-[10px] xl:text-sm">
              {fromEmail}
            </p>
            <span className="whitespace-nowrap text-[#919EAB] dark:text-[#FCFCFC66] md:text-[10px] lg:text-xs xl:text-[13px]">
              {convertTimestampToDate(sentAt)}
            </span>
          </div>
          {/* email reply message */}
          <div>
            <p className="text-[#172B4D] dark:text-[#E1E0E0] md:text-[10px] lg:text-xs">
              {convertHTMLToText(body)}
            </p>
          </div>
        </div>
        {/* interested tag */}
        <div className="flex w-full items-center">
          <div className="flex items-center space-x-2">
            <EmailTags isCampaignTag={false} content="Interested" />
            <EmailTags isCampaignTag={true} content="Campaign Name" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestEmailReply;
