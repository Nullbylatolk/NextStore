import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";

interface ProductPageProps {
    searchParams: {
        id: string;
    }
}

export async function generateMetadata(props: ProductPageProps) {
    const id = props.searchParams.id;
    const products: ProductType[] | undefined = await getProducts(id);

    if (!products || products.length === 0) {
        return {
            title: "Product not found",
            description: "The product you are looking for does not exist.",
        };
    }

    const product = products[0];

    return {
        title: product.title,
        description: product.description,
        keywords: product.tags,
        openGraph: {
            images: [product.image]
        }
    }
}

export default async function ProductPage(props: ProductPageProps) {
    const id = props.searchParams.id;
    const products = await getProducts(id);

    if (!products || products.length === 0) {
        return <p>Product not found.</p>; // Puedes cambiar esto a una redirección o un componente de error personalizado
    }

    const product = products[0];
    console.log('searchParams ', id);

    return <ProductView product={product} />;
}
