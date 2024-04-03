import DeleteModel from "@/components/delete-model";
import Aside from "@/components/onebox/aside";
import Header from "@/components/onebox/header";
import InboxSection from "@/components/onebox/inbox-section";
import ThreadsSection from "@/components/onebox/threads-section";
import { useSelectedThread } from "@/context/selected-thread-context";
import useGetEmails from "@/hooks/use-get-emails";
import { useState } from "react";

const Onebox = () => {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const { threadId } = useSelectedThread();
  const emails = useGetEmails();

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
        <ThreadsSection setIsDeleteClicked={setIsDeleteClicked} />
        <section className="md:w-1/4 lg:w-1/5"></section>
      </main>
    </>
  );
};

export default Onebox;
