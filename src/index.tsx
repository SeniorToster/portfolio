import { createRoot } from "react-dom/client"
import { App } from "./App.tsx"
import { ThemeContext } from "./context/ThemeContext.tsx"

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)
root.render(
    <ThemeContext>
        <App />
    </ThemeContext>,
)
