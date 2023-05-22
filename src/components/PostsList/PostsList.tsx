import posts from '../../config/posts.json'
import {Post} from "../Post/Post.tsx";

export const PostsList = () => {
    return (
        <div>
            {posts.map(post => <Post key={post.id} {...post}/>) }
        </div>
    );
};