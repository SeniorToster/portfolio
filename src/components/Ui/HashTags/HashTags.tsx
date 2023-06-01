import {
    SiAdobephotoshop,
    SiAntdesign,
    SiAxios,
    SiCss3,
    SiDiscord,
    SiDocker,
    SiExpress,
    SiFigma,
    SiGit,
    SiGithub,
    SiHtml5,
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
    SiTypescript,
    SiVisualstudiocode,
    SiWebpack,
} from "react-icons/si"

import styles from "./HashTags.module.scss"
import { FC } from "react"

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
]
type Size = "m" | "l"

interface HashTagsProps {
    hashtags: string[]
    size?: Size
}

export const HashTags: FC<HashTagsProps> = ({ hashtags, size = "m" }) => {
    return (
        <div className={`${styles.wrapper} ${styles[`wrapper_${size}`]}`}>
            {hashtags.map((hash) => {
                const icon = icons.find((icon) => icon.name === hash)
                return (
                    <div key={hash} className={`${styles.hashtag} ${styles[`hashtag_${size}`]}`}>
                        {icon && icon.icon}
                        {hash}
                    </div>
                )
            })}
        </div>
    )
}
