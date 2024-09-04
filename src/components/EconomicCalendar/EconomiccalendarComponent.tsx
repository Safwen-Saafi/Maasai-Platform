import React, { useEffect } from 'react';
import styles from './EconomiccalendarComponent.module.css';


function EconomiccalendarComponent() {
    useEffect(() => {
        // Load the Economic Calendar widget
        const economicCalendarContainer = document.getElementById('economicCalendarWidget');
        if (economicCalendarContainer) {
            const economicCalendarScript = document.createElement('script');
            economicCalendarScript.async = true;
            economicCalendarScript.type = 'text/javascript';
            economicCalendarScript.setAttribute('data-type', 'calendar-widget');
            economicCalendarScript.src = 'https://www.tradays.com/c/js/widgets/calendar/widget.js?v=13';
            economicCalendarScript.innerHTML = JSON.stringify({ width: '90%', height: '450px', mode: '2', theme: 1 });
            economicCalendarContainer.appendChild(economicCalendarScript);
        }
        // Clean up the scripts when the component is unmounted
        return () => {
            if (economicCalendarContainer) {
                economicCalendarContainer.innerHTML = '';
            }
        };
    }, []);
    return (
        <div className={styles.economicCalendarContainer}>
            <h2 className={styles.title}>
                <span className={styles.economic}>ECONOMIC</span> <span className={styles.calendar}>CALENDAR</span>
            </h2>
            <div id="economicCalendarWidget" className={styles.economicCalendarWidget}></div>
        </div>
    );
}

export default EconomiccalendarComponent;
