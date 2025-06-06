import { useNavigate } from "react-router";
import Icon from '../../assets/logo-icon.svg';

import styles from './Logo.module.css';
import { useState } from "react";

function Logo() {
    const navigate = useNavigate();
    const [fillColor, setFillColor] = useState("#43B9AA");

    const colors = ["#43B9AA", "#8A2BE2"];

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div 
            className={styles.logoContainer}
            onMouseEnter={() => setFillColor(colors[1])}
            onMouseLeave={() => setFillColor(colors[0])}
            onClick={handleClick}
        >
            AlgoLib
            {/* <img src={Icon} alt="AlgoLib logo icon" /> */}
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.625 5.625H9.375V9.375H5.625V5.625Z" fill={fillColor}/>
                <path d="M5.625 13.125H16.875V16.875H5.625V13.125Z" fill={fillColor}/>
                <path d="M5.625 20.625H24.375V24.375H5.625V20.625Z" fill={fillColor}/>
                <path d="M5.625 28.125H31.875V31.875H5.625V28.125Z" fill={fillColor}/>
                <path d="M5.625 35.625H39.375V39.375H5.625V35.625Z" fill={fillColor}/>
            </svg>
        </div>
    );
}

export default Logo;