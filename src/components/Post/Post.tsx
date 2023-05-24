import { HiOutlineHeart, HiLink } from "react-icons/hi"
import { SiGithub, SiJavascript, SiHtml5, SiSass, SiReact, SiRedux } from "react-icons/si"

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
]

export const Post = ({ title, text, img, timestampAt, hashtag, siteLink, githubLink }: PostProps) => {
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
                <img className={styles.wrapper__img} src={img} loading={"lazy"} alt="text" />
                <div className={styles.wrapper__iconsbox}>
                    {githubLink && (
                        <a href={githubLink} target="_blank">
                            <SiGithub />
                        </a>
                    )}
                    {siteLink && (
                        <a href={siteLink} target="_blank">
                            <HiLink />
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
