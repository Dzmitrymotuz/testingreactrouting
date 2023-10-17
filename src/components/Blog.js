import React from 'react'
import styles from "./Blog.module.css";
import {useState} from 'react';
import Posts from "./Posts";
import { useEffect } from 'react';
import useFetch from '../useFetch';
import { useNavigate, useParams } from 'react-router-dom';

const Blog=()=>{
    const [isPending, setPending] = useState(true);
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [searchtext, setSearchText] = useState('')



    useEffect(()=>{
        console.log('refreshed')
        setTimeout(()=>{
            fetch('http://localhost:8000/posts')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                var reversedPosts = [...data].reverse()
                setPosts(reversedPosts);
                setPending(false);
            })
            .catch( err => {
                setPending(false)
                setError(err.message)
                console.log(err.message);
            })
        }, 1000);
    }, []);

    const search=()=>{
        const filteredPosts = posts.filter(post => {
            return post.title.toLowerCase().includes(searchtext.toLowerCase());
        });
        setPosts(filteredPosts);
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
            <div>
                <input onChange={(e)=>setSearchText(e.target.value)} value={searchtext}></input>
                <button onClick={()=>search()}>Search</button>
            </div>
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