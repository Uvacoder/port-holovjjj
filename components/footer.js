import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export default function Footer({location}) {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.image}
        src="/earth.svg"
        alt="Picture of the Earth"
        width={36}
        height={36}
      /> {location}
    </footer>
  )
}
