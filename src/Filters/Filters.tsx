import { PostProps } from "../types"
import React, { FC } from "react"
import styles from "./Filters.module.scss"
import { TbArrowsSort } from "react-icons/tb"

interface FiltersProps {
    posts: PostProps[]
    setPosts: React.Dispatch<React.SetStateAction<PostProps[]>>
}

export const Filters: FC<FiltersProps> = ({ posts, setPosts }) => {
    const sortPostHandle = () => {
        if (Number(posts[0].id) === 1) {
            setPosts([...posts].sort((a, b) => Number(b.id) - Number(a.id)))
        } else {
            setPosts([...posts].sort((a, b) => Number(a.id) - Number(b.id)))
        }
    }

    return (
        <div className={styles.filters}>
            <div onClick={sortPostHandle} title={"сортировка по дате"}>
                <p> {posts[0].id === "1" ? "актуальные" : "с начала"}</p>
                <TbArrowsSort title={"сортировка по дате"} />
            </div>
        </div>
    )
}
