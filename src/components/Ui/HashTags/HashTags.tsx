import { icons } from "../../../helpes/iconsArr.tsx"
import styles from "./HashTags.module.scss"
import { FC } from "react"
import { useMessage } from "../../../hooks/useMessage/useMessage.tsx"

type Size = "m" | "l"
type Hashtag = { name: string; copy?: boolean; link?: string }
interface HashTagProps {
    hashtag: Hashtag
    size?: Size
    link?: boolean
}
interface HashTagsProps {
    hashtags: Hashtag[]
    size?: Size
}

export const HashTags: FC<HashTagsProps> = ({ hashtags, size = "m" }) => {
    return (
        <div className={`${styles.wrapper} ${styles[`wrapper_${size}`]}`}>
            {hashtags.map((hash) => (
                <HashTag key={hash.name} hashtag={hash} size={size} />
            ))}
        </div>
    )
}

export const HashTag: FC<HashTagProps> = ({ hashtag, size = "m" }) => {
    const icon = icons.find((icon) => icon.name === hashtag.name)
    const messageHandle = useMessage()
    if (hashtag?.link) {
        if (hashtag?.copy) {
            return (
                <div
                    onClick={() => messageHandle(hashtag.link ?? "текст")}
                    className={`${styles.hashtag} ${styles[`hashtag_${size}`]}
                    ${styles.pointer}
                    `}
                >
                    {icon && icon.icon}
                    {hashtag.name}
                </div>
            )
        }
        return (
            <a href={hashtag.link} target="_blank" className={`${styles.hashtag} ${styles[`hashtag_${size}`]}`}>
                {icon && icon.icon}
                {hashtag.name}
            </a>
        )
    }

    return (
        <div className={`${styles.hashtag} ${styles[`hashtag_${size}`]}`}>
            {icon && icon.icon}
            {hashtag.name}
        </div>
    )
}
