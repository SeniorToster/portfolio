import { HiOutlineHeart, HiLink } from "react-icons/hi"
import { SiGithub } from "react-icons/si"

import main from "../../config/main.json"
import styles from "./Post.module.scss"
import { type PostProps } from "../../types"
import { HashTags } from "../Ui/HashTags/HashTags.tsx"

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

                {title && <h2>{title}</h2>}
                <HashTags hashtags={hashtag} />
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
