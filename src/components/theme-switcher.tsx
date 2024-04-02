import { useState } from "react";
import { Switch } from "./ui/switch";

const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Switch checked={isChecked} onCheckedChange={handleToggle} />
    </div>
  );
};

export default ThemeSwitcher;
