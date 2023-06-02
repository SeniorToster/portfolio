import styles from "./InfoIcons.module.scss"
import { HiBriefcase, HiCake, HiCalendar, HiLink } from "react-icons/hi"
import React, { FC, useMemo } from "react"

export type NameInfo = "work" | "link" | "birthday" | "calender"

interface IInfo {
    name: NameInfo
    icon: React.ReactNode
}
export interface Info {
    name: NameInfo
    label: string
    link?: string
}

export interface InfoIconsProps {
    infoArray: Info[]
}

const infoIcon: IInfo[] = [
    { name: "work", icon: <HiBriefcase /> },
    { name: "link", icon: <HiLink /> },
    { name: "birthday", icon: <HiCake /> },
    { name: "calender", icon: <HiCalendar /> },
]

export const InfoIcons: FC<InfoIconsProps> = ({ infoArray }) => {
    const infoRender = useMemo(
        () =>
            infoArray.map((info) => {
                const iconFind = infoIcon.find((item) => item.name === info.name)

                if (info?.link) {
                    return {
                        name: info.name,
                        icon: iconFind?.icon,
                        content: (
                            <a className={styles.icons__link} target="_blank" href={info.link}>
                                {info.label}
                            </a>
                        ),
                    }
                } else {
                    return {
                        name: info.name,
                        icon: iconFind?.icon,
                        content: <p>{info.label}</p>,
                    }
                }
            }),
        [infoArray],
    )

    return (
        <div className={styles.icons}>
            {infoRender.map(({ icon, content, name }) => (
                <div key={name}>
                    {icon}
                    {content}
                </div>
            ))}
        </div>
    )
}
