import Footer from "../footer/Footer";
import Header from "../header/Header";

import styles from './DefaultLayout.module.css';

function DefaultLayout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;