import { Post } from "../Post/Post.tsx"
import { PostProps } from "../../types"

import styles from "./PostsList.module.scss"

export const PostsList = ({ data }: { data: PostProps[] }) => {
    return (
        <div className={styles.wrapper}>
            {data.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    )
}
