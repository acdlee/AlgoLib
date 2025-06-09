import styles from './Footer.module.css';

function Footer() {
    const copyrightYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            Copyright &copy; {copyrightYear} &nbsp;
            <a href="https://github.com/acdlee" target="_blank">acdlee</a>
            . All Rights Reserved.
        </footer>
    );
}

export default Footer;