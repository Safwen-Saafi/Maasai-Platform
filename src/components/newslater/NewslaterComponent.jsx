import React from 'react';
import styles from './NewslaterComponent.module.css';
import newslater from '@/assets/newslater.jpg'; // Import the image

function NewslaterComponent() {
    return (
        <section
            style={{
                backgroundImage: `url(${newslater})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className={styles.card}>
                <div className={styles.subscribe}>
                    <h1 className={styles.bluetext}><b>GET OUR NEWSLETTER</b></h1>
                    <h2 className={styles.subscribe__title}>Let's keep in touch</h2>
                    <p className={styles.subscribe__copy}>Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
                    <div className={styles.form}>
                        <input type="email" className={styles.form__email} placeholder="Enter your email address" />
                        <button className={styles.form__button}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewslaterComponent;
