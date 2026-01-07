import { CheckIcon, Moon, Paintbrush, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Color } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  COLOR_KEY,
  THEME_KEY,
  useTheme,
  useThemeColor,
} from "@/providers/ThemeProvider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Colors, ThemeModes } from "@/constants";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme } = useTheme();
  const { setColor } = useThemeColor();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={"cursor-pointer" + cn(className)}
        >
          {Colors.length > 1 ? (
            <Paintbrush />
          ) : (
            <>
              <Sun className="block dark:hidden" />
              <Moon className="hidden dark:block" />
            </>
          )}
          <span className="sr-only">Change Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {ThemeModes.map((theme) => {
          return (
            <DropdownMenuItem
              key={theme}
              onClick={() => setTheme(theme)}
              className="cursor-pointer"
            >
              {localStorage.getItem(THEME_KEY) == theme && (
                <span className="absolute right-2 flex size-3.5 items-center justify-center">
                  <CheckIcon className="size-4" />
                </span>
              )}
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer"
        >
          {localStorage.getItem(THEME_KEY) == "system" && (
            <span className="absolute right-2 flex size-3.5 items-center justify-center">
              <CheckIcon className="size-4" />
            </span>
          )}
          System
        </DropdownMenuItem>
        {Colors.length > 1 && (
          <>
            <Separator className="my-1" />
            <DropdownMenuItem className="p-0 w-32">
              <Select
                onValueChange={(value) => setColor(value as Color)}
                defaultValue={localStorage.getItem(COLOR_KEY) ?? undefined}
              >
                <SelectTrigger className="h-8 w-full px-2 py-1.5 border-none hover: rounded-sm hover:bg-accent transition-colors duration-50 cursor-pointer">
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent className="w-32 mt-1">
                  {Colors.map((color) => {
                    return (
                      <SelectItem
                        key={color}
                        value={color}
                        className="cursor-pointer"
                      >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
