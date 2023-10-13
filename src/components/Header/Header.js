import styles from './Header.module.css'
import { useEffect, useState } from 'react'

const Header=()=>{
    const [quote_request, setQuoteRequest] = useState({author: 'Dimka', category: null, quote: 'Loading'})

    useEffect(()=>{
        fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
            method: 'GET',
            headers: {'X-Api-Key': 'PnsZkJqWOLcXD43Rjq2k8Q==R0fvaPFZioY2HLn5'}
        })
        .then((res)=>{
            if (!res.ok){
                return new Error('Network response failed');
            }
           return res.json()
        })
        .then((data)=>{setQuoteRequest(data[0])})
        .catch((error)=>{
            console.error('Error', error);
        });
    }, []);

    return (<div className={styles.header}>
        <h3>Dimka's blog</h3>
        <div className={styles.headerquote}>
            
        </div>
        <div className={styles.rightitems}>
        <a href='/'>Home</a>
        <a href='/blog/new'>New Blog</a>
        <a href='https://github.com/Dzmitrymotuz'>GitHub</a>
        </div>
    </div>
    
    )
}

export default Header;