import { useNavigate } from 'react-router';

import Button from './../../components/button/Button';

import SpeedIcon from '../../assets/speed-icon.svg';
import BuildIcon from '../../assets/build-icon.svg';
import EvolveIcon from '../../assets/evolve-icon.svg';
import BjarnePP from '../../assets/bjarne-pp.webp';
import QuoteIcon from '../../assets/quotemark.svg';
import styles from './Home.module.css';

function Home() {
    const navigate = useNavigate();

    const exploreBtnClick = () => {
        navigate('/explore');
    };

    return (
        <>
            <section className={styles.intro}>
                <h1>Everyday<br />Algorithms</h1>
                <Button text={"Explore"} handleClick={exploreBtnClick} />
                <Button text={"Sign up with Google"} handleClick={() => console.log("google")} />
            </section>
            <section className={styles.info}>
                <div>
                    <img src={SpeedIcon} alt="A flame to represent speed" />
                    <h2>Fast & Correct</h2>
                    <p>
                        Algorithms are verified by mathematical 
                        proofs to ensure speed and correctness.
                    </p>
                </div>
                <div>
                    <img src={BuildIcon} alt="Building blocks" />
                    <h2>Easy & Accessible</h2>
                    <p>
                        Access and interface with our algorithms 
                        seamlessly through our API.
                    </p>
                </div>
                <div>
                    <img src={EvolveIcon} alt="Up arrow" />
                    <h2>New & Evolving</h2>
                    <p>
                        We're always on the lookout for new algorithms and
                        improvements of old algorithms; contact us for inquiries.
                    </p>
                </div>
            </section>
            <section className={styles.quotes}>
                <div>
                    <p>
                        <img className={styles.quoteIcon} src={QuoteIcon} alt="Quote Icon" />
                        <span><q>
                            A clean, thoughtful resource. The API is practical, and the 
                            algorithm insights are well-presented—clearly built by 
                            someone who respects both clarity and efficiency.
                        </q></span> <br />
                        — Bjarne Stroustrup, Creator of C++
                    </p>
                    <img className={styles.ppImg} src={BjarnePP} alt="Bjarne Stroustrup" />
                </div>
            </section>
        </>

    );
}

export default Home;