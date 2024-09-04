import { useEffect } from 'react';
import styles from './Currency.module.css';


function Currency() {
    useEffect(() => {
        // Load the TradingView Screener widget
        const tradingViewScreenerContainer = document.getElementById('tradingViewScreenerWidget');
        if (tradingViewScreenerContainer) {
            const tradingViewScreenerScript = document.createElement('script');
            tradingViewScreenerScript.async = true;
            tradingViewScreenerScript.type = 'text/javascript';
            tradingViewScreenerScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
            tradingViewScreenerScript.innerHTML = JSON.stringify({
                width: '50%',
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

        // Clean up the scripts when the component is unmounted
        return () => {
            if (tradingViewScreenerContainer) {
                tradingViewScreenerContainer.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className={styles.economiCalendarContainer}>
            <div className={styles.forexCrossRatesWidget}>
                <iframe 
                    src="https://fxpricing.com/fx-widget/forex-cross-rates.php?symbol=EUR,USD,CHF,JPY,GBP,NZD,AED,PKR&fcs_link=hide&click_target=blank&theme=dark&tm-cr=212529&hr-cr=FFFFFF13&flags=circle&font=Arial, sans-serif" 
                    width="100%" 
                    height="420" 
                    style={{ border: '1px solid #eee' }} 
                ></iframe>
            </div>

        </div>
    );
}

export default Currency;
