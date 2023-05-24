import React, { useState } from "react"

import { PostsList } from "../PostsList/PostsList.tsx"
import styles from "./Tabs.module.scss"
import { type TabsProps } from "../../types"

import projects from "../../config/projects.json"
import posts from "../../config/posts.json"

export const Tabs = () => {
    const [currentTab, setCurrentTab] = useState("1")

    const tabsInit: TabsProps[] = [
        {
            id: "1",
            tabTitle: "Новости",
            content: <PostsList data={posts} />,
        },
        {
            id: "2",
            tabTitle: "Проекты",
            content: <PostsList data={projects} />,
        },
        {
            id: "3",
            tabTitle: "Обо мне",
            content: <PostsList data={projects} />,
        },
        {
            id: "4",
            tabTitle: "Контакты",
            content: <PostsList data={projects} />,
        },
    ]

    const handleTabClick = (e: React.MouseEvent): void => {
        setCurrentTab(e.currentTarget.id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {tabsInit.map((tab) => (
                    <div
                        className={`${styles.tab_item} ${currentTab === tab.id && styles.tab_item_active}`}
                        key={tab.id}
                        id={tab.id}
                        onClick={handleTabClick}
                    >
                        <div>
                            <span>
                                {tab.tabTitle}
                                {currentTab === tab.id && <div></div>}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {tabsInit.map((tab) => (
                    <div key={tab.id}>{currentTab === `${tab.id}` && <div>{tab.content}</div>}</div>
                ))}
            </div>
        </div>
    )
}
