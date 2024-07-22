'use client'
import Image from 'next/image'
import styles from 'app/sass/global-error.module.sass'

//los errores deben se de tipo cliente


export default function GlobalError({
    reset,
}: ErrorPagesProps) {
    return (
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Sucedio un error</h1>
            <Image
                src='/img/error.png'
                alt='Picture aboput error'
                width={500}
                height={500}>
            </Image>
            <p className={styles.Error__message}>Sucedio un errror</p>
            <button className={styles.Error__button} onClick={reset}> Recargar</button>
        </main>
    )
}