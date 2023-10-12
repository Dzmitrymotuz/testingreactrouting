import { useState, useEffect } from "react";




const useFetch = (url)=> {
    const [isPending, setPending] = useState(true);
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch()
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
    }, []);
};

export default useFetch;