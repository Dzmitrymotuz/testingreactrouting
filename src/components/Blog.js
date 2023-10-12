import React from 'react'
import styles from "./Blog.module.css";
import {useState} from 'react';
import Posts from "./Posts";
import { useEffect } from 'react';
import useFetch from '../useFetch';

const Blog=()=>{
    // const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

    const [isPending, setPending] = useState(true);
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/posts')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setPosts(data);
                setPending(false);
            })
            .catch( err => {
                setPending(false)
                setError(err.message)
                console.log(err.message);
            })
        }, 1000);

        return ()=>console.log('cleanup');
    }, []);

    const handleChange=(e)=>{
        setText(e.target.value);
    }
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const newPost = {
            id: posts.length + 1,
            title: title,
            body: text,
        }
        setPosts([... posts, newPost])
        setText('');
        setTitle('');
    }
    const handleDelete=(post)=>{
        const newPosts = posts.filter(deletingPost => post !== deletingPost);
        setPosts(newPosts);
    }

    return (<div>
        <div className={styles.textArea}>
            <form onSubmit={handleSubmit}>
            <div>
            <input placeholder="Title" value={title} className={styles.title} onChange={handleTitle}/>
            </div>
            <textarea placeholder='Content...' type="text" className={styles.text} value={text} onChange={handleChange}/>
            <button type="submit" className={styles.btn}>Create post</button>
            </form>
        </div>
        {isPending && <div className={styles.loading}>Loading...</div>}
        {posts && posts.map((post, index)=>(
            <Posts 
            handleDelete={handleDelete} 
            key={index} 
            post={post} 
            posts={posts} 
            setPosts={setPosts} 
            index={index}></Posts>
        ))}
    </div>)
}

export default Blog;