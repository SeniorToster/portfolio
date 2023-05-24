import React, { FC } from "react"
import styles from "./IconWrapper.module.scss"

interface PropsIcon {
    title: string
    children: React.ReactNode
}
export const IconWrapper: FC<PropsIcon> = ({ children, title }) => {
    return (
        <div title={title} className={styles.wrapper}>
            {children}
        </div>
    )
}
