import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl px-2.5 sm:px-20", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
