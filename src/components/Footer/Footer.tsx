import style from "./Footer.module.scss"
import { IconWrapper } from "../Ui/IconWrapper/IconWrapper.tsx"
import { useMessage } from "../../hooks/useMessage/useMessage.tsx"
import { footer } from "../../config/links.json"
import { icons } from "../../helpes/iconsArr.tsx"

export const Footer = () => {
    const messageHandle = useMessage()

    return (
        <footer className={style.footer}>
            <div className={style.footer__wrapperIcons}>
                {footer.map((item) => {
                    const icon = icons.find((icon) => icon.name === item.name)
                    return item.copy ? (
                        <div key={item.name} onClick={() => messageHandle(item.link)}>
                            <IconWrapper title={`профиль в ${item.name}`}>{icon?.iconDef}</IconWrapper>
                        </div>
                    ) : (
                        <a key={item.name} href={item.link} target="_blank">
                            <IconWrapper title={`профиль в ${item.name}`}>{icon?.iconDef}</IconWrapper>
                        </a>
                    )
                })}
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
