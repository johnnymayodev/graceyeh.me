import { Colors, ThemeModes } from "@/constants";

export type Color = (typeof Colors)[number];

export type Theme = (typeof ThemeModes)[number] | "system";
