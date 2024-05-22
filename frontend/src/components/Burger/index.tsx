'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Header from '../Header';
import styles from "./Burger.module.scss"

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.mobileHeader}>
      <button className={styles.burgerButton} onClick={() => setIsOpen(!isOpen)}>
        <Image src="/assets/icons/burger_icon.svg" alt="burger" width={20} height={12} />
      </button>
      <div className={styles.logodiv}>
        <Link href="/"><Image src="/assets/icons/logo_mobile.svg" alt='logo' width={55} height={55} /></Link>
      </div>
      <div className={styles.cartdiv}>
        <Link href="/cart">
            <Image width={24}
                height={24}
                src="/assets/icons/bag.png"
                alt="bag"></Image>
        </Link>
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        
        <Link className={styles.text} href="#">Санкт-Петербург</Link>
        <Link className={styles.text} href="/">СЛАДКИЕ ДНИ</Link>
        <Link className={styles.text} href="/product">ПОДАРОЧНЫЕ НАБОРЫ <Image src="/assets/icons/arrow.png" alt="arrow" width={8} height={5} /></Link>
        <Link className={styles.text} href="/">СОБРАТЬ НАБОР</Link>
        <Link className={styles.text} href="/">СОЗДАТЬ ДИЗАЙН</Link>
        <Link className={styles.text} href="/">КОМПАНИЯМ <Image src="/assets/icons/arrow.png" alt="arrow" width={8} height={5} /></Link>
        <Link className={styles.text} href="/product">ВЕСЬ КАТАЛОГ <Image src="/assets/icons/arrow.png" alt="arrow" width={8} height={5} /></Link>
        <Link className={styles.text} href="#">Гарантия свежести</Link>
        <Link className={styles.text} href="/about">Доставка и оплата</Link>
        <Link className={styles.text} href="#">Оптовые поставки</Link>
        <Link className={styles.text} href="#">Контакты</Link>
        
      </nav>
    </header>
  );
}

export default Burger;