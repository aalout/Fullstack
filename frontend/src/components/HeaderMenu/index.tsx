'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderMenu.module.scss';
import { useCart } from '@/hooks/useCart';

export default function HeaderMenu() {
  const { data } = useCart();
  const cartCount = data ? data.length : 0;

  return (
    <div className={styles.header_con}>

      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link className={styles.texta} href="#">Гарантия свежести</Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.texta} href="/about">Доставка и оплата</Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.texta} href="#">Оптовые поставки</Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.texta} href="#">Контакты</Link>
        </li>
      </ul>

      <ul className={styles.navListRight}>
        <li className={styles.navListItemRight}>
            <ul className={styles.listPlace}>
            <li className={styles.listItemPlace}><Image
                width={24}
                height={24}
                src="/assets/icons/place.png"
                alt="place"
            /></li>
            <li className={styles.listItemPlace}><Link className={styles.text} href="#">Санкт-Петербург</Link></li>
            </ul>
        </li>
        <li className={styles.navListItemRight}>
            <ul className={styles.listPlace}>
            <li className={styles.listItemPlace}><Image
                width={24}
                height={24}
                src="/assets/icons/phone.png"
                alt="phone"
            /></li>
            <li className={styles.listItemPlace}><Link className={styles.text} href="#">+7 495 668-07-30</Link></li>
            </ul>
        </li>
        <li className={styles.navListItemRight}>
            <ul className={styles.listPlace}>
            <li className={styles.listItemPlace}><Link href="/cart"><Image
                width={24}
                height={24}
                src="/assets/icons/bag.png"
                alt="bag"
            /></Link></li>
            <li className={styles.listItemPlacecart}><Link className={styles.text} href="/cart">В корзине ({cartCount} товара)</Link></li>
            </ul>
        </li>
      </ul>

      <ul className={styles.listSocial}>
            <li className={styles.listItemSocial}><Link href='#'><Image
                width={24}
                height={24}
                src="/assets/icons/tg.png"
                alt="tg"
            /></Link></li>
            <li className={styles.listItemSocial}><Link href='#'><Image
                width={24}
                height={24}
                src="/assets/icons/vk.png"
                alt="vk"
            /></Link></li>
            <li className={styles.listItemSocial}><Link href='#'><Image
                width={24}
                height={24}
                src="/assets/icons/ok.png"
                alt="ok"
            /></Link></li>
            </ul>
    </div>
  );
}