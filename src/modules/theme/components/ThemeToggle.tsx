"use client";

import { useTheme } from "next-themes";

//import { Button } from "@/components/ui/button";
import SunFilledIcon from "@/components/icons/sunFilledIcon";
import MoonFilledIcon from "@/components/icons/moonFilledIcon";
import { Toggle } from "@/components/ui/toggle";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Toggle
      className="p-1"
      variant="ghost"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? <MoonFilledIcon /> : <SunFilledIcon />}
    </Toggle>
  );
}
