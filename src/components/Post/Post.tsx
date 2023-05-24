import { HiOutlineHeart, HiLink } from "react-icons/hi"
import {
    SiGithub,
    SiJavascript,
    SiHtml5,
    SiSass,
    SiReact,
    SiRedux,
    SiAntdesign,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiSequelize,
    SiReactrouter,
    SiDiscord,
} from "react-icons/si"

import main from "../../config/main.json"
import styles from "./Post.module.scss"
import { type PostProps } from "../../types"

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
]

export const Post = ({ video, title, text, img, timestampAt, hashtag, siteLink, githubLink }: PostProps) => {
    const { avatar, name } = main

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__avatar}>
                <img src={avatar} alt="аватар" />
            </div>
            <div className={styles.wrapper__infobox}>
                <div className={styles.wrapper__namebox}>
                    <h4>{name.split(" ")[0]} ✨</h4>
                    <span>•</span>
                    <p>{timestampAt}</p>
                </div>
                <div className={styles.wrapper__hashtags}>
                    {hashtag.map((hash) => {
                        const icon = icons.find((icon) => icon.name === hash)
                        if (icon)
                            return (
                                <div key={hash}>
                                    {icon.icon}
                                    {icon.name}
                                </div>
                            )
                        return <div key={hash}>{hash}</div>
                    })}
                </div>
                {title && <h2>{title}</h2>}
                <p className={styles.wrapper__text}>{text}</p>
                {img && <img className={styles.wrapper__img} src={img} loading={"lazy"} alt="text" />}
                {video && (
                    <iframe
                        width="100%"
                        height="300px"
                        frameBorder={0}
                        className={styles.wrapper__img}
                        src="https://www.youtube.com/embed/qt2twvVAfBg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
                <div className={styles.wrapper__iconsbox}>
                    {githubLink && (
                        <a href={githubLink} target="_blank">
                            <SiGithub title={"Репозиторий проекта"} />
                        </a>
                    )}
                    {siteLink && (
                        <a href={siteLink} target="_blank">
                            <HiLink title={"Демо проекта"} />
                        </a>
                    )}
                    <div>
                        <HiOutlineHeart />
                    </div>
                </div>
            </div>
        </div>
    )
}
