import { createContext, useContext } from "react";

export const ThemeContext = createContext<{
  theme: string;
  toggleTheme: (theme: string) => void;
}>({ theme: "theme", toggleTheme: () => {} });

export default function useTheme() {
  return useContext(ThemeContext);
}
