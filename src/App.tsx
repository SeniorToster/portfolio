import './styles/index.scss'
import {Layout} from "./components/Layout/Layout.tsx";
import {Main} from "./components/Main/Main.tsx";

export const App = () => {
    return (
        <div className='app'>
            <Layout>
                <Main/>
                portfolio
            </Layout>
        </div>
    );
};