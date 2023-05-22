import {useState} from "react";
import {PostsList} from "../PostsList/PostsList.tsx";
import styles from './Tabs.module.scss'

export const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1');
    console.log(currentTab)
    const tabs = [
        {
            id: '1',
            tabTitle: 'Новости',
            content: <PostsList/>
        },
        {
            id: '2',
            tabTitle: 'Проекты',
            content: ' 2.'
        },
        {
            id: '3',
            tabTitle: 'Обо мне',
            content: 'Title 3',
        },        {
            id: '3',
            tabTitle: 'Контакты',
            content: 'Title 3',
        },
    ];

    const handleTabClick = (e: any) :void => {
        setCurrentTab(e.currentTarget.id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {tabs.map(tab =>
                    <div
                        className={`${styles.tab_item} ${currentTab === tab.id && styles.tab_item_active}`}
                        key={tab.id}
                        id={tab.id}
                        onClick={handleTabClick}>
                            <div>
                                <span>
                                    {tab.tabTitle}
                                    {currentTab === tab.id && <div></div>}
                                </span>

                            </div>
                    </div>
                )}
            </div>
            <div>
                {tabs.map((tab) =>
                    <div key={tab.id}>
                        {currentTab === `${tab.id}` && <div>{tab.content}</div>}
                    </div>
                )}
            </div>
        </div>
    );
};