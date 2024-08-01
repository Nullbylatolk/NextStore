import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";
import styles from './StoreLayout.module.sass'


export const runtime = "edge";

export default async function Layout({ children }: { children: React.ReactNode }) {

    const collections = await getCollections();

    console.log(collections)
    return (
        <main className={styles.StoreLayout}>
            <h1>Explore</h1>
            <nav>
                <ul className={styles.StoreLayout__list}>
                    {
                        collections.map((item: collections) =>
                        (
                            <Link key={item.id} href={'/store/' + item.handle} className={styles.StoreLayout__chip}>
                                {item.title}
                            </Link>
                        )
                        )
                    }
                </ul>
            </nav>
            {children}
        </main>
    );
}
