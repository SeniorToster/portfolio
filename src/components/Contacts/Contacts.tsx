import styles from "./Contacts.module.scss"
import links from "../../config/links.json"
import { HashTags } from "../Ui/HashTags/HashTags.tsx"
export const Contacts = () => {
    const { title, text, social, program } = links
    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
            <p>{text}</p>
            <div>
                <h3>Соц. сети</h3>
                <HashTags hashtags={social} size="l" />
            </div>
            <div>
                <h3>Программирование</h3>
                <HashTags hashtags={program} size="l" />
            </div>
        </div>
    )
}
