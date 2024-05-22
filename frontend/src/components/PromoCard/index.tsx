'use client';

import Image from 'next/image';
import styles from './PromoCard.module.scss';

interface PromoCardProps {
  promo: any;
}

export default function PromoCard({ promo }: PromoCardProps) {
  if (!promo) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.promocard}>
      <div>
        <Image src={`/assets/images/promo/${promo.image}`} alt='promo' width={270} height={270} />
      </div>
      <div className={styles.promotitle}>
        <h3>{promo.title}</h3>
      </div>
      <div className={styles.promotext}>
        <p>{promo.text}</p>
      </div>
    </div>
  );
}
