import Link from 'next/link'
import Image from 'next/image'
import styles from 'app/sass/not-found.module.sass'
export default function NotFound() {
    return (
        <main className={styles.NotFound}>
            <h1 className={styles.NotFound__title}>404</h1>
            <Image src='/img/404.png' alt='Esto no esta' width={500} height={500}></Image>
            <h2 className={styles.NotFound__subtitle}>Could not find requested resource</h2>
            <Link className={styles.NotFound__link} href="/">Return Home</Link>
        </main>
    )
}