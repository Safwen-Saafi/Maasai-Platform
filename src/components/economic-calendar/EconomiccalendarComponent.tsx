import React, { useEffect } from 'react';
import styles from './EconomiccalendarComponent.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function EconomiccalendarComponent() {
    useEffect(() => {
        // Load the TradingView Ticker Tape widget
        const tradingViewContainer = document.getElementById('tradingViewWidget');
        if (tradingViewContainer) {
            const tradingViewScript = document.createElement('script');
            tradingViewScript.async = true;
            tradingViewScript.type = 'text/javascript';
            tradingViewScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
            tradingViewScript.innerHTML = JSON.stringify({
                symbols: [
                    { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
                    { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
                    { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
                    { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
                    { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' }
                ],
                showSymbolLogo: true,
                isTransparent: false,
                displayMode: 'adaptive',
                colorTheme: 'dark',
                locale: 'en'
            });

            tradingViewContainer.appendChild(tradingViewScript);
        }

        // Load the TradingView Screener widget
        const tradingViewScreenerContainer = document.getElementById('tradingViewScreenerWidget');
        if (tradingViewScreenerContainer) {
            const tradingViewScreenerScript = document.createElement('script');
            tradingViewScreenerScript.async = true;
            tradingViewScreenerScript.type = 'text/javascript';
            tradingViewScreenerScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
            tradingViewScreenerScript.innerHTML = JSON.stringify({
                width: '100%',
                height: '100%', // Set height to 100% of its container
                defaultColumn: 'overview',
                defaultScreen: 'general',
                market: 'forex',
                showToolbar: true,
                colorTheme: 'dark',
                locale: 'en'
            });

            tradingViewScreenerContainer.appendChild(tradingViewScreenerScript);
        }

        // Load the Economic Calendar widget
        const economicCalendarContainer = document.getElementById('economicCalendarWidget');
        if (economicCalendarContainer) {
            const economicCalendarScript = document.createElement('script');
            economicCalendarScript.async = true;
            economicCalendarScript.type = 'text/javascript';
            economicCalendarScript.setAttribute('data-type', 'calendar-widget');
            economicCalendarScript.src = 'https://www.tradays.com/c/js/widgets/calendar/widget.js?v=13';
            economicCalendarScript.innerHTML = JSON.stringify({ width: '100%', height: '450px', mode: '2', theme: 1 });

            economicCalendarContainer.appendChild(economicCalendarScript);
        }

        // Clean up the scripts when the component is unmounted
        return () => {
            if (tradingViewContainer) {
                tradingViewContainer.innerHTML = '';
            }

            if (tradingViewScreenerContainer) {
                tradingViewScreenerContainer.innerHTML = '';
            }

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
            <div id="tradingViewWidget" className={styles.tradingViewWidget}></div>
            <div id="economicCalendarWidget" className={styles.economicCalendarWidget}></div>
            <div id="tradingViewScreenerWidget" className={styles.tradingViewScreenerWidget}></div>

            <div className={styles.forexCrossRatesWidget}>
                <iframe 
                    src="https://fxpricing.com/fx-widget/forex-cross-rates.php?symbol=EUR,USD,CHF,JPY,GBP,NZD,AED,PKR&fcs_link=hide&click_target=blank&theme=dark&tm-cr=212529&hr-cr=FFFFFF13&flags=circle&font=Arial, sans-serif" 
                    width="100%" 
                    height="370" 
                    style={{ border: '1px solid #eee' }} 
                ></iframe>
            </div>

        </div>
    );
}

export default EconomiccalendarComponent;
