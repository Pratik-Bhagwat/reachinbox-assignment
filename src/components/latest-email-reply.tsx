import EmailTags from "./email-tags";

const LatestEmailReply = () => {
  return (
    <div className="h-24 w-full px-2 py-3 dark:border-t dark:border-[#33383F]">
      <div className="space-y-2">
        {/* email id and date */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-medium text-[#343A40] dark:text-[#FFFFFF] md:text-xs lg:text-sm">
              Beata@gmail.com
            </p>
            <span className="text-[#919EAB] dark:text-[#FCFCFC66] md:text-[10px] lg:text-xs">
              Mar 7
            </span>
          </div>
          {/* email reply message */}
          <div>
            <p className="text-[#172B4D] dark:text-[#E1E0E0] md:text-[10px] lg:text-xs">
              I've tried a lot and .
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
