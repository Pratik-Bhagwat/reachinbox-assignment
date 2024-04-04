import DeleteModel from "@/components/delete-model";
import LeadsAndActivitySection from "@/components/leads-and-activity-section";
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
    if (threadId !== 0 && !isReplyClicked && !isDeleteClicked) {
      const handleKeyPress = (e: KeyboardEvent) => {
        const key = e.key;
        if (key === "D") {
          setIsDeleteClicked(true);
        }
        if (key === "R") {
          setIsReplyClicked(true);
        }
      };

      window.addEventListener("keypress", handleKeyPress);
      return () => {
        window.removeEventListener("keypress", handleKeyPress);
      };
    }
  }, [threadId, isDeleteClicked, isReplyClicked]);

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
        <LeadsAndActivitySection />
      </main>
    </>
  );
};

export default Onebox;
