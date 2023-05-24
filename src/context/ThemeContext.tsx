import { createContext, FC, useState } from "react"
import { ChildrenProps } from "../types"

export enum Theme {
    DARK = "dark",
    LIGHT = "light",
}
export interface PropsTheme {
    theme?: Theme
    changeTheme?: () => void
}

export const themeContext = createContext<PropsTheme>({})

export const ThemeContext: FC<ChildrenProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(Theme.DARK)

    const changeTheme = () => {
        const newTheme: Theme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
    }

    return <themeContext.Provider value={{ theme, changeTheme }}>{children}</themeContext.Provider>
}
