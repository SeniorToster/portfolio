import { HiOutlineHeart, HiLink } from "react-icons/hi"
import { SiGithub } from "react-icons/si"

import main from "../../config/main.json"
import styles from "./Post.module.scss"
import { type PostProps } from "../../types"
import { HashTags } from "../Ui/HashTags/HashTags.tsx"
import { Picture } from "../Ui/Picture/Picture.tsx"

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
                <HashTags hashtags={hashtag} />
                {title && <h2>{title}</h2>}
                <p className={styles.wrapper__text}>{text}</p>
                <Picture video={video} img={img} />
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
