'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>

        <Link href='#'>
      <div className={styles.card_1}>
        <div className={styles.card_content}>
          <Image src="/assets/icons/menu/Group 125n1.png" alt='Menu_icon_1' width={100} height={100} />
            <div>
              <h2 className={styles.menu_card_heading}>Готовые наборы <span><Image src="/assets/icons/menu/Vector.png" alt='Menu_arrow' width={16} height={10} /></span></h2>
            </div>    
            <p className={styles.menu_card_text}>Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.</p>
          </div>
        </div>
        </Link>

        <Link href='#'>
        <div className={styles.card_2}>
        <div className={styles.card_content}>
          <Image src="/assets/icons/menu/Group 122n2.png" alt='Menu_icon_1' width={100} height={100} />
            <div>
              <h2 className={styles.menu_card_heading}>Собрать свой набор <span><Image src="/assets/icons/menu/Vector.png" alt='Menu_arrow' width={16} height={10} /></span></h2>
            </div>    
            <p className={styles.menu_card_text}>Выбрать количество макарун и выбрать вкусы</p>
          </div>
        </div>
        </Link>

        <Link href='#'>
        <div className={styles.card_3}>
        <div className={styles.card_content}>
          <Image src="/assets/icons/menu/Group 124n3.png" alt='Menu_icon_1' width={100} height={100} />
            <div>
              <h2 className={styles.menu_card_heading}>Набор с индивидуальной печатью <span><Image src="/assets/icons/menu/Vector.png" alt='Menu_arrow' width={16} height={10} /></span></h2>
            </div>    
            <p className={styles.menu_card_text}>Собрать набор макарон с уникальным дизайном.</p>
          </div>
        </div>
        </Link>

        <Link href='#'>
        <div className={styles.card_4}>
        <div className={styles.card_content}>
          <Image src="/assets/icons/menu/Group 123n4.png" alt='Menu_icon_1' width={100} height={100} />
            <div>
              <h2 className={styles.menu_card_heading}>Свадебные предложения <span><Image src="/assets/icons/menu/Vector.png" alt='Menu_arrow' width={16} height={10} /></span></h2>
            </div>    
            <p className={styles.menu_card_text}>Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества.</p>
          </div>
        </div>
        </Link>

        <Link href='#'>
        <div className={styles.card_5}>
        <div className={styles.card_content}>
          <Image src="/assets/icons/menu/Group 131n5.png" alt='Menu_icon_1' width={100} height={100} />
            <div>
              <h2 className={styles.menu_card_heading}>Корпоративные подарки <span><Image src="/assets/icons/menu/Vector.png" alt='Menu_arrow' width={16} height={10} /></span></h2>
            </div>    
            <p className={styles.menu_card_text}>От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров.</p>
          </div>
        </div>
        </Link>

        <Link href='#'>
        <div className={styles.card_6}>
        <div className={styles.card_content}>
          <Image src="/assets/icons/menu/Group 130n6.png" alt='Menu_icon_1' width={100} height={100} />
            <div>
              <h2 className={styles.menu_card_heading}>Оптовые поставки <span><Image src="/assets/icons/menu/Vector.png" alt='Menu_arrow' width={16} height={10} /></span></h2>
            </div>    
            <p className={styles.menu_card_text}>Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы.</p>
          </div>
        </div>
        </Link>

      </div>
    </div>
  );
}