import Link from "next/link";
import styles from "./Header.module.sass";
import { validateAcceessToken } from "app/utils/auth/validateAccessToken";
//import  ShoppingCart  from "../ShoppingCart";
import dynamic from "next/dynamic"


const NosSSRShoppingCart = dynamic(() => import('../ShoppingCart'), {
    ssr: false
})


export const Header = async () => {
    // const cookiesStore = cookies();
    // const token = cookiesStore.get('accesToken')?.value

    const customer = await validateAcceessToken();

    const { firstName } = customer;
    if (firstName) {
        console.log('Customer first name:', firstName);
    } else {
        console.error('No valid customer first name found.');
    }
    return (
        <header className={styles.Header}>
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
            </nav>
            <div className={styles.Header__user}>
                {firstName ? (<Link href="/my-account">Hola! {customer.firstName}</Link>) : (<Link href="/login">Login</Link>)}
                <NosSSRShoppingCart />
            </div>
        </header>
    );
};
