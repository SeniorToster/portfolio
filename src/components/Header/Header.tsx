import styles from "./Header.module.scss"
import { useContext } from "react"
import { themeContext } from "../../context/ThemeContext.tsx"

export const Header = () => {
    const { changeTheme } = useContext(themeContext)
    return (
        <div className={styles.header}>
            <div>logo</div>
            <div onClick={changeTheme}>theme</div>
        </div>
    )
}
