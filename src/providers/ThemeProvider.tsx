import { createContext, useContext, useEffect, useState } from "react";

// Types
import type { Color, Theme } from "@/types";

// Constants
import { Colors, ThemeModes } from "@/constants";

const Themes = Colors.flatMap((color) =>
  ThemeModes.map((mode) => `${color}-${mode}`)
);

const DEFAULT_THEME = "system";
const DEFAULT_COLOR = "default";
export const THEME_KEY = "ui-theme";
export const COLOR_KEY = "ui-color";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColor?: Color;
  themeKey?: string;
  colorKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  color: Color;
  setColor: (color: Color) => void;
};

const initialState: ThemeProviderState = {
  theme: DEFAULT_THEME,
  setTheme: () => {},
  color: DEFAULT_COLOR,
  setColor: () => {},
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
  defaultColor = DEFAULT_COLOR,
  themeKey = THEME_KEY,
  colorKey = COLOR_KEY,
  ...props
}: ThemeProviderProps) {
  if (!localStorage.getItem(THEME_KEY))
    localStorage.setItem(themeKey, DEFAULT_THEME);
  if (!localStorage.getItem(COLOR_KEY))
    localStorage.setItem(colorKey, DEFAULT_COLOR);

  const getStoredValue = <T extends string>(key: string, fallback: T): T =>
    (localStorage.getItem(key) as T) || fallback;

  const [theme, setTheme] = useState<Theme>(() =>
    getStoredValue(themeKey, defaultTheme)
  );
  const [color, setColor] = useState<Color>(() =>
    getStoredValue(colorKey, defaultColor)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateMode = (mode: "dark" | "light") => {
      root.setAttribute("data-mode", mode);
      if (Colors.length <= 1) {
        root.classList.remove(...ThemeModes);
        root.classList.add(mode);
      } else {
        root.classList.remove(...Themes);
        root.classList.add(`${color}-${mode}`);
      }
    };

    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === "system") updateMode(e.matches ? "dark" : "light");
    };

    if (theme === "system") {
      const mode = systemThemeQuery.matches ? "dark" : "light";
      updateMode(mode);
      systemThemeQuery.addEventListener("change", handleSystemChange);

      return () =>
        systemThemeQuery.removeEventListener("change", handleSystemChange);
    } else {
      updateMode(theme);
    }
  }, [theme, color]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(themeKey, theme);
      setTheme(theme);
    },
    color,
    setColor: (color: Color) => {
      localStorage.setItem(colorKey, color);
      setColor(color);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export const useThemeColor = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useThemeColor must be used within a ThemeProvider");

  return { color: context.color, setColor: context.setColor };
};
