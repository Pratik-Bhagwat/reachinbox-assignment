import { Input } from "./ui/input";

interface ReplyTabEmailProps {
  title: "To" | "From" | "Subject";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReplyTabEmail = ({ title, onChange }: ReplyTabEmailProps) => {
  return (
    <div className="h-14 w-full border-b px-4 py-2 dark:border-[#34383D] dark:bg-[#141517]">
      <div className="flex items-center font-semibold dark:text-[#E7E7E7] md:text-[10px] lg:text-xs">
        <span className="font-openSans dark:text-[#BAB9BD] md:text-[10px] lg:text-xs">
          {title} :
        </span>
        <Input
          onChange={onChange}
          placeholder={
            title === "Subject" ? "write subject here" : "johndoe@gmail.com"
          }
          className="ouline-none w-[80%] border-none bg-transparent font-openSans font-semibold focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-xs "
        />
      </div>
    </div>
  );
};

export default ReplyTabEmail;

{
  /* <p className="flex items-center font-semibold dark:text-[#E7E7E7] md:text-[10px] lg:text-xs"></p> */
}
