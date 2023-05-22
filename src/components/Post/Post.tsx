import { HiOutlineHeart } from "react-icons/hi";

import main from '../../config/main.json'
import styles from './Post.module.scss'
interface PropsPost {
    id: string,
    timestamp_at: string,
    text: string,
    title: string,
    img: string,
    hashtag: string
}
export const Post = ({title, text,img, timestamp_at, hashtag}  :PropsPost) => {
   const {avatar, name}= main

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__avatar}>
                <img src={avatar} alt='аватар' />
            </div>
            <div className={styles.wrapper__infobox}>
                <div className={styles.wrapper__namebox}>
                    <h4>
                    {name.split(" ")[0]} ✨
                    </h4>
                    <span>•</span>
                    <p>
                    {timestamp_at}
                    </p>
                </div>
                <div className={styles.wrapper__hashtags}><p>{hashtag}</p></div>
                {title && <h2>{title}</h2>}
                <p className={styles.wrapper__text}>
                    {text}
                </p>
                <img className={styles.wrapper__img} src={img} alt='text'/>
                <div className={styles.wrapper__iconsbox} >
                    <div><HiOutlineHeart/></div>
                </div>
            </div>
        </div>
    );
};