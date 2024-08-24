import styles from './AboutComponent.module.css';
// Imported assets 
import about_bg from './about_bg.png';

function AboutComponent() {
    return (
        <div className={styles.about_us} style={{ backgroundImage: `url(${about_bg})`, height: '100vh', width: '100vw' }}>
            <div className={styles.about}>
                <h1>
                    <span className={styles.who}>WHO WE </span><span className={styles.are}>ARE</span>
                </h1>
                <p className={styles.paragraph}>
                    Maasai Dashboard is an advanced trading platform that provides traders 
                    with top-notch analysis and decision-making tools. Our mission is to simplify 
                    trading with an intuitive interface and robust features for all levels of traders.  
                    Combining innovative technology with deep market expertise, we enhance trading 
                    efficiency and profitability. Committed to exceptional user experience, we offer quality
                    customer service and personalized solutions to meet every trader's needs.
                </p>
            </div>
        </div>
    );
}

export default AboutComponent;
