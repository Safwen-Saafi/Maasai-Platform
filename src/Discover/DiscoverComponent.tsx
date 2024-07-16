import React from 'react'
import styles from './DiscoverComponent.module.css';
// Imported assets 
import discover from './discover.png';

function DiscoverComponent() {
    return (
        <section className={styles.discover} style={{ backgroundImage: `url(${discover})`, height: '90vh', width: '100vw' }}>
            <div className={styles.text}>
                <b>Discover global markets. <br />
                Join traders and investors shaping their financial futures.</b>
            </div>
            <div className={styles.button}>
                <button>Explore Features</button>
            </div>
        </section>
    )
}

export default DiscoverComponent;