"use client"

import React, { useState } from 'react';
import styles from './Promo.module.scss';
import PromoCard from '../PromoCard';
import { usePromoQuery } from '../../hooks/usePromoQuery'; 

const Promo = () => {
  const { data: promos } = usePromoQuery();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!promos) {
    return <div>Loading...</div>;
  }

  const promoCards = promos.map((promo) => (
    <PromoCard key={promo.id} promo={promo} />
  ));

  const handleNext = () => {
    if (window.innerWidth <= 600) {
      if (currentIndex < promoCards.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      if (currentIndex < promoCards.length - 4) {
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

  const dots = Array(promoCards.length - (window.innerWidth <= 600 ? 0 : 3)).fill(0);

  return (
    <div>
      <div className={styles.promo_con_title}>
        <h1>Акции</h1>
      </div>
      <div className={styles.promoCon}>
        <div className={styles.promo}>
          {promoCards.slice(currentIndex, currentIndex + (window.innerWidth <= 600 ? 1 : 4))}
        </div>
        <div className={styles.arrows}>
          <button onClick={handlePrev} disabled={currentIndex === 0}>&lt;</button>
          <button onClick={handleNext} disabled={currentIndex === promoCards.length - (window.innerWidth <= 600 ? 1 : 4)}>&gt;</button>
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
    </div>
  );
};

export default Promo;
