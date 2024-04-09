import { convertHTMLToText, formatDate } from "@/lib/utils";
import { Email as EmailType } from "@/types";

interface EmailProps {
  thread: EmailType;
}

const Email = ({ thread }: EmailProps) => {
  const { subject, fromEmail, toEmail, body, sentAt } = thread;

  return (
    <>
      {/* email div or thread div */}
      <div className="mt-2 min-h-60 w-full rounded-sm border p-3 dark:border-[#343A40] dark:bg-[#141517]">
        <div className="flex h-full w-full flex-col justify-center space-y-4">
          {/* email header */}
          <div className="flex h-2/5 flex-col justify-center space-y-2 px-2 py-1">
            <div className="flex items-center justify-between">
              {/* subject */}
              <h4 className="font-openSans font-semibold dark:text-[#F8FAFC] md:text-xs lg:text-sm">
                {subject}
              </h4>
              {/* date and time */}
              <p className="font-SF_pro text-[#637381] dark:text-[#7F7F7F] md:text-xs lg:text-sm">
                {formatDate(sentAt)}
              </p>
            </div>
            {/* from email*/}
            <p className="font-SF_pro text-[#637381] dark:text-[#AEAEAE] md:text-xs lg:text-sm">
              from : {fromEmail}
            </p>
            {/* to email*/}
            <p className="font-SF_pro text-[#637381] dark:text-[#AEAEAE] md:text-xs lg:text-sm">
              to : {toEmail}
            </p>
          </div>
          {/* email message */}
          <div className="h-3/5 px-2 py-1">
            <p className="font-openSans text-[#172B4D] dark:text-[#E1E0E0] md:text-xs lg:text-sm">
              {convertHTMLToText(body)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
