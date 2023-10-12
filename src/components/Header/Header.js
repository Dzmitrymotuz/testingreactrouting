import styles from './Header.module.css'

const Header=()=>{
    return (<div className={styles.header}>
        <h3>Dimka's blog</h3>
        <div className={styles.rightitems}>
        <a href='/'>Home</a>
        <a href='/blog'>Blog</a>
        <a href='https://github.com/Dzmitrymotuz'>GitHub</a>
        </div>
    </div>

    )
}

export default Header;