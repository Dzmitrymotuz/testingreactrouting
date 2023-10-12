import React from 'react'
import styles from "./Posts.module.css";

const Posts=({post, posts, setPosts, index, handleDelete})=>{

    return (
        <div key={index} className={styles.post}>
        <p className={styles.title}>{post.title}</p>
        <div className={styles.content}>{post.body}</div>
        <button className={styles.delete} type='delete' onClick={()=>handleDelete(post)}>Delete</button>
        </div>
    )
}

export default Posts;