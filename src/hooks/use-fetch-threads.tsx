import { useEffect, useState } from "react";
import axios from "axios";
import { Email } from "@/types";
import { requestOptions } from "@/constants";

const useFetchThreads = (threadId: number) => {
  const [threads, setThreads] = useState<Email[]>([]);

  useEffect(() => {
    const fetchThreads = async () => {
      console.log(threadId);
      if (threadId) {
        try {
          const response = await axios.get(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
            requestOptions,
          );
          const data = response.data.data;
          console.log(data);

          data.sort(
            (a: Email, b: Email) =>
              new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime(),
          );

          const threads = [...data];
          setThreads(threads);
        } catch (error) {
          console.log("error while fetching threads", error);
        }
      }
    };
    fetchThreads();
  }, [threadId]);

  return threads;
};

export default useFetchThreads;
