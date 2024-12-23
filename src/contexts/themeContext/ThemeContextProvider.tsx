import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({children}: React.PropsWithChildren<Readonly<{ children?: React.ReactNode }>>) {
    const [theme, setTheme] = useState(()  => localStorage.getItem("theme") ?? "light");

    const toggleTheme = useCallback((theme: string) => {
        setTheme(theme);
    },[]);

    const contextValue = useMemo(() => ({theme,toggleTheme}),[theme,toggleTheme]);


    useEffect(()=>{
        document.querySelector("html")?.classList.remove("dark","light");
        document.querySelector("html")?.classList.add(theme);
        localStorage.setItem("theme",theme);
    },[theme]);
    
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )

}