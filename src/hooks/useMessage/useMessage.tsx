import styles from "./useMessage.module.scss"

export const useMessage = () => {
    return function (text: string) {
        navigator.clipboard.writeText(text).then(() => {
            const root = document.querySelector(".app")!
            const message = document.createElement("div")
            message.innerHTML = `Скоприровано <p>${text}</p>`

            message.classList.add(styles.message)
            root.prepend(message)

            setTimeout(() => {
                message.remove()
            }, 5000)
        })
    }
}
