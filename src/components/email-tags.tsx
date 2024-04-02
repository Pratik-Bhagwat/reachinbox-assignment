import send from "@/assets/send.png";
import { cn } from "@/lib/utils";

interface EmailTagsProps {
  isCampaignTag: boolean;
  content: string;
}

const EmailTags = ({ isCampaignTag, content }: EmailTagsProps) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center space-x-2 rounded-xl px-2 py-1",
        isCampaignTag
          ? "bg-[#F0F0F0] dark:bg-[#222426]"
          : "bg-[#F0F0F0] dark:bg-[#2D3833]",
      )}
    >
      {isCampaignTag ? (
        <img className="size-3" src={send} alt="send-img" />
      ) : (
        <div className="size-2 rounded-full bg-[#46C18D] ring-2 ring-green-800 dark:bg-[#57E0A6]" />
      )}
      <p
        className={cn(
          "font-semibold md:text-[6.8px] lg:text-[10px]",
          isCampaignTag
            ? "text-[#637381] dark:text-white"
            : "text-[#46C18D] dark:text-[#57E0A6]",
        )}
      >
        {content}
      </p>
    </div>
  );
};

export default EmailTags;
