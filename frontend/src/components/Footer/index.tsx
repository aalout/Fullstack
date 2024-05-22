'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      <div className={styles.info}>
  <ul className={styles.navIMG}>
    <li className={styles.navIMGItem}>
      <div className={styles.imageContainer}>
        <Image src="/assets/icons/Framelove.png" alt="discount" width={45} height={45} />
      </div>
      <p>Готовим вручную<br/>и с любовью</p>
    </li>

    <li className={styles.navIMGItem}>
      <div className={styles.imageContainer}>
        <Image src="/assets/icons/Group 18log.svg" alt="discount" width={45} height={45} />
      </div>
      <p>Доставим<br/>в день заказа</p>
    </li>

    <li className={styles.navIMGItem}>
      <div className={styles.imageContainer}>
        <Image src="/assets/icons/Vectornatural.png" alt="discount" width={35} height={35} />
      </div>
      <p>100%<br/>миндальная мука<br/>и натуральные<br/>ингредиенты</p>
    </li>
  </ul>
</div>

        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <h2 className={styles.navTitle}>ИНФОРМАЦИЯ</h2>

            <ul className={styles.navUl}>
              <li>
                <a href="#">О компании</a>
              </li>

              <li>
                <a href="#">Гарантии вкуса и свежести</a>
              </li>

              <li>
                <a href="#">Доставка и оплата</a>
              </li>

              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </li>

          <li className={`${styles.navItem} ${styles.navItemExtra}`}>
            <h2 className={styles.navTitle}>КАТАЛОГ</h2>

            <ul className={`${styles.navUl} ${styles.navUlExtra}`}>
              <li>
                <a href="#">Каталог десертов</a>
              </li>

              <li>
                <a href="#">Готовые наборы</a>
              </li>

              <li>
                <a href="#">Собрать свой набор</a>
              </li>

              <li>
                <a href="#">Акции</a>
              </li>
            </ul>
          </li>

          <li className={styles.navItem}>
            <h2 className={styles.navTitle}>ДЛЯ БИЗНЕСА</h2>

            <ul className={styles.navUl}>
              <li>
                <a href="#">Корпоративные подарки</a>
              </li>

              <li>
                <a href="#">Для юридических лиц</a>
              </li>

              <li>
                <a href="#">Оптовикам</a>
              </li>
            </ul>
          </li>
        </ul>

        
        <div>
  <h2 className={styles.navTitle}>+7 (812) 309 82 88</h2>
  <ul className={styles.navUl}>
    <li className={styles.navItem}>
      <p className={styles.worktime}>с 9:00 до 21:00</p>
    </li>
  </ul>
</div>
      </div>

      <div className={styles.legal}>
        <p>&copy; 2021 Макароншоп<br/>ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, дом 22</p>
      </div>
    </footer>
  );
}