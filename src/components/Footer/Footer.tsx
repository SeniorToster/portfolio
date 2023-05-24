import style from "./Footer.module.scss"
import { SiDiscord, SiVk, SiGithub } from "react-icons/si"
import { HiMail } from "react-icons/hi"
import { IconWrapper } from "../Ui/IconWrapper/IconWrapper.tsx"
import { useState } from "react"

export const Footer = () => {
    const [copyAccess, setCopyAccess] = useState(false)
    const onCopyHandle = () => {
        const copyText = "Госпожа  Тостерита#8888"
        navigator.clipboard.readText().then((text) => {
            if (copyText !== text) {
                navigator.clipboard.writeText(copyText).then(() => {
                    setCopyAccess((prevState) => !prevState)
                    setTimeout(() => setCopyAccess((prevState) => !prevState), 2000)
                })
            }
        })
    }

    return (
        <footer className={style.footer}>
            <div className={style.footer__wrapperIcons}>
                <a href="mailto:seralek04@gmail.com">
                    <IconWrapper title={"моя почта"}>
                        <HiMail />
                    </IconWrapper>
                </a>
                <div onClick={onCopyHandle}>
                    {copyAccess && <div className={style.footer__copy}>Скопировано!</div>}
                    <IconWrapper title={"мой профиль в Discord"}>
                        <SiDiscord />
                    </IconWrapper>
                </div>
                <a href="https://github.com/SeniorToster" target="_blank">
                    <IconWrapper title={"мой профиль на GitHub"}>
                        <SiGithub />
                    </IconWrapper>
                </a>

                <a href="https://vk.com/id150518422" target="_blank">
                    <IconWrapper title={"мой страничка VK"}>
                        <SiVk />
                    </IconWrapper>
                </a>
            </div>

            <div className={style.footer__corp}>
                <p>
                    made by a <span>Toster</span>
                </p>
                <p>©{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}
