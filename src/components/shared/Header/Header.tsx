import Link from "next/link";
import styles from "./Header.module.css";
import { cookies } from "next/headers";
import { validateAcceessToken } from "app/utils/auth/validateAccessToken";


export const Header = async() => {
    // const cookiesStore = cookies();
    // const token = cookiesStore.get('accesToken')?.value

    const { firstName }: { firstName: string } = await validateAcceessToken();
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
                </ul>
                {firstName ? (<p>Hola {firstName}! Bienvendio😁👍</p>):( <Link href="/login">Login</Link>)}
            </nav>
        </header>
    );
};
