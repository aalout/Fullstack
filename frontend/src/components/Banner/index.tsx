import styles from "./Banner.module.scss"
import Image from 'next/image';

export default function Banner() {
    return (
      <div className={styles.banner}>
        <div className={styles.container}>
  <Image src="/assets/icons/banner_image123.svg" width={600} height={600} alt="Banner" className={styles.image}/>
  <div className={styles.text_block}>
    <div className={styles.banner_logo}>
  <p>MACARONSHOP <br/><span>—— since 2013 ——</span></p>
  </div>
  <div>
    <h2>Настоящая любовь</h2>
    <p>Пирожные макаронс и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
    </div>
  </div>
  <Image src="/assets/icons/banner_image123.svg" width={600} height={600} alt="Banner" className={styles.image_mobile }/>
</div>
      </div>
    )
}