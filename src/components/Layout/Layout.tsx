import styles from "./Layot.module.scss"
import { type ChildrenProps } from "../../types"
import { type FC } from "react"
import { Header } from "../Header/Header.tsx"
import { Footer } from "../Footer/Footer.tsx"

export const Layout: FC<ChildrenProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.container}>{children}</div>
            <Footer />
        </>
    )
}
