import ReplyTabEmail from "./reply-tabs-email";
import { Button } from "./ui/button";
import senddown from "@/assets/send-down.png";
import flashon from "@/assets/flash_on.png";
import { X } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { requestOptions } from "@/constants";

interface ReplyTabProps {
  threadId: number;
  setIsReplyClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReplyTab = ({ threadId, setIsReplyClicked }: ReplyTabProps) => {
  const [replyValues, setReplyValues] = useState({
    To: "",
    From: "",
    Subject: "",
    message: "",
  });

  const { To, From, Subject, message } = replyValues;

  const clostReply = () => {
    setIsReplyClicked(false);
  };

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setReplyValues((prevState) => ({
        ...prevState,
        [field]: event.target.value,
      }));
    };
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setReplyValues((prevState) => ({
      ...prevState,
      message: event.target.value,
    }));
  };

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!To || !From || !Subject || !message) {
      toast.error("All fields are required");
      return false;
    } else if (!emailRegex.test(To) || !emailRegex.test(From)) {
      toast.error("Please enter valid email addresses");
      return false;
    } else {
      return true;
    }
  };

  const handleSend = () => {
    const validate = validateFields();
    if (validate) {
      const sendReply = async () => {
        try {
          const response = await axios.post(
            `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}}`,
            replyValues,
            requestOptions,
          );
          const data = response.data;
          setReplyValues({
            To: "",
            From: "",
            Subject: "",
            message: "",
          });
          toast.success("reply send successfully");
        } catch (error) {
          console.log("error while sending reply", error);
        }
      };
      sendReply();
    }
  };

  return (
    <div className="absolute top-16 w-[95%] rounded-lg border bg-white shadow-md dark:border-[#4A5055] dark:bg-[#141517] md:left-3 lg:left-[1.4rem]">
      <div className="flex h-10 items-center justify-between rounded-tl-lg rounded-tr-lg bg-muted dark:bg-[#23272C]">
        <h5 className="ml-4 font-openSans font-bold dark:text-[#BAB9BD] md:text-[10px] lg:text-xs">
          Reply
        </h5>
        <Button
          onClick={clostReply}
          size={"icon"}
          className="bg-transparent hover:bg-transparent"
        >
          {/* <img src={close} alt="close png" className="size-4" /> */}
          <X className="size-4 text-muted-foreground" />
        </Button>
      </div>
      <div className="h-[12rem]">
        <ReplyTabEmail title="To" onChange={handleInputChange("To")} />
        <ReplyTabEmail title="From" onChange={handleInputChange("From")} />
        <ReplyTabEmail
          title="Subject"
          onChange={handleInputChange("Subject")}
        />
      </div>

      {/* emails replying text editor */}
      <div className="h-48 w-full px-4 py-2 dark:bg-[#141517]">
        <div className="h-full w-full">
          <Textarea
            value={message}
            onChange={handleTextareaChange}
            className="max-h-full border-none bg-inherit font-openSans ring-0 placeholder:font-openSans focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-sm placeholder:lg:text-sm"
            placeholder="Type your email here."
          />
        </div>
      </div>
      {/* send button and variables button */}
      <div className="flex h-10 w-full items-center space-x-4 border-t border-[#77777733] px-2 py-1 dark:border-[#2E3236]">
        <Button
          onClick={handleSend}
          size={"sm"}
          className="h-full space-x-3 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]"
        >
          <span className="font-openSans font-semibold dark:text-[#FFFFFF] md:text-xs lg:text-sm">
            Send
          </span>
          <img src={senddown} alt="down-arrow png" />
        </Button>
        <Button
          size={"sm"}
          className="h-full space-x-3 border-none bg-muted hover:bg-muted dark:bg-transparent"
        >
          <img src={flashon} alt="down-arrow png" className="size-5" />
          <span className="font-openSans font-semibold text-muted-foreground dark:text-[#FFFFFF] md:text-xs lg:text-sm">
            Variables
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ReplyTab;
