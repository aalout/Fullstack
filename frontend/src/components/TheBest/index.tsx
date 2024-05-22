'use client';

import Image from 'next/image';
import styles from './TheBest.module.scss';

export default function TheBest() {
  return (
    <div>
	<div className={styles.best_con_title}>
		<h1>Мы обо всём позаботились</h1> </div>
	<div className={styles.bestCon}>
		<div className={styles.best}>

			<div className={styles.bestcard}>
				<div>
					<Image src="/assets/images/TheBest/01.svg" alt='best' width={270} height={270}/> </div>
				<div className={styles.besttitle}>
					<h3>Лучшие ингредиенты</h3> </div>
				<div className={styles.besttext}>
					<p>Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
				</div>
			</div>

			<div className={styles.bestcard}>
				<div>
					<Image src="/assets/images/TheBest/02.svg" alt='best' width={270} height={270}/> </div>
				<div className={styles.besttitle}>
					<h3>Упаковка</h3> </div>
				<div className={styles.besttext}>
					<p>Что-то про суперкоробочки и бантики и бла бла бла</p>
				</div>
			</div>

			<div className={styles.bestcard}>
				<div>
					<Image src="/assets/images/TheBest/03.svg" alt='best' width={270} height={270}/> </div>
				<div className={styles.besttitle}>
					<h3>Получение в день заказа</h3> </div>
				<div className={styles.besttext}>
					<p>В день заказа доставка курьером или самовывоз</p>
				</div>
			</div>

			<div className={styles.bestcard}>
				<div>
					<Image src="/assets/images/TheBest/04.svg" alt='best' width={270} height={270}/> </div>
				<div className={styles.besttitle}>
					<h3>Анонимная доставка</h3> </div>
				<div className={styles.besttext}>
					<p>Можем преподнести Ваш заказ как анонимный подарок</p>
				</div>
			</div>
		</div>
	</div>
</div>
  );
}