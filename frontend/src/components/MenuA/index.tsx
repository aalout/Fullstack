'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './MenuA.module.scss';

export default function MenuA() {
  return (
    <div className={styles.menuA}>
        <div className={styles.mainDiv}>
            <Link className={styles.mLink} href="#"><div className={styles.mDiv}>
                <p>Готовые наборы</p>
                <Image className={styles.arrow} src="/assets/icons/arrow_menu.svg"  alt='menu_arrow' width={12} height={8} />
            </div>
            </Link>
            <Link className={styles.mLink} href="#"><div className={styles.mDiv}>
                <p>Собрать свой набор</p>
                <Image className={styles.arrow} src="/assets/icons/arrow_menu.svg"  alt='menu_arrow' width={12} height={8} />
            </div>
            </Link>
            <Link className={styles.mLink} href="#"><div className={styles.mDiv}>
                <p>Набор с индивидуальной печатью</p>
                <Image className={styles.arrow} src="/assets/icons/arrow_menu.svg"  alt='menu_arrow' width={12} height={8} />
            </div>
            </Link>
            <Link className={styles.mLink} href="#"><div className={styles.mDiv}>
                <p>Свадебные предложения</p>
                <Image className={styles.arrow} src="/assets/icons/arrow_menu.svg"  alt='menu_arrow' width={12} height={8} />
            </div>
            </Link>
            <Link className={styles.mLink} href="#"><div className={styles.mDiv}>
                <p>Корпоративные подарки</p>
                <Image className={styles.arrow} src="/assets/icons/arrow_menu.svg"  alt='menu_arrow' width={12} height={8}/>
            </div>
            </Link>
            <Link className={styles.mLink} href="#"><div className={styles.mDiv}>
                <p>Для юридических лиц</p>
                <Image className={styles.arrow} src="/assets/icons/arrow_menu.svg"  alt='menu_arrow' width={12} height={8} />
            </div>
            </Link>
        </div>
    </div>
  );
}