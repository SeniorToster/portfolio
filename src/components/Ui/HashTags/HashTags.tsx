import {
    SiAdobephotoshop,
    SiAntdesign,
    SiAxios,
    SiCodewars,
    SiCss3,
    SiDiscord,
    SiDocker,
    SiExpress,
    SiFigma,
    SiGit,
    SiGithub,
    SiGmail,
    SiHtml5,
    SiInstagram,
    SiIntellijidea,
    SiJavascript,
    SiJsonwebtokens,
    SiMui,
    SiNginx,
    SiNodedotjs,
    SiNpm,
    SiPostgresql,
    SiPostman,
    SiReact,
    SiReactrouter,
    SiRedux,
    SiSass,
    SiSequelize,
    SiSqlite,
    SiTelegram,
    SiTwitch,
    SiTypescript,
    SiVisualstudiocode,
    SiVk,
    SiWebpack,
} from "react-icons/si"

import styles from "./HashTags.module.scss"
import { FC } from "react"
import { useMessage } from "../../../hooks/useMessage/useMessage.tsx"

const icons = [
    { icon: <SiJavascript color={"#efd81d"} />, name: "JavaScript" },
    { icon: <SiHtml5 color={"#d84923"} />, name: "Html" },
    { icon: <SiSass color={"#c36192"} />, name: "Sass" },
    { icon: <SiSass color={"#c36192"} />, name: "Scss" },
    { icon: <SiReact color={"#5ccfee"} />, name: "React" },
    { icon: <SiRedux color={"#7046b2"} />, name: "Redux ToolKit" },
    { icon: <SiAntdesign color={"#1897f1"} />, name: "AntDesign" },
    { icon: <SiNodedotjs color={"#4f9640"} />, name: "NodeJS" },
    { icon: <SiExpress color={"#7b7b7b"} />, name: "ExpressJS" },
    { icon: <SiPostgresql color={"#2f5c8b"} />, name: "PostgresQL" },
    { icon: <SiSequelize color={"#02a6e3"} />, name: "Sequelize" },
    { icon: <SiReactrouter color={"#c5021a"} />, name: "ReactRouter" },
    { icon: <SiDiscord color={"#5460e6"} />, name: "discordJS" },
    { icon: <SiCss3 color={"#2fa2d3"} />, name: "Css" },
    { icon: <SiTypescript color={"#2f72bc"} />, name: "TypeScript" },
    { icon: <SiAxios color={"#5527d8"} />, name: "Axios" },
    { icon: <SiMui color={"#0079f2"} />, name: "Mui" },
    { icon: <SiWebpack color={"#1b72b6"} />, name: "WebPack" },
    { icon: <SiSqlite color={"#55aadb"} />, name: "SQLite" },
    { icon: <SiJsonwebtokens />, name: "JWT" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiGit color={"#e44c30"} />, name: "Git" },
    { icon: <SiDocker color={"#228ee1"} />, name: "Docker" },
    { icon: <SiNginx color={"#008e36"} />, name: "Nginx" },
    { icon: <SiNpm color={"#c13534"} />, name: "Npm" },
    { icon: <SiPostman color={"#f26635"} />, name: "Postman" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiAdobephotoshop color={"#2176b8"} />, name: "Photoshop" },
    { icon: <SiVisualstudiocode color={"#23a0e6"} />, name: "VSCode" },
    { icon: <SiIntellijidea />, name: "Idea" },

    { icon: <SiDiscord color={"#525de9"} />, name: "Discord" },
    { icon: <SiVk color={"#0071f2"} />, name: "VK" },
    { icon: <SiTelegram color={"#27a0de"} />, name: "Telegram" },
    { icon: <SiGmail color={"#b83728"} />, name: "Gmail" },
    { icon: <SiInstagram />, name: "Instagram" },
    { icon: <SiTwitch color={"#8a42f2"} />, name: "Twitch" },
    { icon: <SiDiscord color={"#525de9"} />, name: "My Discord Server" },
    { icon: <SiCodewars color={"#a8331c"} />, name: "CodeWars" },
]

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
