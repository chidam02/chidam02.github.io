import { createContext, useContext } from "react";

export const ThemeContext = createContext({ theme: "theme", toggleTheme: (theme: string) => {} });

export default function useTheme() {
  return useContext(ThemeContext);
}
