import Image from 'next/image'
import styles from './MainProducts.module.sass'
import { getMainProducts } from 'app/services/shopify/products';
interface Product {
    id: number;
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    created_at: string;
    handle: string;
    updated_at: string;
    published_at: string;
    template_suffix: null | string;
    published_scope: string;
    tags: string;
    status: string;
    admin_graphql_api_id: string;
    variants: Array<{ /* Detalles de la variante */ }>; // Necesitarías definir el tipo para las variantes
    options: Array<{ /* Detalles de las opciones */ }>; // Necesitarías definir el tipo para las opciones
    images: Array<{ /* Detalles de las imágenes */ }>; // Necesitarías definir el tipo para las imágenes
    image: {
        id: number;
        alt: null | string;
        position: number;
        product_id: number;
        created_at: string;
        updated_at: string;
        admin_graphql_api_id: string;
        width: number;
        height: number;
        src: string;
        variant_ids: number[];
    };
}


export const MainProducts = async () => {
   // const response = await fetch('http://localhost:3000/api')
    const products  = await getMainProducts();
    //const { products } = await response.json()

    return (
        <section className={styles.MainProducts}>
            <h3>✨ New products released!</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product: Product) => {
                    const imageSrc = product.images[0].src;
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image src={imageSrc} fill alt={product.title} loading="eager" />
                        </article>
                    )
                })}
            </div>
        </section>
    );
};
