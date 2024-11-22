import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ToggleTheme = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? (
        <Sun className="transition-all hover:scale-95" />
      ) : (
        <Moon className="transition-all hover:scale-95" />
      )}
    </div>
  );
};

export default ToggleTheme;