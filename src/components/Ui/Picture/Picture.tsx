import styles from "./Picture.module.scss"
import { FC } from "react"

interface PictureProps {
    video?: string
    img?: string
}

export const Picture: FC<PictureProps> = ({ video, img }) => {
    return (
        <>
            {img && <img className={styles.picture} src={img} loading={"lazy"} alt="text" />}
            {video && (
                <iframe
                    width="100%"
                    height="300px"
                    className={styles.picture}
                    src="https://www.youtube.com/embed/qt2twvVAfBg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
        </>
    )
}
