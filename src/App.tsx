import './styles/index.scss'
import {Layout} from "./components/Layout/Layout.tsx";
import {Main} from "./components/Main/Main.tsx";
import {Tabs} from "./components/Tabs/Tabs.tsx";

export const App = () => {
    return (
        <div className='app dark'>
            <Layout>
                <Main/>
                <Tabs/>

            </Layout>
        </div>
    );
};