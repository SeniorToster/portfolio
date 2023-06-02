import { HiBadgeCheck } from "react-icons/hi"

import main from "../../config/main.json"
import styles from "./Main.module.scss"
import { InfoIcons, Info } from "../Ui/InfoIcons/InfoIcons.tsx"

export interface MainJSON {
    banner: string[]
    name: string
    nickname: string
    avatar: string
    description: string
    info: Info[]
}

export const Main = () => {
    const { banner, name, avatar, nickname, description, info } = main as MainJSON
    return (
        <>
            <img className={styles.banner} src={banner[0]} alt="баннер" />
            <div className={styles.wrapper}>
                <img className={styles.wrapper__avatar} src={avatar} alt="аватар" />
                <a href="mailto:seralek04@gmail.com" className={styles.wrapper__send}>
                    <button>Напиши</button>
                </a>
                <div>
                    <h2 className={styles.wrapper__fullName}>
                        {name} <HiBadgeCheck />
                    </h2>
                    <h4 className={styles.wrapper__nickname}>@{nickname}</h4>
                    <p className={styles.wrapper__text}>{description}</p>
                </div>
                <InfoIcons infoArray={info} />
            </div>
        </>
    )
}
