import React, { useEffect, useState } from 'react';
import styles from './FinancialnewsComponent.module.css';

function FinancialnewsComponent() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = '32b7f2c2cbe74532bcb78b189ca77741';  // Votre clé API NewsAPI

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=financial%20OR%20market%20OR%20trading%20OR%20prices%20OR%20stocks%20OR%20forex&language=en&pageSize=8&sortBy=publishedAt&apiKey=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [apiKey]);

    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p className={styles.error}>Error: {error.message}</p>;

    const timeAgo = (date) => {
        const now = new Date();
        const publishedAt = new Date(date);
        const diffInHours = Math.floor((now - publishedAt) / (1000 * 60 * 60));
        if (diffInHours < 1) return 'Just now';
        if (diffInHours === 1) return '1 hour ago';
        return `${diffInHours} hours ago`;
    };

    // Fonction pour nettoyer le titre en supprimant les notations de ticker
    const cleanTitle = (title) => {
        return title.replace(/\(NYSE:[A-Z]+\)/g, '').trim(); // Supprime les occurrences de (NYSE:TICKER)
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.financial}>FINANCIAL</span> <span className={styles.news}>NEWS</span>
            </h2>
            <div className={styles.cardsContainer}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.card}>
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} className={styles.image} />
                        )}
                        <div className={styles.cardContent}>
                            <h3 className={styles.headline}>{cleanTitle(article.title)}</h3>
                            <p className={styles.description}>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.button}>
                                Read More
                            </a>
                            <span className={styles.date}>{timeAgo(article.publishedAt)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FinancialnewsComponent;
