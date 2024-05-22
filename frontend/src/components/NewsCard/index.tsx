'use client';

import Image from 'next/image';
import styles from './NewsCard.module.scss';
import Link from 'next/link';
import { News } from '../../types/news';

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {

    const newsTimeDate = new Date(news.newsTime);
  return (
    <div className={styles.newscard}>
      <Link href="#">
        <div>
          <Image
            className={styles.NewsImage}
            src={`/assets/images/News/${news.image}`}
            alt='news'
            width={370}
            height={210}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.newsdate}>
            <p>{newsTimeDate.toLocaleDateString()}</p>
          </div>

          <div className={styles.newstitle}>
            <h3>{news.title}</h3>
          </div>

          <div className={styles.newstext}>
            <p>{news.text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
