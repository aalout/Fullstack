"use client"

import React, { useState } from 'react';
import styles from './News.module.scss';
import NewsCard from '../NewsCard';
import { useNewsQuery } from '@/hooks/useNewsQuery';

const News = () => {
  const { data: news } = useNewsQuery();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обработка загрузки
  if (!news) {
    return <div>Loading...</div>;
  }

  const newsCards = news.map((newsItem) => (
    <NewsCard key={newsItem.id} news={newsItem} />
  ));

  const handleNext = () => {
    if (window.innerWidth <= 600) {
      if (currentIndex < newsCards.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      if (currentIndex < newsCards.length - 4) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };
  
  const handlePrev = () => {
    if (window.innerWidth <= 600) {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    }
  };

  const dots = Array(newsCards.length - (window.innerWidth <= 600 ? 0 : 3)).fill(0);

  return (
    <div>
      <div className={styles.news_con_title}>
        <h1>Новости</h1>
      </div>
      <div className={styles.newsCon}>
        <div className={styles.news}>
        {newsCards.slice(currentIndex, currentIndex + (window.innerWidth <= 600 ? 1 : 3))}
        </div>
        <div className={styles.arrows}>
          <button onClick={handlePrev} disabled={currentIndex === 0}>&lt;</button>
          <button onClick={handleNext} disabled={currentIndex === newsCards.length - (window.innerWidth <= 600 ? 1 : 4)}>&gt;</button>
        </div>
        <div className={styles.indicator}>
          {dots.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.button_con}>
        <button className={styles.button}>Все новости</button>
      </div>
    </div>
  );
};

export default News;