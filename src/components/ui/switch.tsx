import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { Moon, SunDim } from "lucide-react";
import { useTheme } from "../theme-provider";

// Assume you have a context or some global state to handle the theme

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { setTheme } = useTheme();

  React.useEffect(() => {
    setTheme(props.checked ? "light" : "dark");
  }, [props.checked, setTheme]);

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-[#DADEE1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#E9EAEC] data-[state=unchecked]:bg-input dark:border-[#343A40]",
        className,
      )}
      {...props}
      ref={ref}
    >
      <Moon
        className={cn(
          "absolute size-5 text-[#E8C364]",
          !props.checked ? "hidden" : "block",
        )}
      />

      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-[#FFFFFF] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-[#888686]",
        )}
      />
      {!props.checked && <SunDim className="size-5 text-[#E8C364]" />}
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
