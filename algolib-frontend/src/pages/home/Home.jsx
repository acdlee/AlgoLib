import { useNavigate } from 'react-router';

import Button from './../../components/button/Button';

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
                    <h2>Fast & Correct</h2>
                    <p>
                        Algorithms are verified by mathematical 
                        proofs to ensure speed and correctness.
                    </p>
                </div>
                <div>
                    <h2>Easy & Accessible</h2>
                    <p>
                        Access and interface with our algorithms 
                        seamlessly through our API.
                    </p>
                </div>
                <div>
                    <h2>New & Evolving</h2>
                    <p>
                        We're always on the lookout for new algorithms and
                        improvements of old algorithms; contact us for inquiries.
                    </p>
                </div>
            </section>
        </>

    );
}

export default Home;