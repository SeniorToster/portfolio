import { HiCake, HiLink, HiCalendar, HiBriefcase, HiBadgeCheck } from "react-icons/hi"

import main from "../../config/main.json"
import styles from "./Main.module.scss"

export const Main = () => {
    const { banner, name, avatar, nickname, description } = main

    return (
        <>
            <img className={styles.banner} src={banner} alt="баннер" />
            <div className={styles.wrapper}>
                <img className={styles.avatar} src={avatar} alt="аватар" />
                <a href="mailto:seralek04@gmail.com" className={styles.send}>
                    <button>Напиши</button>
                </a>
                <div className={styles.container_texts}>
                    <h2>
                        {name} <HiBadgeCheck />
                    </h2>
                    <h4 className={styles.nickname}>@{nickname}</h4>
                    <p>{description}</p>
                </div>
                <div className={styles.icons}>
                    <div>
                        <HiBriefcase />
                        <p>свободный</p>
                    </div>
                    <div>
                        <HiLink />
                        <a className={styles.link} href={"https://github.com/SeniorToster"}>
                            /GitHub
                        </a>
                    </div>
                    <div>
                        <HiCake />
                        <p>4 окт</p>
                    </div>
                    <div>
                        <HiCalendar />
                        <p>программирую с авг 2022 г.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
