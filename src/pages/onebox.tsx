import DeleteModel from "@/components/delete-model";
import LeadDetail from "@/components/lead-detail";
import Aside from "@/components/onebox/aside";
import Header from "@/components/onebox/header";
import InboxSection from "@/components/onebox/inbox-section";
import ThreadsSection from "@/components/onebox/threads-section";
import { useSelectedThread } from "@/context/selected-thread-context";
import useGetEmails from "@/hooks/use-get-emails";
import { useEffect, useState } from "react";

const Onebox = () => {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isReplyClicked, setIsReplyClicked] = useState(false);
  const { threadId } = useSelectedThread();
  const emails = useGetEmails();

  useEffect(() => {
    if (threadId !== 0) {
      window.addEventListener("keypress", (e) => {
        const key = e.key;
        if (key === "D") {
          setIsDeleteClicked(true);
        }
        if (key === "R") {
          setIsReplyClicked(true);
        }
      });
    }
  });

  return (
    <>
      {isDeleteClicked && (
        <DeleteModel
          setIsDeleteClicked={setIsDeleteClicked}
          threadId={threadId}
        />
      )}
      <Header />
      <Aside />
      <main className="ml-14 mt-16 flex h-[calc(100vh_-_4rem)] w-[100%_-_56px]">
        <InboxSection emails={emails} />
        <ThreadsSection
          isReplyClicked={isReplyClicked}
          setIsReplyClicked={setIsReplyClicked}
          setIsDeleteClicked={setIsDeleteClicked}
        />
        <section className="h-full md:w-1/4 lg:w-1/5">
          <div className="h-full border-r p-4 dark:border-[#353533] dark:bg-[#000000]">
            {/* lead details */}
            <div>
              <div className="h-full rounded-md px-2 py-2 dark:bg-[#353533]">
                <h4 className="font-semibold dark:text-[#FFFFFF] md:text-xs lg:text-sm">
                  Lead Details
                </h4>
              </div>
              <div className="flex flex-col space-y-3 px-1 py-3">
                <LeadDetail label="Name" content="Orlando" />
                <LeadDetail label="Contact No" content="+54-9062827869" />
                <LeadDetail label="Email ID" content="orlando@gmail.com" />
                <LeadDetail
                  label="Linkedin"
                  content="linkedin.com/in/timvadde/"
                />
                <LeadDetail label="Company Name" content="Reachinbox" />
              </div>
            </div>
            {/* activities */}
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Onebox;
