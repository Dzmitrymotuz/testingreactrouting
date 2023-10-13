import React from 'react'
import styles from "./Posts.module.css";
import { Link } from 'react-router-dom';

const Posts=({post, index, handleDelete})=>{

    return (
        <div key={index} className={styles.post}>
        <Link to={`/blog/${post.id}`}>
        <p className={styles.title}>{post.title}</p>
        </Link>
        <div className={styles.content}>{post.body}</div>
        <div className={styles.metainfo}>
            <div>
                {post.author && <p>Written by {post.author}</p>}
            </div>
            <div>
            <button className={styles.delete} type='delete' onClick={()=>handleDelete(post)}>Delete</button>
            </div>
        </div>
        </div>
    )
}

export default Posts;