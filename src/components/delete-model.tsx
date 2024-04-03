import axios from "axios";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { requestOptions } from "@/constants";
import { useSelectedThread } from "@/context/selected-thread-context";

interface DeleteModelProps {
  threadId: number;
  setIsDeleteClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModel = ({ threadId, setIsDeleteClicked }: DeleteModelProps) => {
  const handleCancel = () => {
    setIsDeleteClicked(false);
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const { setRefresh } = useSelectedThread();

  const handleDelete = async () => {
    if (threadId && threadId !== 0) {
      try {
        const response = await axios.delete(
          `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
          requestOptions,
        );
        const data = response.data;
        console.log(data);
        setIsDeleteClicked(false);
        setRefresh(true);
        toast.success("thread deleted successfully");
      } catch (error) {
        toast.error("something went wrong");
        console.log("error while deleting thread", error);
      }
    }
  };

  return (
    <div
      className="absolute top-0 z-20 flex h-screen w-full items-center justify-center bg-[#8484847D]"
      onClick={handleCancel}
    >
      <div
        className="px h-[249px] w-[443px] rounded-md border bg-background px-6 py-8 dark:border-[#484E53] dark:bg-gradient-to-r dark:from-[#141517] dark:to-[#232528]"
        onClick={stopPropagation}
      >
        <div className="flex h-full w-full flex-col items-center space-y-10">
          <h3 className="font-bold dark:text-[#FFFFFF] md:text-xl lg:text-2xl">
            Are you sure ?
          </h3>
          <div className="flex">
            <p className="self-start dark:text-[#E8E8E8] md:text-xs lg:text-sm">
              Your selected email will be deleted.
            </p>
          </div>
          <div className="flex items-center space-x-5">
            <Button
              onClick={handleCancel}
              className="w-28 rounded-sm font-semibold dark:bg-[#25262B] dark:text-[#FFFFFF] md:text-xs lg:text-sm"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              className="w-36 rounded-sm bg-gradient-to-r from-[#FA5252] to-[#A91919] dark:text-[#FFFFFF] md:text-xs lg:text-sm"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
