import { useEffect, useState } from "react";
import axios from "axios";
import { Email } from "@/types";
import { requestOptions } from "@/constants";
import { useSelectedThread } from "@/context/selected-thread-context";

const useGetEmails = () => {
  const { refresh } = useSelectedThread();
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          requestOptions,
        );
        const data = response.data.data;
        setEmails(data);
      } catch (error) {
        console.log("error while fetching data", error);
      }
    };
    getDetails();
  }, [refresh]);

  return emails;
};

export default useGetEmails;
