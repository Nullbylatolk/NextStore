import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul className={styles.Header__list}>
                    {/* link usarlo cuando son URLS internas de un pryecto
                        anchor cuando son links externos a tu pagina */}
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/store">Store</Link>
                    </li>
                    <li>
                        <Link href="/test">Test</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
