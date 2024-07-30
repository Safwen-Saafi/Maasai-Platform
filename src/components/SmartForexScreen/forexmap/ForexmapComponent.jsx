import React, { useState, useEffect } from 'react';
import styles from './ForexmapComponent.module.css';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const markers = [
    { name: "London", coordinates: [-0.1276, 51.5074], timezone: "Europe/London", open: "08:00", close: "16:30" },
    { name: "New York", coordinates: [-74.0060, 40.7128], timezone: "America/New_York", open: "09:30", close: "16:00" },
    { name: "Sydney", coordinates: [151.2093, -33.8688], timezone: "Australia/Sydney", open: "10:00", close: "16:00" },
    { name: "Tokyo", coordinates: [139.6917, 35.6895], timezone: "Asia/Tokyo", open: "09:00", close: "15:00" },
    { name: "Frankfurt", coordinates: [8.6821, 50.1109], timezone: "Europe/Berlin", open: "08:00", close: "16:30" },
    { name: "Chicago", coordinates: [-87.6298, 41.8781], timezone: "America/Chicago", open: "09:30", close: "16:00" },
];

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json";

const getCityTime = (timezone) => {
    const dateTime = new Date().toLocaleString("en-US", { timeZone: timezone });
    return new Date(dateTime);
};

const isMarketOpen = (timezone, open, close) => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
    const [openHours, openMinutes] = open.split(':').map(Number);
    const [closeHours, closeMinutes] = close.split(':').map(Number);
    const openTime = new Date(now);
    const closeTime = new Date(now);

    openTime.setHours(openHours, openMinutes, 0, 0);
    closeTime.setHours(closeHours, closeMinutes, 0, 0);

    return now >= openTime && now <= closeTime;
};

const isTokyoMarketOpen = () => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
    const morningOpen = new Date(now);
    const morningClose = new Date(now);
    const afternoonOpen = new Date(now);
    const afternoonClose = new Date(now);

    morningOpen.setHours(9, 0, 0, 0);
    morningClose.setHours(11, 30, 0, 0);
    afternoonOpen.setHours(12, 30, 0, 0);
    afternoonClose.setHours(15, 0, 0, 0);

    return (now >= morningOpen && now <= morningClose) || (now >= afternoonOpen && now <= afternoonClose);
};

const calculateCountdown = (timezone, open, close) => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
    const [openHours, openMinutes] = open.split(':').map(Number);
    const [closeHours, closeMinutes] = close.split(':').map(Number);

    const openTime = new Date(now);
    const closeTime = new Date(now);

    openTime.setHours(openHours, openMinutes, 0, 0);
    closeTime.setHours(closeHours, closeMinutes, 0, 0);

    if (now <= openTime) {
        return { countdown: openTime - now, status: "TO OPEN" };
    } else if (now <= closeTime) {
        return { countdown: closeTime - now, status: "TO CLOSE" };
    } else {
        return { countdown: (24 * 60 * 60 * 1000) - (now - closeTime), status: "TO OPEN" };
    }
};

const formatCountdown = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const getDayName = (date) => {
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

function ForexmapComponent() {
    const [cityTimes, setCityTimes] = useState({});
    const [hoveredMarker, setHoveredMarker] = useState(null);
    const [countdowns, setCountdowns] = useState({});

    useEffect(() => {
        const fetchTimes = () => {
            const times = {};
            const countdowns = {};
            for (const marker of markers) {
                times[marker.name] = getCityTime(marker.timezone);
                countdowns[marker.name] = calculateCountdown(marker.timezone, marker.open, marker.close);
            }
            setCityTimes(times);
            setCountdowns(countdowns);
        };

        fetchTimes(); 

        const intervalId = setInterval(fetchTimes, 1000); 

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div className={styles.forexmap}>
            <div className={styles.title}>
                <h1>
                    <span className={styles.smart}>SMART </span>
                    <span className={styles.forex}>FOREX </span>
                    <span className={styles.screen}>SCREEN</span>
                </h1>
            </div>
            <div className={styles.mapContainer}>
                <ComposableMap
                    className={styles.composableMap}
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 120, // Increased scale to zoom in
                        center: [0, -50], 
                    }}
                >
                  <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies
                                .filter((geo) => geo.properties.name !== 'Antarctica')
                                .map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="#2f3239"
                                    />
                                ))
                        }
                    </Geographies> 

                    {markers.map(({ name, coordinates, timezone, open, close }) => {
                        const marketOpen = name === "Tokyo" ? isTokyoMarketOpen() : isMarketOpen(timezone, open, close);
                        const markerColor = marketOpen ? '#91C43B' : '#FF0000';  // Green for open, Red for closed
                        const statusColorClass = marketOpen ? styles.statusOpen : styles.statusClosed;
                        const yOffset = name === "Frankfurt" || name === "Chicago" ? 20 : -15;
                        return (
                            <Marker
                                key={name}
                                coordinates={coordinates}
                                onMouseEnter={() => setHoveredMarker(name)}
                                onMouseLeave={() => setHoveredMarker(null)}
                            >
                                <circle className={styles.markerCircle} r={5} fill={markerColor} />
                                <text textAnchor='middle' y={yOffset} className={styles.text}>
                                    {name}
                                </text>
                                {hoveredMarker === name && (
                                    <foreignObject 
                                        className={styles.foreignObject} 
                                        x={name === "Sydney" ? -125 : -125} 
                                        y={name === "Sydney" ? -100 : 10} 
                                        width={250} 
                                        height={100}
                                    >
                                        <div className={styles.timeBox}>
                                            <div>Current Time: {cityTimes[name] ? new Date(cityTimes[name]).toLocaleTimeString() : "Fetching time..."}</div>
                                            <div>
                                                {name === "Tokyo"
                                                    ? "Open: 09:00 AM - 11:30 AM, 12:30 PM - 03:00 PM"
                                                    : `Open: ${open}, Close: ${close}`
                                                }
                                            </div>
                                            <div className={statusColorClass}>
                                                Status: {name === "Tokyo" ? (isTokyoMarketOpen() ? "Open" : "Closed") : (isMarketOpen(timezone, open, close) ? "Open" : "Closed")}
                                            </div>
                                        </div>
                                    </foreignObject>
                                )}
                            </Marker>
                        );
                    })}
                </ComposableMap>
            </div>
            <div className={styles.countdownContainer}>
                {markers.map(({ name, timezone }) => {
                    const now = new Date().toLocaleString("en-US", { timeZone: timezone });
                    const countdown = countdowns[name];
                    const dayName = getDayName(new Date(now));
                    const statusClass = countdown?.status === "TO OPEN" ? styles.countdownStatusOpen : styles.countdownStatusClosed;
                    return (
                        <div key={name} className={styles.countdownBox}>
                            <div>{name}</div>
                            <div>{new Date(now).toLocaleDateString()}</div>
                            <div className={styles.dayName}>{dayName}</div>
                            <div>{countdown ? formatCountdown(countdown.countdown) : "Calculating..."}</div>
                            <div className={statusClass}>{countdown?.status}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ForexmapComponent;
