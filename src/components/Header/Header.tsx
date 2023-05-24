import { useContext } from "react"
import { HiMoon, HiSun } from "react-icons/hi"
import styles from "./Header.module.scss"
import { GrToast } from "react-icons/gr"
import { Theme, themeContext } from "../../context/ThemeContext.tsx"
import { IconWrapper } from "../Ui/IconWrapper/IconWrapper.tsx"

export const Header = () => {
    const { theme, changeTheme } = useContext(themeContext)
    return (
        <div className={styles.header}>
            <IconWrapper title={"логотип"}>
                <GrToast />
            </IconWrapper>
            <div onClick={changeTheme}>
                <IconWrapper title={"изменение темы"}> {theme === Theme.DARK ? <HiSun /> : <HiMoon />} </IconWrapper>
            </div>
        </div>
    )
}
