import { NavLink } from "react-router";
import Logo from "../../components/logo/Logo";
import Button from "../../components/button/Button";

import styles from './Header.module.css';

function Header() {
    const navLinks = [
        {to: "/news", text: "News"},
        {to: "/algorithms", text: "Algorithms"},
        {to: "/about", text: "About"},
        {to: "/api", text: "API"},
    ];

    return (
        <header className={styles.headerContainer}>
            <Logo />
            <nav>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.text}>
                            <NavLink to={link.to}>{link.text}</NavLink>
                        </li>
                    ))
                    }
                </ul>
            </nav>
            <Button text={"Sign In"} handleClick={() => {console.log("login")}}/>
        </header>
    );
}

export default Header;