import React from 'react'
import styles from "./Blog.module.css";
import {useState} from 'react';
import Posts from "./Posts";
import { useEffect } from 'react';
import useFetch from '../useFetch';
import { useNavigate } from 'react-router-dom';

const Blog=()=>{
    const [isPending, setPending] = useState(true);
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')


    useEffect(()=>{
        console.log('refreshed')
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
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (confirmDelete){
            fetch('http://localhost:8000/posts/' + post.id, {
            method: 'DELETE'
        }).then(()=>{
            console.log(post.id + 'has been deleted')
            window.location.reload();
        })}
    }

    return (<div>
        {isPending && <div className={styles.loading}>Loading...</div>}
        {posts && posts.map((post, index)=>(
            <Posts 
            handleDelete={handleDelete} 
            key={post.id} 
            post={post}  
            index={index}></Posts>
        ))}
    </div>)
}

export default Blog;