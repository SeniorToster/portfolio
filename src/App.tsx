import "./styles/index.scss"
import { Layout } from "./components/Layout/Layout.tsx"
import { Main } from "./components/Main/Main.tsx"
import { Tabs } from "./components/Tabs/Tabs.tsx"
import { type FC, useContext } from "react"
import { themeContext } from "./context/ThemeContext.tsx"

export const App: FC = () => {
    const { theme } = useContext(themeContext)

    return (
        <div className={`app ${theme}`}>
            <Layout>
                <Main />
                <Tabs />
            </Layout>
        </div>
    )
}
