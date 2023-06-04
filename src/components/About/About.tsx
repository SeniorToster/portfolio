import about from "../../config/about.json"
import { HashTags } from "../Ui/HashTags/HashTags.tsx"
import styles from "./About.module.scss"
import { Picture } from "../Ui/Picture/Picture.tsx"
export const About = () => {
    const { title, text, FrontEnd, BackEnd, DevOps, Other, BaseLang, img, ps, imgPs } = about
    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
            <p>{text}</p>
            <Picture img={img} />
            <div>
                <h3>Основной язык программирования</h3>

                <HashTags hashtags={BaseLang} size="l" />
            </div>
            <div>
                <h3>FrontEnd</h3>
                <HashTags hashtags={FrontEnd} size="l" />
            </div>
            <div>
                <h3>BackEnd</h3>
                <HashTags hashtags={BackEnd} size="l" />
            </div>
            <div>
                <h3>DevOps</h3>
                <HashTags hashtags={DevOps} size="l" />
            </div>
            <div>
                <h3>Остальное</h3>
                <HashTags hashtags={Other} size="l" />
            </div>
            <h3>Постскриптум</h3>
            <p>{ps}</p>
            <Picture img={imgPs} />
        </div>
    )
}
