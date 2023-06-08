import { Post } from "../Post/Post.tsx"
import { PostProps } from "../../types"

import styles from "./PostsList.module.scss"
import { useState } from "react"
import { Filters } from "../Filters/Filters.tsx"

export const PostsList = ({ data }: { data: PostProps[] }) => {
    const [posts, setPosts] = useState<PostProps[]>(data)

    return (
        <div className={styles.wrapper}>
            <Filters posts={posts} setPosts={setPosts} />

            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    )
}
