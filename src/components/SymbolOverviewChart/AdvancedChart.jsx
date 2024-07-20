import React, { useEffect, useRef, memo } from 'react';

function AdvancedChart() {
  const container = useRef();

  useEffect(() => {
    const containerEl = container.current;

    // Create a new script tag
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      backgroundColor: "rgba(0, 0, 0, 1)",
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    containerEl.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      containerEl.innerHTML = '';
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'black', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ height: '750px', width: '90%'}}>
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%", position: "relative" }}>
          <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default memo(AdvancedChart);
